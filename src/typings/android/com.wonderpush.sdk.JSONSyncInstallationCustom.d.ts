declare module com {
	export module wonderpush {
		export module sdk {
			export class JSONSyncInstallationCustom {
				public getSdkState(): orgjsonJSONObject;
				public put(param0: orgjsonJSONObject): void;
				public receiveDiff(param0: orgjsonJSONObject): void;
				public static flushAll(): void;
				public static initialize(): void;
				public receiveServerState(param0: orgjsonJSONObject): void;
				public receiveState(param0: orgjsonJSONObject, param1: boolean): void;
				public toString(): string;
			}
			export module JSONSyncInstallationCustom {
				export class Callbacks {
					public save(param0: orgjsonJSONObject): void;
					public schedulePatchCall(): void;
					public serverPatchInstallation(param0: orgjsonJSONObject, param1: com.wonderpush.sdk.JSONSync.ResponseHandler): void;
				}
			}
		}
	}
}
