import {WonderPushAndroid} from "./wonderpush-nativescript-sdk.android";
import {WonderPushIos} from "./wonderpush-nativescript-sdk.ios";

export declare type WonderPushCustomProperties = {[key: string]: any};

export abstract class WonderPushAbstract {

    protected _android: WonderPushAndroid;
    protected _ios: WonderPushIos;

    constructor() {
        this.init();
    }

    public get android(): WonderPushAndroid {
        return this._android
    }

    public get ios(): WonderPushIos {
        return this._ios
    }

    protected abstract init();
    public abstract setLogging(enabled: boolean);
    public abstract trackEvent(type: string, custom?: WonderPushCustomProperties);
    public abstract getInstallationCustomProperties(): WonderPushCustomProperties;
    public abstract putInstallationCustomProperties(custom?: WonderPushCustomProperties);

}
