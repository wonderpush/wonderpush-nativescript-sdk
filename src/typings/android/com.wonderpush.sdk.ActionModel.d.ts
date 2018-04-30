import orgjsonJSONObject = org.json.JSONObject;
import javalangObject = java.lang.Object;
import javalangBoolean = java.lang.Boolean;
declare module com {
	export module wonderpush {
		export module sdk {
			export class ActionModel {
				public setForce(param0: javalangBoolean): void;
				public setReset(param0: javalangBoolean): void;
				public setMethod(param0: string): void;
				public constructor(param0: orgjsonJSONObject);
				public constructor();
				public setInstallation(param0: orgjsonJSONObject): void;
				public getCustom(): orgjsonJSONObject;
				public getForce(param0: boolean): boolean;
				public getMethodArg(): string;
				public setAppliedServerSide(param0: javalangBoolean): void;
				public getType(): com.wonderpush.sdk.ActionModel.Type;
				public clone(): javalangObject;
				public getReset(): javalangBoolean;
				public getAppliedServerSide(): javalangBoolean;
				public setEvent(param0: orgjsonJSONObject): void;
				public getForce(): javalangBoolean;
				public getInstallation(): orgjsonJSONObject;
				public getAppliedServerSide(param0: boolean): boolean;
				public getUrl(): string;
				public getEvent(): orgjsonJSONObject;
				public setCustom(param0: orgjsonJSONObject): void;
				public getMethod(): string;
				public setMethodArg(param0: string): void;
				public setType(param0: com.wonderpush.sdk.ActionModel.Type): void;
				public setUrl(param0: string): void;
				public getReset(param0: boolean): boolean;
			}
			export module ActionModel {
				export class Type {
					public static CLOSE: com.wonderpush.sdk.ActionModel.Type;
					public static TRACK_EVENT: com.wonderpush.sdk.ActionModel.Type;
					public static UPDATE_INSTALLATION: com.wonderpush.sdk.ActionModel.Type;
					public static RESYNC_INSTALLATION: com.wonderpush.sdk.ActionModel.Type;
					public static METHOD: com.wonderpush.sdk.ActionModel.Type;
					public static LINK: com.wonderpush.sdk.ActionModel.Type;
					public static RATING: com.wonderpush.sdk.ActionModel.Type;
					public static MAP_OPEN: com.wonderpush.sdk.ActionModel.Type;
					public static _DUMP_STATE: com.wonderpush.sdk.ActionModel.Type;
					public static _OVERRIDE_SET_LOGGING: com.wonderpush.sdk.ActionModel.Type;
					public static _OVERRIDE_NOTIFICATION_RECEIPT: com.wonderpush.sdk.ActionModel.Type;
					public static valueOf(param0: string): com.wonderpush.sdk.ActionModel.Type;
					public toString(): string;
					public static fromString(param0: string): com.wonderpush.sdk.ActionModel.Type;
					public static values(): native.Array<com.wonderpush.sdk.ActionModel.Type>;
				}
			}
		}
	}
}
