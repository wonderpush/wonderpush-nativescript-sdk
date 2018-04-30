declare module com {
	export module wonderpush {
		export module sdk {
			export class JSONSync {
				public getSdkState(): orgjsonJSONObject;
				public put(param0: orgjsonJSONObject): void;
				public receiveDiff(param0: orgjsonJSONObject): void;
				public receiveServerState(param0: orgjsonJSONObject): void;
				public receiveState(param0: orgjsonJSONObject, param1: boolean): void;
				public toString(): string;
			}
			export module JSONSync {
				export class Callbacks {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.JSONSync$Callbacks interface with the provided implementation.
					 */
					public constructor(implementation: {
						save(param0: orgjsonJSONObject): void;
						schedulePatchCall(): void;
						serverPatchInstallation(param0: orgjsonJSONObject, param1: com.wonderpush.sdk.JSONSync.ResponseHandler): void;
					});
					public save(param0: orgjsonJSONObject): void;
					public schedulePatchCall(): void;
					public serverPatchInstallation(param0: orgjsonJSONObject, param1: com.wonderpush.sdk.JSONSync.ResponseHandler): void;
				}
				export class ResponseHandler {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.JSONSync$ResponseHandler interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(): void;
						onFailure(): void;
					});
					public onFailure(): void;
					public onSuccess(): void;
				}
			}
		}
	}
}
