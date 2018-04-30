/// <reference path="./com.wonderpush.sdk.NotificationModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushNotificationResourceFetcherAndDisplayerJobIntentService {
				public static enqueueWork(param0: androidcontentContext, param1: com.wonderpush.sdk.WonderPushNotificationResourceFetcherAndDisplayerJobIntentService.Work): void;
				public onHandleWork(param0: androidcontentIntent): void;
				public onStopCurrentWork(): boolean;
				public constructor();
			}
			export module WonderPushNotificationResourceFetcherAndDisplayerJobIntentService {
				export class Work {
					public static CREATOR: androidosParcelableCreator<Work>;
					public getLocalNotificationId(): number;
					public getPushIntent(): androidcontentIntent;
					public getNotif(): com.wonderpush.sdk.NotificationModel;
					public constructor(param0: androidosParcel);
					public describeContents(): number;
					public getIconResource(): number;
					public getPendingIntentBuilder(param0: androidcontentContext): com.wonderpush.sdk.NotificationManager.PendingIntentBuilder;
					public writeToParcel(param0: androidosParcel, param1: number): void;
					public getTag(): string;
					public getActivity(): javalangClass<androidappActivity>;
				}
			}
		}
	}
}
