// https://github.com/Essent/nativescript-custom-entitlements/blob/119cf67fb70b3a65becb649d91a61910d71d18da/lib/after-prepare.js
var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, hookArgs) {
    var platform = hookArgs.prepareData.platform.toLowerCase();

    if (platform == 'ios') {
        var appResourcesDirectoryPath = hookArgs.projectData.appResourcesDirectoryPath;
        var entitlementsFile = path.join(appResourcesDirectoryPath, 'iOS', 'app.entitlements');
        var projectRoot = path.join(hookArgs.projectData.platformsDir, 'ios');
        var project = path.join(projectRoot, hookArgs.projectData.projectName);
        var dest = path.join(project, hookArgs.projectData.projectName + '.entitlements');

        return fs.copy(entitlementsFile, dest)
            .then(function () {
                logger.info('Copied `' + entitlementsFile + '` to `' + dest + '`');
            });
    }

    return Promise.resolve();
};
