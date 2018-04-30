declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationHtmlModel extends com.wonderpush.sdk.NotificationModel {
				public readFromJSONObject(param0: orgjsonJSONObject): void;
				public getBaseUrl(): string;
				public setMessage(param0: string): void;
				public getMessage(): string;
				public constructor(param0: string);
				public setBaseUrl(param0: string): void;
			}
		}
	}
}
