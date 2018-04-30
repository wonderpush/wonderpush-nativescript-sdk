import androidcontentresTypedArray = android.content.res.TypedArray;
/// <reference path="./com.wonderpush.sdk.ButtonModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.NotificationModel.d.ts" />
/// <reference path="./com.wonderpush.sdk.WonderPushDialogBuilder.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushDialogBuilder {
				public setDefaultTitle(param0: string): void;
				public setupButtons(): com.wonderpush.sdk.WonderPushDialogBuilder;
				public setMessage(param0: string): com.wonderpush.sdk.WonderPushDialogBuilder;
				public setDefaultIcon(param0: number): void;
				public setInteractionEventCustom(param0: orgjsonJSONObject): void;
				public dismiss(): void;
				public constructor(param0: androidcontentContext, param1: com.wonderpush.sdk.NotificationModel, param2: com.wonderpush.sdk.WonderPushDialogBuilder.OnChoice);
				public show(): void;
				public getContext(): androidcontentContext;
				public static getDialogStyledAttributes(param0: androidcontentContext, param1: native.Array<number>, param2: number, param3: number): androidcontentresTypedArray;
				public setupTitleAndIcon(): com.wonderpush.sdk.WonderPushDialogBuilder;
				public setView(param0: androidviewView): com.wonderpush.sdk.WonderPushDialogBuilder;
				public getInteractionEventCustom(): orgjsonJSONObject;
				public getNotificationModel(): com.wonderpush.sdk.NotificationModel;
				public getShownDuration(): number;
			}
			export module WonderPushDialogBuilder {
				export class OnChoice {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.WonderPushDialogBuilder$OnChoice interface with the provided implementation.
					 */
					public constructor(implementation: {
						onChoice(param0: com.wonderpush.sdk.WonderPushDialogBuilder, param1: com.wonderpush.sdk.ButtonModel): void;
					});
					public onChoice(param0: com.wonderpush.sdk.WonderPushDialogBuilder, param1: com.wonderpush.sdk.ButtonModel): void;
				}
			}
		}
	}
}
