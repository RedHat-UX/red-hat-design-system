#!/bin/bash
# get a temp dir
TMP_DIR="$(mktemp -d)"

# get a temp file to store filenames and line numbers
MATCHES="$(mktemp)"

## App domains:
#       (
#         (One of **WORD**, `-`, or `.` (_>= 1x_))
#         `.`
#       )(_optional_)
#      `apps.`
#      (Either `int` or `ext-waf`)
#      `.`
#      (Either `spoke` or `mpp`)
#      `.`
#      (Either `prod` or `preprod`)
#      `.`
#      (Either (`us-`, (Either `east` or `west`), `-`, (Either `1` or `2`)), or `iad2`
#      `.`
#      (Either `aws` or `dc`)
#      `.paas.redhat.com`
APPS_RE="([\w\-\.]+\.)?apps\.(int|ext-waf)\.(spoke|mpp)\.(prod|preprod)\.(us-(east|west)-(1|2)|iad2)\.(aws|dc)\.paas\.redhat\.com"

## Console domains
#      `console-openshift-console.apps.mpp`
#      One of **WORD**, `-`, or `.` (_0-20x_)
#      `.`
#      (Either `p1.openshiftapps` or `dc.paas.redhat`)
#      `.com`
CONS_RE="console-openshift-console\.apps\.mpp[\w\-\.]{0,20}\.(p1\.openshiftapps|dc\.paas\.redhat)\.com"

# copy working files to temp dir
git checkout-index -a --prefix="$TMP_DIR/"

# for each regexp test
for RE in $APPS_RE $CONS_RE; do
  cd $TMP_DIR
  # for docs and elements dirs
  for DIR in docs "elements/**/*.md"; do
    # check those dirs' files with that regexp
    grep -EHrni --color "$RE" $DIR
    # and save the output
    grep -EHrni "$RE" $DIR >> $MATCHES
  done
done

# if the output has lines in it (i.e. matching urls were found)
# Then report to the user and fail
if [ `cat $MATCHES | wc -l` -gt 0 ]; then
  echo ""
  echo "Sensitive links found!"
  rm -rf $TMP_DIR
  exit 1
else
  rm -rf $TMP_DIR
fi
