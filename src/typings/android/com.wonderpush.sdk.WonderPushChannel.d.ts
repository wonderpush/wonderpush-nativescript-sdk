declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushChannel {
				public getVibrateInSilentMode(): javalangBoolean;
				public setLocalOnly(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getId(): string;
				public setSoundUri(param0: androidnetUri): com.wonderpush.sdk.WonderPushChannel;
				public setVibrationPattern(param0: native.Array<number>): com.wonderpush.sdk.WonderPushChannel;
				public getDescription(): string;
				public getShowBadge(): javalangBoolean;
				public setLockscreenVisibility(param0: javalangInteger): com.wonderpush.sdk.WonderPushChannel;
				public getVibrate(): javalangBoolean;
				public setVibrateInSilentMode(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public setImportance(param0: javalangInteger): com.wonderpush.sdk.WonderPushChannel;
				public setName(param0: string): com.wonderpush.sdk.WonderPushChannel;
				public getImportance(): javalangInteger;
				public setVibrate(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getGroupId(): string;
				public setShowBadge(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getLights(): javalangBoolean;
				public hashCode(): number;
				public getLocalOnly(): javalangBoolean;
				public constructor(param0: string, param1: string);
				public getVibrationPattern(): native.Array<number>;
				public getColor(): javalangInteger;
				public clone(): javalangObject;
				public getSound(): javalangBoolean;
				public setSound(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getName(): string;
				public getSoundUri(): androidnetUri;
				public toString(): string;
				public setLightColor(param0: javalangInteger): com.wonderpush.sdk.WonderPushChannel;
				public setLights(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getBypassDnd(): javalangBoolean;
				public equals(param0: javalangObject): boolean;
				public setBypassDnd(param0: javalangBoolean): com.wonderpush.sdk.WonderPushChannel;
				public getLockscreenVisibility(): javalangInteger;
				public setDescription(param0: string): com.wonderpush.sdk.WonderPushChannel;
				public getLightColor(): javalangInteger;
				public setColor(param0: javalangInteger): com.wonderpush.sdk.WonderPushChannel;
			}
		}
	}
}
