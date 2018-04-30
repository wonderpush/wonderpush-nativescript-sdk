declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushConfiguration {
				public static isInitialized(): boolean;
				public static getApplicationContext(): androidcontentContext;
			}
		}
	}
}
