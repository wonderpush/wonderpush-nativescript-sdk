import androidosIBinder = android.os.IBinder;
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushService {
				public onStartCommand(param0: androidcontentIntent, param1: number, param2: number): number;
				public onBind(param0: androidcontentIntent): androidosIBinder;
				public static isProperlySetup(): boolean;
				public constructor();
			}
		}
	}
}
