declare module com {
	export module wonderpush {
		export module sdk {
			export class JSONUtil {
				public static merge(param0: orgjsonJSONObject, param1: orgjsonJSONObject): void;
				public static merge(param0: orgjsonJSONObject, param1: orgjsonJSONObject, param2: boolean): void;
				public static diff(param0: orgjsonJSONObject, param1: orgjsonJSONObject): orgjsonJSONObject;
				public static equals(param0: javalangObject, param1: javalangObject): boolean;
				public static equals(param0: orgjsonJSONObject, param1: orgjsonJSONObject): boolean;
				public static deepCopy(param0: orgjsonJSONObject): orgjsonJSONObject;
				public static equals(param0: orgjsonJSONArray, param1: orgjsonJSONArray): boolean;
				public static getString(param0: orgjsonJSONObject, param1: string): string;
				public static stripNulls(param0: orgjsonJSONObject): void;
			}
		}
	}
}
