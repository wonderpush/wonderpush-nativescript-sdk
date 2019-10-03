// https://github.com/Essent/nativescript-custom-entitlements/blob/119cf67fb70b3a65becb649d91a61910d71d18da/lib/before-prepare.js
var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, hookArgs) {
    var platform = hookArgs.prepareData.platform.toLowerCase();

    if (platform == 'ios') {
        var appResourcesDirectoryPath = hookArgs.projectData.appResourcesDirectoryPath;
        var inputEntitlementsFile = path.join(appResourcesDirectoryPath, 'iOS', 'app.entitlements');
        var entitlementsFile = hookArgs.projectData.projectName + '.entitlements';
        var entitlementsPath = path.join(hookArgs.projectData.projectName, entitlementsFile);
        var platformResourcesDirectory = path.join(appResourcesDirectoryPath, 'iOS');
        var target = path.join(platformResourcesDirectory, 'build.xcconfig');

        // First make sure the entitlements file exists
        return fs.open(inputEntitlementsFile, 'wx')
            .then(function (fd) {
                return fs.write(fd, ''
                    + '<?xml version="1.0" encoding="UTF-8"?>\n'
                    + '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n'
                    + '<plist version="1.0">\n'
                    + '<dict>\n'
                    + '        <key>aps-environment</key>\n'
                    + '        <string>development</string>\n'
                    + '</dict>\n'
                    + '</plist>\n'
                    + '')
                    .then(function() {
                        logger.info('Initialized', inputEntitlementsFile);
                        return fs.close(fd);
                    });
            }, function (err) {
                if (err) {
                    if (err.code === 'EEXIST') {
                        // File already exists
                        return fs.readFile(inputEntitlementsFile)
                            .then(function (data) {
                                if (data.indexOf('<key>aps-environment</key>') < 0) {
                                    logger.warn('Please add `<key>aps-environment</key><string>development</string>` to your', inputEntitlementsFile, 'file.');
                                }
                            }, function (err) {
                                logger.error(err);
                                logger.info(inputEntitlementsFile, ' already exists, could not make sure it contains: `<key>aps-environment</key><string>development</string>`, please check yourself.');
                            });
                    }
                    throw err;
                }
            })
            // Then add the appropriate entry to build.xcconfig
            .then(function () {
                return fs.readFile(target);
            })
            .then(function (buildData) {
                if (!buildData.toString().match(/^\s*CODE_SIGN_ENTITLEMENTS/mg)) {
                    var codeSignProp = '\nCODE_SIGN_ENTITLEMENTS = ' + entitlementsPath;
                    logger.info('Add code sign prop: ' + codeSignProp);
                    return fs.appendFile(target, codeSignProp);
                } // else: CODE_SIGN_ENTITLEMENTS already added
            });
    }
    // skip android
    return Promise.resolve();
};
