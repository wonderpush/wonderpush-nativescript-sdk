import javalangCharSequence = java.lang.CharSequence;
import javautilList = java.util.List;
import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class AlertInboxModel extends com.wonderpush.sdk.AlertModel {
				public setLines(param0: orgjsonJSONArray): void;
				public clone(): javalangObject;
				public setBigTitle(param0: string): void;
				public constructor(param0: orgjsonJSONObject);
				public setLines(param0: javautilList<javalangCharSequence>): void;
				public getSummaryText(): string;
				public fromJSONCommon(param0: orgjsonJSONObject): void;
				public getBigTitle(): string;
				public getLines(): javautilList<javalangCharSequence>;
				public setSummaryText(param0: string): void;
				public constructor(param0: orgjsonJSONObject, param1: boolean);
				public forCurrentSettingsInternal(param0: com.wonderpush.sdk.AlertModel): void;
			}
		}
	}
}
