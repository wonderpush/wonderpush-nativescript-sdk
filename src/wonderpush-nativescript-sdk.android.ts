import {WonderPushAbstract, WonderPushCustomProperties} from './wonderpush-nativescript-sdk.common';
import * as application from "application";

export class WonderPushAndroid extends WonderPushAbstract {

    constructor() {
        super();
        this._android = this;
    }

    init() {
        com.wonderpush.sdk.WonderPush.initialize(application.getNativeApplication());
    }

    initialize(context: android.content.Context, clientId: string, clientSecret: string) {
        com.wonderpush.sdk.WonderPush.initialize(context, clientId, clientSecret);
    }

    setLogging(enabled: boolean) {
        com.wonderpush.sdk.WonderPush.setLogging(enabled);
    }

    getNotificationEnabled() {
        return com.wonderpush.sdk.WonderPush.getNotificationEnabled();
    }

    setNotificationEnabled(enabled: boolean) {
        com.wonderpush.sdk.WonderPush.setNotificationEnabled(enabled);
    }

    trackEvent(type: string, custom?: WonderPushCustomProperties) {
        const jsonObj = custom ? new org.json.JSONObject(JSON.stringify(custom)) : null;
        com.wonderpush.sdk.WonderPush.trackEvent(type, jsonObj);
    }

    getInstallationCustomProperties(): WonderPushCustomProperties {
        const jsonObj = com.wonderpush.sdk.WonderPush.getInstallationCustomProperties();
        if (jsonObj == null) return {};
        return JSON.parse(jsonObj.toString());
    }

    putInstallationCustomProperties(custom?: WonderPushCustomProperties) {
        const jsonObj = custom ? new org.json.JSONObject(JSON.stringify(custom)) : null;
        com.wonderpush.sdk.WonderPush.putInstallationCustomProperties(jsonObj);
    }

}

export const WonderPush = new WonderPushAndroid();
