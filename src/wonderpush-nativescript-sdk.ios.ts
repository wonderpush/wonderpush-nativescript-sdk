import {WonderPushAbstract, WonderPushCustomProperties} from './wonderpush-nativescript-sdk.common';

export class WonderPushIos extends WonderPushAbstract {

    constructor() {
        super();
        this._ios = this;
    }

    protected init() {
    }

    setLogging(enabled: boolean) {
        console.error('NOT IMPLEMENTED');
    }

    trackEvent(type: string, custom?: WonderPushCustomProperties) {
        console.error('NOT IMPLEMENTED');
    }

    getInstallationCustomProperties(): WonderPushCustomProperties {
        console.error('NOT IMPLEMENTED');
        return undefined;
    }

    putInstallationCustomProperties(custom?: WonderPushCustomProperties) {
        console.error('NOT IMPLEMENTED');
    }

}

export const WonderPush = new WonderPushIos();
