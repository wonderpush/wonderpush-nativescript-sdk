import androidosParcel = android.os.Parcel;
import javautilconcurrentatomicAtomicReference = java.util.concurrent.atomic.AtomicReference;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./com.wonderpush.sdk.ActionModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.ButtonModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.NotificationModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export abstract class NotificationModel {
				public static CREATOR: androidosParcelableCreator<com.wonderpush.sdk.NotificationModel>;
				public receiveActions: javautilList<com.wonderpush.sdk.ActionModel>;
				public actions: javautilList<com.wonderpush.sdk.ActionModel>;
				public setCampaignId(param0: string): void;
				public getReceiveActions(): javautilList<com.wonderpush.sdk.ActionModel>;
				public writeToParcel(param0: androidosParcel, param1: number): void;
				public setReceiveActions(param0: javautilList<com.wonderpush.sdk.ActionModel>): void;
				public addReceiveAction(param0: com.wonderpush.sdk.ActionModel): void;
				public getButtonCount(): number;
				public setActions(param0: javautilList<com.wonderpush.sdk.ActionModel>): void;
				public constructor(param0: string);
				public setTitle(param0: string): void;
				public getReceipt(): boolean;
				public setTargetUrl(param0: string): void;
				public addButton(param0: com.wonderpush.sdk.ButtonModel): void;
				public getTargetedInstallation(): string;
				public setAlert(param0: com.wonderpush.sdk.AlertModel): void;
				public setNotificationId(param0: string): void;
				public addAction(param0: com.wonderpush.sdk.ActionModel): void;
				public getCampaignId(): string;
				public getTargetUrl(): string;
				public readFromJSONObject(param0: orgjsonJSONObject): void;
				public setTargetedInstallation(param0: string): void;
				public setType(param0: com.wonderpush.sdk.NotificationModel.Type): void;
				public static fromLocalIntent(param0: androidcontentIntent): com.wonderpush.sdk.NotificationModel;
				public getNotificationId(): string;
				public getChosenButton(): javautilconcurrentatomicAtomicReference<com.wonderpush.sdk.ButtonModel>;
				public getTitle(): string;
				public describeContents(): number;
				public static fromGCMBroadcastIntent(param0: androidcontentIntent): com.wonderpush.sdk.NotificationModel;
				public getButton(param0: number): com.wonderpush.sdk.ButtonModel;
				public getAlert(): com.wonderpush.sdk.AlertModel;
				public getInputJSONString(): string;
				public static fromGCMNotificationJSONObject(param0: orgjsonJSONObject, param1: androidosBundle): com.wonderpush.sdk.NotificationModel;
				public getType(): com.wonderpush.sdk.NotificationModel.Type;
				public getActions(): javautilList<com.wonderpush.sdk.ActionModel>;
				public setReceipt(param0: boolean): void;
			}
			export module NotificationModel {
				export class Builder {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.NotificationModel$Builder interface with the provided implementation.
					 */
					public constructor(implementation: {
						build(param0: string): com.wonderpush.sdk.NotificationModel;
					});
					public build(param0: string): com.wonderpush.sdk.NotificationModel;
				}
				export class NotTargetedForThisInstallationException {
					public constructor(param0: string);
				}
				export class Type {
					public static SIMPLE: com.wonderpush.sdk.NotificationModel.Type;
					public static DATA: com.wonderpush.sdk.NotificationModel.Type;
					public static TEXT: com.wonderpush.sdk.NotificationModel.Type;
					public static HTML: com.wonderpush.sdk.NotificationModel.Type;
					public static MAP: com.wonderpush.sdk.NotificationModel.Type;
					public static URL: com.wonderpush.sdk.NotificationModel.Type;
					public toString(): string;
					public static fromString(param0: string): com.wonderpush.sdk.NotificationModel.Type;
					public static valueOf(param0: string): com.wonderpush.sdk.NotificationModel.Type;
					public getBuilder(): com.wonderpush.sdk.NotificationModel.Builder;
					public static values(): native.Array<com.wonderpush.sdk.NotificationModel.Type>;
				}
			}
		}
	}
}
