/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class AlertBigTextModel extends com.wonderpush.sdk.AlertModel {
				public getBigText(): string;
				public setBigTitle(param0: string): void;
				public setBigText(param0: string): void;
				public constructor(param0: orgjsonJSONObject);
				public getSummaryText(): string;
				public fromJSONCommon(param0: orgjsonJSONObject): void;
				public getBigTitle(): string;
				public setSummaryText(param0: string): void;
				public constructor(param0: orgjsonJSONObject, param1: boolean);
				public forCurrentSettingsInternal(param0: com.wonderpush.sdk.AlertModel): void;
			}
		}
	}
}
