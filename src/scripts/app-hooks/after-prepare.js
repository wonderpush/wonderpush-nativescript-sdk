// https://github.com/Essent/nativescript-custom-entitlements/blob/119cf67fb70b3a65becb649d91a61910d71d18da/lib/after-prepare.js
var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
    var platform = hookArgs.platform.toLowerCase();

    if (platform == 'ios') {
        var appResourcesDirectoryPath = projectData.appResourcesDirectoryPath;
        var entitlementsFile = path.join(appResourcesDirectoryPath, 'iOS', 'app.entitlements');
        var projectRoot = path.join(projectData.platformsDir, 'ios');
        var project = path.join(projectRoot, projectData.projectName);
        var dest = path.join(project, projectData.projectName + '.entitlements');

        return fs.copy(entitlementsFile, dest)
            .then(function () {
                logger.out('Copied `' + entitlementsFile + '` to `' + dest + '`');
            });
    }

    return Promise.resolve();
};
