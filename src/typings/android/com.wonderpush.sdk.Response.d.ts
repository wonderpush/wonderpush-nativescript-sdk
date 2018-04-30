declare module com {
	export module wonderpush {
		export module sdk {
			export class Response {
				public getErrorMessage(): string;
				public isError(): boolean;
				public getJSONObject(): orgjsonJSONObject;
				public getErrorStatus(): number;
				public constructor(param0: orgjsonJSONObject);
				public getErrorCode(): number;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}
