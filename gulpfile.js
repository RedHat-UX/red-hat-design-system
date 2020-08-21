/* eslint-env node, es6 */
/* global require */
'use strict';

/**
 * Configuration
 */

// Load dependencies
const
  {
    parallel,
    series,
    src,
    dest,
    task,
    watch,
  } = require('gulp'),
  shell = require('gulp-shell'),
  gulpIf = require('gulp-if'),
  sourceMaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  // sassGlobbing = require('gulp-sass-globbing'),
  sassLint = require('gulp-sass-lint'),
  postCss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssNano = require('cssnano'),
  pxToRem = require('postcss-pxtorem'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  eslint = require('gulp-eslint'),
  browserSync = require('browser-sync').create(),
  compress = require('compression');

// File locations
const
  cssSource = 'scss/**/*.scss',
  cssOutput = 'webroot/css/',
  jsSource = 'js/**/*.js',
  jsOutput = 'webroot/js/',
  contentSource = 'pages/**/*.*',
  nodeModulesOutput = 'webroot/node_modules';

const staticDependencies = [
  ['node_modules/@patternfly/**', `${nodeModulesOutput}/@patternfly/`,],
];

// // JS dependencies to be minified
// const staticJsDependenciesToMinify = [
//   'static-dependencies/libraries/details-element-polyfill/dist/details-element-polyfill.js',
// ];

const isDev = process.env.NODE_ENV === 'dev';

if (isDev) {
  console.log('/************************\n * Compiling in DEV mode!\n */\n');
}
else {
  console.log('/*************************\n * Compiling in PROD mode.\n */\n');
}

// Create easier to read errors
const logError = (error) => console.log(
  `\n- Begin error ----------\n
  ${error}
  \n- End error ------------\n`
);

/**
 * CSS Compilation
 */
const compileCSS = () => {
  return src(cssSource)
    // Lint first
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(
      postCss([
        pxToRem({
          'propList': ['*',],
        }),
        autoprefixer(),
      ])
    )
    .pipe(gulpIf(isDev, sourceMaps.write()))
    .pipe(gulpIf(!isDev, postCss([cssNano(),])))
    .pipe(dest(cssOutput));
};
/**
 * JS Compilation
 */
const compileJavascript = () =>
  src(jsSource)
    .pipe(gulpIf(isDev, sourceMaps.init()))
    .pipe(eslint())
    .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
    .pipe(
      babel({
      'presets': ['@babel/preset-env',],
      })
      // Provide meaningful error output
      .on('error', (error) => logError(error))
    )
    // Minify if production build
    .pipe(gulpIf(isDev, sourceMaps.write()))
    .pipe(gulpIf(!isDev, uglify()))
    .pipe(dest(jsOutput));

/**
 * JS Compilation
 */
// const uglifyLibraryJavascript = () =>
//   src(staticJsDependenciesToMinify)
//     .pipe(gulpIf(isDev, sourceMaps.init()))
//     // Minify if production build
//     .pipe(gulpIf(!isDev, uglify()))
//     .pipe(gulpIf(isDev, sourceMaps.write()))
//     .pipe(dest(jsOutput));

/**
 * Copy Files
 */
const copy = (fileSource, fileTarget) =>
  src(fileSource)
    .pipe(dest(fileTarget));

/**
 * Copy static dependencies into static folder
 */
const copyStaticDependencies = (done) => {
  for (let i = 0; i < staticDependencies.length; i++) {
    const staticDependency = staticDependencies[i];
    copy(staticDependency[0], staticDependency[1]);
  }
  done();
};

/**
 * Start Browsersync
 */
const startBrowserSync = (done) => {
  browserSync.init({
    'server': {
      'baseDir': 'webroot/',
      'middleware': [compress(),],
    },
  });
  done();
};

const reloadBrowserSync = (done) => {
  browserSync.reload();
  done();
};

/**
 * Eleventy Tasks
 */
task('compileEleventyFiles', shell.task('eleventy'));

/**
 * Watch Files
 */
const watchFiles = (done) => {
  // Do what we came here to do
  watch(cssSource, series(compileCSS, reloadBrowserSync));
  watch(jsSource, series(compileJavascript, reloadBrowserSync));
  watch(contentSource, series('compileEleventyFiles', reloadBrowserSync));
  done();
};

/**
 * Gulp tasks
 */
// Builds into static
task('default',
  parallel(
    copyStaticDependencies,
    compileCSS,
    compileJavascript,
    'compileEleventyFiles'
  )
);

// Starts browsersync, watches project for changes and reloads all browsers
task('watch',
  series(
    'default',
    startBrowserSync,
    watchFiles
  )
);

// Builds to cpfed.http://cpfed.usersys.redhat.com/rhdss/
task('publish:cpfed',
  series(
    parallel(
      copyStaticDependencies,
      compileCSS,
      compileJavascript,
      shell.task('eleventy --pathprefix=rhdss')
    ),
    shell.task('rsync -av webroot/* cpfed@cpfed.usersys.redhat.com:/usr/share/nginx/html/rhdss/')
  )
);

// Builds to cpfed.http://cpfed.usersys.redhat.com/rhdss/
task('publish:ghpages',
  parallel(
    copyStaticDependencies,
    compileCSS,
    compileJavascript,
    shell.task('eleventy --pathprefix=red-hat-design-system-site')
  )
);

