declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationUrlModel extends com.wonderpush.sdk.NotificationModel {
				public readFromJSONObject(param0: orgjsonJSONObject): void;
				public getUrl(): string;
				public constructor(param0: string);
				public setUrl(param0: string): void;
			}
		}
	}
}
