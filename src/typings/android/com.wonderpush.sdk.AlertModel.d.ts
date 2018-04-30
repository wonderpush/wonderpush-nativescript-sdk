import javalangInteger = java.lang.Integer;
import androidnetUri = android.net.Uri;
import javaioInputStream = java.io.InputStream;
import javautilCollection = java.util.Collection;
import javalangLong = java.lang.Long;
/// <reference path="./com.wonderpush.sdk.AlertModel.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class AlertModel {
				public setHasTag(param0: boolean): void;
				public setChannel(param0: string): void;
				public getLightsColor(): number;
				public fromJSONToplevel(param0: orgjsonJSONObject): void;
				public setSoundUri(param0: androidnetUri): void;
				public hasOngoing(): boolean;
				public setTitle(param0: string): void;
				public setWhen(param0: javalangLong): void;
				public getLights(): boolean;
				public getCategory(): string;
				public getLocalOnly(): boolean;
				public getResourcesToFetch(): javautilCollection<com.wonderpush.sdk.CacheUtil.FetchWork>;
				public isProgressIndeterminate(): boolean;
				public setLights(param0: javalangBoolean): void;
				public setLightsOff(param0: javalangInteger): void;
				public getInputJson(): orgjsonJSONObject;
				public static fromOldFormatStringExtra(param0: string): com.wonderpush.sdk.AlertModel;
				public setNumber(param0: javalangInteger): void;
				public setSmallIcon(param0: javalangInteger): void;
				public clone(): javalangObject;
				public getPersons(): javautilList<javalangString>;
				public getShowWhen(): boolean;
				public forCurrentSettings(param0: boolean): com.wonderpush.sdk.AlertModel;
				public getAlternativeIfNeeded(): com.wonderpush.sdk.AlertModel;
				public setLightsColor(param0: string): void;
				public fromJSONForeground(param0: orgjsonJSONObject): void;
				public fromJSONCommon(param0: orgjsonJSONObject): void;
				public getSortKey(): string;
				public setAutoOpen(param0: javalangBoolean): void;
				public forCurrentSettingsInternal(param0: com.wonderpush.sdk.AlertModel): void;
				public setPriority(param0: number): void;
				public setButtons(param0: orgjsonJSONArray): void;
				public getProgress(): number;
				public hasColor(): boolean;
				public hasUsesChronometer(): boolean;
				public hasLights(): boolean;
				public setLightsOn(param0: javalangInteger): void;
				public setAutoDrop(param0: javalangBoolean): void;
				public hasPriority(): boolean;
				public setHtml(param0: boolean): void;
				public getColor(): number;
				public setGroup(param0: string): void;
				public getTicker(): string;
				public hasAutoOpen(): boolean;
				public setSortKey(param0: string): void;
				public hasNumber(): boolean;
				public constructor(param0: orgjsonJSONObject, param1: boolean);
				public hasAutoDrop(): boolean;
				public static fromJSON(param0: orgjsonJSONObject): com.wonderpush.sdk.AlertModel;
				public setPersons(param0: orgjsonJSONArray): void;
				public getVibrate(): boolean;
				public setSubText(param0: string): void;
				public setInfo(param0: string): void;
				public setPersons(param0: javautilList<javalangString>): void;
				public getType(): com.wonderpush.sdk.AlertModel.Type;
				public hasShowWhen(): boolean;
				public resolveIconIdentifier(param0: string): number;
				public setOnlyAlertOnce(param0: javalangBoolean): void;
				public getButtons(): javautilList<com.wonderpush.sdk.NotificationButtonModel>;
				public getTitle(): string;
				public getText(): string;
				public hasProgress(): boolean;
				public hasOnlyAlertOnce(): boolean;
				public resolveLargeIconFromString(param0: string, param1: string): androidgraphicsBitmap;
				public resolveBigPictureFromString(param0: string, param1: string): androidgraphicsBitmap;
				public setSound(param0: javalangBoolean): void;
				public getLightsOff(): number;
				public getAutoOpen(): boolean;
				public getAutoDrop(): boolean;
				public hasSmallIcon(): boolean;
				public hasWhen(): boolean;
				public getLightsOn(): number;
				public constructor(param0: orgjsonJSONObject);
				public setType(param0: string): void;
				public getOnlyAlertOnce(): boolean;
				public hasLightsOn(): boolean;
				public setShowWhen(param0: javalangBoolean): void;
				public resourceIdOrNull(param0: number): javalangInteger;
				public setLargeIcon(param0: string): void;
				public setTicker(param0: string): void;
				public hasVibrate(): boolean;
				public getUsesChronometer(): boolean;
				public getWhen(): number;
				public getLargeIcon(): androidgraphicsBitmap;
				public getForeground(): com.wonderpush.sdk.AlertModel;
				public setType(param0: com.wonderpush.sdk.AlertModel.Type): void;
				public getTag(): string;
				public setCategory(param0: string): void;
				public getPriority(): number;
				public setPriority(param0: string): void;
				public hasChannel(): boolean;
				public getNumber(): number;
				public isHtml(): boolean;
				public setVibratePattern(param0: native.Array<number>): void;
				public setLightsColor(param0: javalangInteger): void;
				public getSubText(): string;
				public setVisibility(param0: string): void;
				public getVisibility(): number;
				public resolveResourceIdentifier(param0: string, param1: string): number;
				public setOngoing(param0: javalangBoolean): void;
				public setProgress(param0: boolean): void;
				public setVisibility(param0: javalangInteger): void;
				public setText(param0: string): void;
				public hasSound(): boolean;
				public getChannel(): string;
				public setColor(param0: string): void;
				public hasLightsOff(): boolean;
				public setProgress(param0: javalangInteger): void;
				public setButtons(param0: javautilList<com.wonderpush.sdk.NotificationButtonModel>): void;
				public setForeground(param0: com.wonderpush.sdk.AlertModel): void;
				public hasType(): boolean;
				public getOngoing(): boolean;
				public setUsesChronometer(param0: javalangBoolean): void;
				public hasLightsColor(): boolean;
				public setSoundUri(param0: string): void;
				public setSmallIcon(param0: string): void;
				public getGroup(): string;
				public getSound(): boolean;
				public setTag(param0: string): void;
				public setLargeIcon(param0: androidgraphicsBitmap): void;
				public getInfo(): string;
				public setLocalOnly(param0: javalangBoolean): void;
				public handleHtml(param0: string): string;
				public hasTag(): boolean;
				public setVibrate(param0: javalangBoolean): void;
				public getVibratePattern(): native.Array<number>;
				public getProgressMax(): number;
				public setColor(param0: number): void;
				public getSoundUri(): androidnetUri;
				public getSmallIcon(): number;
				public hasLocalOnly(): boolean;
				public hasVisibility(): boolean;
				public decodeDataUri(param0: androidnetUri, param1: string): javaioInputStream;
			}
			export module AlertModel {
				export class Builder {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.AlertModel$Builder interface with the provided implementation.
					 */
					public constructor(implementation: {
						build(param0: orgjsonJSONObject): com.wonderpush.sdk.AlertModel;
					});
					public build(param0: orgjsonJSONObject): com.wonderpush.sdk.AlertModel;
				}
				export class Type {
					public static NULL: com.wonderpush.sdk.AlertModel.Type;
					public static NONE: com.wonderpush.sdk.AlertModel.Type;
					public static BIG_TEXT: com.wonderpush.sdk.AlertModel.Type;
					public static BIG_PICTURE: com.wonderpush.sdk.AlertModel.Type;
					public static INBOX: com.wonderpush.sdk.AlertModel.Type;
					public toString(): string;
					public static fromString(param0: string): com.wonderpush.sdk.AlertModel.Type;
					public static valueOf(param0: string): com.wonderpush.sdk.AlertModel.Type;
					public static values(): native.Array<com.wonderpush.sdk.AlertModel.Type>;
					public getBuilder(): com.wonderpush.sdk.AlertModel.Builder;
				}
			}
		}
	}
}
