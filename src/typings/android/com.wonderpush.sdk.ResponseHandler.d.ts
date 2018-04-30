import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.wonderpush.sdk.Response.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export abstract class ResponseHandler {
				public onSuccess(param0: com.wonderpush.sdk.Response): void;
				public onSuccess(param0: number, param1: com.wonderpush.sdk.Response): void;
				public onFailure(param0: javalangThrowable, param1: com.wonderpush.sdk.Response): void;
			}
		}
	}
}
