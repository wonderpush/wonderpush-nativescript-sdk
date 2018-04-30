import androidcontentIntent = android.content.Intent;
import javalangClass = java.lang.Class;
import androidappNotification = android.app.Notification;
import androidappPendingIntent = android.app.PendingIntent;
/// <reference path="./com.wonderpush.sdk.ActionModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.NotificationModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationManager {
				public static ensureNotificationDismissed(param0: androidcontentContext, param1: androidcontentIntent, param2: com.wonderpush.sdk.NotificationModel): void;
				public static handleOpenedNotificationFromService(param0: androidcontentContext, param1: androidcontentIntent, param2: com.wonderpush.sdk.NotificationModel): void;
				public static cancel(param0: androidcontentContext, param1: string, param2: number): void;
				public static containsExplicitNotification(param0: androidcontentIntent): boolean;
				public static handleUpdateInstallationAction(param0: com.wonderpush.sdk.ActionModel): void;
				public static generateLocalNotificationId(param0: string): number;
				public static notify(param0: androidcontentContext, param1: string, param2: number, param3: androidappNotification): void;
				public static containsWillOpenNotificationAutomaticallyOpenable(param0: androidcontentIntent): boolean;
				public static containsWillOpenNotification(param0: androidcontentIntent): boolean;
				public static onReceivedNotification(param0: androidcontentContext, param1: androidcontentIntent, param2: number, param3: javalangClass<androidappActivity>, param4: com.wonderpush.sdk.NotificationModel): void;
				public static buildNotification(param0: com.wonderpush.sdk.NotificationModel, param1: androidcontentContext, param2: number, param3: com.wonderpush.sdk.NotificationManager.PendingIntentBuilder): androidappNotification;
				public static handleNotificationActions(param0: androidcontentContext, param1: com.wonderpush.sdk.NotificationModel, param2: javautilList<com.wonderpush.sdk.ActionModel>): void;
				public static fetchResourcesAndDisplay(param0: androidcontentContext, param1: com.wonderpush.sdk.WonderPushNotificationResourceFetcherAndDisplayerJobIntentService.Work, param2: number): void;
				public static handleRatingAction(param0: androidcontentContext, param1: com.wonderpush.sdk.ActionModel): void;
				public static handleResyncInstallationAction(param0: com.wonderpush.sdk.ActionModel): void;
				public static handleLinkAction(param0: androidcontentContext, param1: com.wonderpush.sdk.ActionModel): void;
				public static handleTrackEventAction(param0: com.wonderpush.sdk.NotificationModel, param1: com.wonderpush.sdk.ActionModel): void;
				public static showPotentialNotification(param0: androidcontentContext, param1: androidcontentIntent): boolean;
				public static generateLocalNotificationTag(param0: com.wonderpush.sdk.NotificationModel): string;
				public static handleAction(param0: androidcontentContext, param1: com.wonderpush.sdk.NotificationModel, param2: com.wonderpush.sdk.ActionModel): void;
				public static handleOpenedManuallyDisplayedDataNotification(param0: androidcontentContext, param1: androidcontentIntent, param2: com.wonderpush.sdk.NotificationModel): void;
				public static handleMethodAction(param0: com.wonderpush.sdk.ActionModel): void;
			}
			export module NotificationManager {
				export class PendingIntentBuilder {
					public buildForAutoOpen(): androidappPendingIntent;
					public buildForDefault(): androidappPendingIntent;
					public buildForButton(param0: number): androidappPendingIntent;
					public buildForWillOpenBroadcast(): androidappPendingIntent;
					public buildForDataNotificationWillOpenBroadcast(): androidappPendingIntent;
					public constructor(param0: com.wonderpush.sdk.NotificationModel, param1: number, param2: androidcontentIntent, param3: androidcontentContext, param4: javalangClass<androidappActivity>);
				}
			}
		}
	}
}
