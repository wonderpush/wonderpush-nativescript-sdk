import androidlocationLocation = android.location.Location;
import javalangRunnable = java.lang.Runnable;
import androidappApplication = android.app.Application;
import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
/// <reference path="./com.wonderpush.sdk.RequestParams.d.ts" />
/// <reference path="./com.wonderpush.sdk.ResponseHandler.d.ts" />
/// <reference path="./com.wonderpush.sdk.WonderPushDelegate.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPush {
				public static SHOW_DEBUG: boolean;
				public static sApplication: androidappApplication;
				public static sScheduledExecutor: javautilconcurrentScheduledExecutorService;
				public static API_INT: number;
				public static API_VERSION: string;
				public static SDK_SHORT_VERSION: string;
				public static SDK_VERSION: string;
				public static INTENT_INTIALIZED: string;
				public static INTENT_PUSH_TOKEN_CHANGED: string;
				public static INTENT_PUSH_TOKEN_CHANGED_EXTRA_OLD_KNOWN_PUSH_TOKEN: string;
				public static INTENT_PUSH_TOKEN_CHANGED_EXTRA_PUSH_TOKEN: string;
				public static INTENT_NOTIFICATION_OPENED: string;
				public static INTENT_NOTIFICATION_OPENED_EXTRA_RECEIVED_PUSH_NOTIFICATION: string;
				public static INTENT_NOTIFICATION_OPENED_EXTRA_FROM_USER_INTERACTION: string;
				public static INTENT_NOTIFICATION_OPENED_EXTRA_BUTTON_INDEX: string;
				public static INTENT_NOTIFICATION_WILL_OPEN: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_SCHEME: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_AUTHORITY: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_PATH_DEFAULT: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_PATH_BROADCAST: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_PATH_NOOP: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_EXTRA_RECEIVED_PUSH_NOTIFICATION: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_EXTRA_FROM_USER_INTERACTION: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_EXTRA_AUTOMATIC_OPEN: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_EXTRA_NOTIFICATION_TYPE: string;
				public static INTENT_NOTIFICATION_WILL_OPEN_EXTRA_NOTIFICATION_TYPE_DATA: string;
				public static INTENT_RESOURCE_PRELOADED: string;
				public static INTENT_RESOURCE_PRELOADED_EXTRA_PATH: string;
				public static INTENT_NOTIFICATION_SCHEME: string;
				public static INTENT_NOTIFICATION_AUTHORITY: string;
				public static INTENT_NOTIFICATION_TYPE: string;
				public static INTENT_NOTIFICATION_QUERY_PARAMETER: string;
				public static INTENT_NOTIFICATION_QUERY_PARAMETER_BUTTON_INDEX: string;
				public static INTENT_NOTIFICATION_QUERY_PARAMETER_LOCAL_NOTIFICATION_ID: string;
				public static INTENT_NOTIFICATION_BUTTON_ACTION_METHOD_ACTION: string;
				public static INTENT_NOTIFICATION_BUTTON_ACTION_METHOD_SCHEME: string;
				public static INTENT_NOTIFICATION_BUTTON_ACTION_METHOD_AUTHORITY: string;
				public static INTENT_NOTIFICATION_BUTTON_ACTION_METHOD_EXTRA_METHOD: string;
				public static INTENT_NOTIFICATION_BUTTON_ACTION_METHOD_EXTRA_ARG: string;
				public static DEFAULT_LANGUAGE_CODE: string;
				public static VALID_LANGUAGE_CODES: native.Array<string>;
				public static getPushToken(): string;
				public static post(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static postEventually(param0: string, param1: com.wonderpush.sdk.RequestParams): void;
				public static getAccessToken(): string;
				public static getNotificationEnabled(): boolean;
				public static initialize(param0: androidcontentContext, param1: string, param2: string): void;
				public static safeDefer(param0: javalangRunnable, param1: number): boolean;
				public static trackEvent(param0: string, param1: orgjsonJSONObject): void;
				public static logDebug(param0: string): void;
				public static getDeviceId(): string;
				public static logError(param0: string, param1: javalangThrowable): void;
				public static onInteraction(param0: boolean): void;
				public constructor();
				public static getClientSecret(): string;
				public static trackInternalEvent(param0: string, param1: orgjsonJSONObject): void;
				public static setNotificationEnabled(param0: boolean): void;
				public static showPotentialNotification(param0: androidappActivity, param1: androidcontentIntent): boolean;
				public static getNonSecureBaseURL(): string;
				public static delete(param0: string, param1: com.wonderpush.sdk.ResponseHandler): void;
				public static trackInternalEvent(param0: string, param1: orgjsonJSONObject, param2: orgjsonJSONObject): void;
				public static get(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static getLang(): string;
				public static getDelegate(): com.wonderpush.sdk.WonderPushDelegate;
				public static setLogging(param0: boolean): void;
				public static getLocation(): androidlocationLocation;
				public static trackEvent(param0: string): void;
				public static getInstallationId(): string;
				public static put(param0: string, param1: com.wonderpush.sdk.RequestParams, param2: com.wonderpush.sdk.ResponseHandler): void;
				public static logDebug(param0: string, param1: javalangThrowable): void;
				public static initializeForActivity(param0: androidcontentContext): void;
				public static getUserId(): string;
				public static getInstallationCustomProperties(): orgjsonJSONObject;
				public static setNetworkAvailable(param0: boolean): void;
				public static isNetworkAvailable(): boolean;
				public static trackEvent(param0: string, param1: orgjsonJSONObject, param2: orgjsonJSONObject): void;
				public static getClientId(): string;
				public static getFederatedIdAlreadyInBackground(): javautilconcurrentatomicAtomicReference<javalangString>;
				public static onBroadcastReceived(param0: androidcontentContext, param1: androidcontentIntent, param2: number, param3: javalangClass<androidappActivity>): boolean;
				public static setDelegate(param0: com.wonderpush.sdk.WonderPushDelegate): void;
				public static logError(param0: string): void;
				public static putInstallationCustomProperties(param0: orgjsonJSONObject): void;
				public static ensureInitialized(param0: androidcontentContext): boolean;
				public static getBaseURL(): string;
				public static initialize(param0: androidcontentContext): void;
				public static setUserId(param0: string): void;
				public static isReady(): boolean;
				public static initializeForApplication(param0: androidcontentContext): void;
				public static getApplicationContext(): androidcontentContext;
			}
		}
	}
}
