declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushJobQueue {
				public post(param0: com.wonderpush.sdk.WonderPushJobQueue.Job): com.wonderpush.sdk.WonderPushJobQueue.Job;
				public nextJob(): com.wonderpush.sdk.WonderPushJobQueue.Job;
				public save(): void;
				public static getDefaultQueue(): com.wonderpush.sdk.WonderPushJobQueue;
				public postJobWithDescription(param0: orgjsonJSONObject, param1: number): com.wonderpush.sdk.WonderPushJobQueue.Job;
				public peekNextJobNotBeforeRealtimeElapsed(): number;
				public restore(): void;
			}
			export module WonderPushJobQueue {
				export class InternalJob {
					public mId: string;
					public mJobDescription: orgjsonJSONObject;
					public mNotBeforeRealtimeElapsed: number;
					public getId(): string;
					public constructor(param0: orgjsonJSONObject);
					public equals(param0: javalangObject): boolean;
					public toJSON(): orgjsonJSONObject;
					public getJobDescription(): orgjsonJSONObject;
					public constructor(param0: string, param1: orgjsonJSONObject, param2: number);
					public getNotBeforeRealtimeElapsed(): number;
					public hashCode(): number;
				}
				export class Job {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.WonderPushJobQueue$Job interface with the provided implementation.
					 */
					public constructor(implementation: {
						getId(): string;
						getJobDescription(): orgjsonJSONObject;
						getNotBeforeRealtimeElapsed(): number;
					});
					public getId(): string;
					public getJobDescription(): orgjsonJSONObject;
					public getNotBeforeRealtimeElapsed(): number;
				}
			}
		}
	}
}
