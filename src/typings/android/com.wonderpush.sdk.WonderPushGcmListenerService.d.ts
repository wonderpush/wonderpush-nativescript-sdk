declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushGcmListenerService {
				public onMessageReceived(param0: string, param1: androidosBundle): void;
				public static onMessageReceived(param0: androidcontentContext, param1: string, param2: androidosBundle, param3: number, param4: javalangClass<androidappActivity>): boolean;
				public static onMessageReceived(param0: androidcontentContext, param1: string, param2: androidosBundle): boolean;
				public constructor();
			}
		}
	}
}
