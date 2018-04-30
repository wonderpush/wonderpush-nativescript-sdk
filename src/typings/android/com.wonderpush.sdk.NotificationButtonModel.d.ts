/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationButtonModel {
				public icon: number;
				public label: string;
				public targetUrl: string;
				public actions: javautilList<com.wonderpush.sdk.ActionModel>;
				public clone(): javalangObject;
				public constructor(param0: com.wonderpush.sdk.AlertModel, param1: orgjsonJSONObject);
				public constructor();
			}
		}
	}
}
