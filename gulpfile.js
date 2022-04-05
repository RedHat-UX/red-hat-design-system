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
  stylelint = require('gulp-stylelint'),
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
 * Eleventy Tasks
 */
task('compileEleventyFiles', shell.task('eleventy'));

/**
 * Watch Files
 */
const watchFiles = (done) => {
  // Do what we came here to do
  watch(cssSource, reloadBrowserSync);
  watch(jsSource, reloadBrowserSync);
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
      shell.task('eleventy --pathprefix=rhdss')
    ),
    shell.task('rsync -av webroot/* cpfed@cpfed.usersys.redhat.com:/usr/share/nginx/html/rhdss/')
  )
);

// Builds to cpfed.http://cpfed.usersys.redhat.com/rhdss/
task('publish:ghpages',
  parallel(
    copyStaticDependencies,
    // shell.task('eleventy --pathprefix=red-hat-design-system-site')
    shell.task('eleventy')
  )
);

