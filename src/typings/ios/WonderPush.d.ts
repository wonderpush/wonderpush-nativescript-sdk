
declare class WonderPush extends NSObject {

	static accessToken(): string;

	static alloc(): WonderPush; // inherited from NSObject

	static applicationDidBecomeActive(application: UIApplication): void;

	static applicationDidEnterBackground(application: UIApplication): void;

	static applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	static applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	static applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	static applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	static deviceId(): string;

	static getInstallationCustomProperties(): NSDictionary<any, any>;

	static getNotificationEnabled(): boolean;

	static installationId(): string;

	static isDataNotification(userInfo: NSDictionary<any, any>): boolean;

	static isInitialized(): boolean;

	static isNotificationForWonderPush(userInfo: NSDictionary<any, any>): boolean;

	static isReady(): boolean;

	static new(): WonderPush; // inherited from NSObject

	static pushToken(): string;

	static putInstallationCustomProperties(customProperties: NSDictionary<any, any>): void;

	static setClientIdSecret(clientId: string, secret: string): void;

	static setDelegate(delegate: WonderPushDelegate): void;

	static setLogging(enable: boolean): void;

	static setNotificationEnabled(enabled: boolean): void;

	static setUserId(userId: string): void;

	static setUserNotificationCenterDelegateInstalled(enabled: boolean): void;

	static setupDelegateForApplication(application: UIApplication): void;

	static setupDelegateForUserNotificationCenter(): void;

	static trackEvent(type: string): void;

	static trackEventWithData(type: string, data: NSDictionary<any, any>): void;

	static userId(): string;

	static userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	static userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

interface WonderPushDelegate extends NSObjectProtocol {

	wonderPushWillOpenURL?(URL: NSURL): NSURL;
}
declare var WonderPushDelegate: {

	prototype: WonderPushDelegate;
};

declare var WonderPushVersionNumber: number;

declare var WonderPushVersionNumberVar: number;

declare var WonderPushVersionString: interop.Reference<number>;

declare var WonderPushVersionStringVar: interop.Reference<number>;
