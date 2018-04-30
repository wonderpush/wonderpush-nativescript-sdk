declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationTextModel extends com.wonderpush.sdk.NotificationModel {
				public readFromJSONObject(param0: orgjsonJSONObject): void;
				public setMessage(param0: string): void;
				public getMessage(): string;
				public constructor(param0: string);
			}
		}
	}
}
