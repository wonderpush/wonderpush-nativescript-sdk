type czmseberaandroidhttpclientmessageBasicHeader = any;
/// <reference path="./com.wonderpush.sdk.RequestParams.d.ts" />
/// <reference path="./com.wonderpush.sdk.ResponseHandler.d.ts" />
/// <reference path="./cz.msebera.android.httpclient.message.BasicHeader.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushRestClient {
				public static ERROR_INVALID_CREDENTIALS: number;
				public static ERROR_INVALID_ACCESS_TOKEN: number;
				public static fetchAnonymousAccessTokenIfNeeded(param0: string, param1: com.wonderpush.sdk.ResponseHandler): boolean;
				public static fetchAnonymousAccessToken(param0: string, param1: com.wonderpush.sdk.ResponseHandler, param2: number): void;
				public static post(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static postEventually(param0: string, param1: com.wonderpush.sdk.RequestParams): void;
				public static delete(param0: string, param1: com.wonderpush.sdk.ResponseHandler): void;
				public static fetchAnonymousAccessTokenIfNeeded(param0: string): void;
				public static requestForUser(param0: string, param1: com.wonderpush.sdk.WonderPushRestClient.HttpMethod, param2: string, param3: com.wonderpush.sdk.RequestParams, param4: com.wonderpush.sdk.ResponseHandler): void;
				public static get(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static fetchAnonymousAccessTokenAndRunRequest(param0: com.wonderpush.sdk.WonderPushRestClient.Request): void;
				public static put(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static requestAuthenticated(param0: com.wonderpush.sdk.WonderPushRestClient.Request): void;
				public static fetchAnonymousAccessToken(param0: string, param1: com.wonderpush.sdk.ResponseHandler): void;
			}
			export module WonderPushRestClient {
				export class HttpMethod {
					public static GET: com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public static PUT: com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public static POST: com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public static DELETE: com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public static PATCH: com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public static values(): native.Array<com.wonderpush.sdk.WonderPushRestClient.HttpMethod>;
					public static valueOf(param0: string): com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
				}
				export class Request {
					public getResource(): string;
					public clone(): javalangObject;
					public getHandler(): com.wonderpush.sdk.ResponseHandler;
					public constructor(param0: string, param1: com.wonderpush.sdk.WonderPushRestClient.HttpMethod, param2: string, param3: com.wonderpush.sdk.RequestParams, param4: com.wonderpush.sdk.ResponseHandler);
					public toString(): string;
					public constructor(param0: orgjsonJSONObject);
					public getParams(): com.wonderpush.sdk.RequestParams;
					public setHandler(param0: com.wonderpush.sdk.ResponseHandler): void;
					public toJSON(): orgjsonJSONObject;
					public setMethod(param0: com.wonderpush.sdk.WonderPushRestClient.HttpMethod): void;
					public getMethod(): com.wonderpush.sdk.WonderPushRestClient.HttpMethod;
					public getAuthorizationHeader(): czmseberaandroidhttpclientmessageBasicHeader;
					public getUserId(): string;
					public setResource(param0: string): void;
					public setParams(param0: com.wonderpush.sdk.RequestParams): void;
				}
			}
		}
	}
}
