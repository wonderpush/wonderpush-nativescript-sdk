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
        const nsdict = WonderPush.getInstallationCustomProperties();
        // Convert the NSDictionary to a plain object, using JSON serialization to avoid complex recursive marshalling code
        let jsonData: NSData;
        try {
            jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(nsdict, 0);
        } catch (err) {
            console.error("Failed to marshal NSDictionary:", err);
            return {};
        }
        const jsonStr: string = NSString.alloc().initWithDataEncoding(jsonData, NSUTF8StringEncoding).toString();
        return JSON.parse(jsonStr);
    }

    putInstallationCustomProperties(custom?: WonderPushCustomProperties) {
        WonderPush.putInstallationCustomProperties(custom);
    }

}

exports.WonderPush = new WonderPushIos();
