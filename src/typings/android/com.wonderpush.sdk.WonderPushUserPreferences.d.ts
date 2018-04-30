/// <reference path="./com.wonderpush.sdk.WonderPushChannel.d.ts" />
/// <reference path="./com.wonderpush.sdk.WonderPushChannelGroup.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushUserPreferences {
				public static putChannel(param0: com.wonderpush.sdk.WonderPushChannel): void;
				public static setChannelGroups(param0: javautilCollection<com.wonderpush.sdk.WonderPushChannel>): void;
				public static getDefaultChannelId(): string;
				public static putChannelGroup(param0: com.wonderpush.sdk.WonderPushChannelGroup): void;
				public static setChannels(param0: javautilCollection<com.wonderpush.sdk.WonderPushChannel>): void;
				public static setDefaultChannelId(param0: string): void;
				public static removeChannel(param0: string): void;
				public static getChannelGroup(param0: string): com.wonderpush.sdk.WonderPushChannelGroup;
				public static removeChannelGroup(param0: string): void;
				public constructor();
				public static getChannel(param0: string): com.wonderpush.sdk.WonderPushChannel;
			}
		}
	}
}
