import javalangString = java.lang.String;
import javautilMap = java.util.Map;
type czmseberaandroidhttpclientmessageBasicNameValuePair = any;
declare module com {
	export module wonderpush {
		export module sdk {
			export class RequestParams {
				public static TAG: string;
				public static CREATOR: androidosParcelableCreator<RequestParams>;
				public constructor(param0: javautilMap<javalangString, javalangString>);
				public writeToParcel(param0: androidosParcel, param1: number): void;
				public constructor(param0: androidosParcel);
				public getParamsList(): javautilList<czmseberaandroidhttpclientmessageBasicNameValuePair>;
				public describeContents(): number;
				public getURLEncodedString(): string;
				public toJSONObject(): orgjsonJSONObject;
				public constructor(param0: string, param1: string);
				public constructor();
				public constructor(param0: native.Array<javalangObject>);
			}
		}
	}
}
