/// <reference path="./com.wonderpush.sdk.RequestParams.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class QueryStringParser {
				public next(): boolean;
				public search(param0: javautilCollection<javalangString>): boolean;
				public getValue(): string;
				public getName(): string;
				public static getRequestParams(param0: string): com.wonderpush.sdk.RequestParams;
				public constructor(param0: string);
			}
		}
	}
}
