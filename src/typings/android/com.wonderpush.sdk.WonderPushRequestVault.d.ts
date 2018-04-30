declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushRequestVault {
				public static getDefaultVault(): com.wonderpush.sdk.WonderPushRequestVault;
				public static initialize(): void;
				public put(param0: com.wonderpush.sdk.WonderPushRestClient.Request, param1: number): void;
			}
		}
	}
}
