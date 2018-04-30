import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class AlertBigPictureModel extends com.wonderpush.sdk.AlertModel {
				public getBigLargeIcon(): androidgraphicsBitmap;
				public getAlternativeIfNeeded(): com.wonderpush.sdk.AlertModel;
				public constructor(param0: orgjsonJSONObject);
				public fromJSONCommon(param0: orgjsonJSONObject): void;
				public getBigTitle(): string;
				public setBigLargeIcon(param0: androidgraphicsBitmap): void;
				public constructor(param0: orgjsonJSONObject, param1: boolean);
				public forCurrentSettingsInternal(param0: com.wonderpush.sdk.AlertModel): void;
				public setBigTitle(param0: string): void;
				public getSummaryText(): string;
				public setBigPicture(param0: androidgraphicsBitmap): void;
				public setBigPicture(param0: string): void;
				public getBigPicture(): androidgraphicsBitmap;
				public setSummaryText(param0: string): void;
				public setBigLargeIcon(param0: string): void;
			}
		}
	}
}
