import {WonderPushAbstract, WonderPushCustomProperties} from './wonderpush-nativescript-sdk.common';

declare const WonderPush: any;

export class WonderPushIos extends WonderPushAbstract {

    constructor() {
        super();
        this._ios = this;
    }

    protected init() {
    }

    setClientIdSecret(clientId: string, clientSecret: string) {
        WonderPush.setClientIdSecret(clientId, clientSecret);
    }

    setupDelegateForApplication(application: UIApplication) {
        WonderPush.setupDelegateForApplication(application);
    }

    setupDelegateForUserNotificationCenter() {
        WonderPush.setupDelegateForUserNotificationCenter();
    }

    getNotificationEnabled() {
        return WonderPush.getNotificationEnabled();
    }

    setNotificationEnabled(enabled: boolean) {
        WonderPush.setNotificationEnabled(enabled);
    }

    setLogging(enabled: boolean) {
        WonderPush.setLogging(enabled);
    }

    trackEvent(type: string, custom?: WonderPushCustomProperties) {
        WonderPush.trackEventWithData(type, custom);
    }

    getInstallationCustomProperties(): WonderPushCustomProperties {
        return WonderPush.getInstallationCustomProperties();
    }

    putInstallationCustomProperties(custom?: WonderPushCustomProperties) {
        WonderPush.putInstallationCustomProperties(custom);
    }

}

exports.WonderPush = new WonderPushIos();
