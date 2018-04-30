declare module com {
	export module wonderpush {
		export module sdk {
			export class NotificationMapModel extends com.wonderpush.sdk.NotificationModel {
				public readFromJSONObject(param0: orgjsonJSONObject): void;
				public setMap(param0: com.wonderpush.sdk.NotificationMapModel.Map): void;
				public getMap(): com.wonderpush.sdk.NotificationMapModel.Map;
				public setMessage(param0: string): void;
				public getMessage(): string;
				public constructor(param0: string);
			}
			export module NotificationMapModel {
				export class Map {
					public getPlace(): com.wonderpush.sdk.NotificationMapModel.Place;
					public constructor();
					public readFromJSONObject(param0: orgjsonJSONObject): void;
					public setPlace(param0: com.wonderpush.sdk.NotificationMapModel.Place): void;
					public static fromJSONObject(param0: orgjsonJSONObject): com.wonderpush.sdk.NotificationMapModel.Map;
				}
				export class Place {
					public static fromJSONObject(param0: orgjsonJSONObject): com.wonderpush.sdk.NotificationMapModel.Place;
					public constructor();
					public getName(): string;
					public getQuery(): string;
					public setQuery(param0: string): void;
					public readFromJSONObject(param0: orgjsonJSONObject): void;
					public setPoint(param0: com.wonderpush.sdk.NotificationMapModel.Point): void;
					public getZoom(): javalangInteger;
					public setZoom(param0: javalangInteger): void;
					public getPoint(): com.wonderpush.sdk.NotificationMapModel.Point;
					public setName(param0: string): void;
				}
				export class Point {
					public setLon(param0: number): void;
					public constructor();
					public getLat(): number;
					public static fromJSONObject(param0: orgjsonJSONObject): com.wonderpush.sdk.NotificationMapModel.Point;
					public readFromJSONObject(param0: orgjsonJSONObject): void;
					public setLat(param0: number): void;
					public getLon(): number;
				}
			}
		}
	}
}
