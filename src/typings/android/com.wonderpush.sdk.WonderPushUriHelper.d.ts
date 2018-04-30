/// <reference path="./com.wonderpush.sdk.RequestParams.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushUriHelper {
				public static getNonSecureAbsoluteUrl(param0: string): string;
				public static isAPIUri(param0: androidnetUri): boolean;
				public static getResource(param0: androidnetUri): string;
				public static getAbsoluteUrl(param0: string): string;
				public static getParams(param0: androidnetUri): com.wonderpush.sdk.RequestParams;
				public static getBaseUri(): androidnetUri;
			}
		}
	}
}
