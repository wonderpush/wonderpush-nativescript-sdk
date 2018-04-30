declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushGcmClient {
				public static onBroadcastReceived(param0: androidcontentContext, param1: androidcontentIntent, param2: number, param3: javalangClass<androidappActivity>): boolean;
				public static registerForPushNotification(param0: androidcontentContext): void;
			}
		}
	}
}
