import javaioFile = java.io.File;
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class CacheUtil {
				public static MAX_SOUND_FILE_SIZE: number;
				public static MAX_LARGEICON_FILE_SIZE: number;
				public static MAX_BIGPICTURE_FILE_SIZE: number;
				public static MAX_SOUND_CACHE_SIZE: number;
				public static MAX_LARGEICON_CACHE_SIZE: number;
				public static MAX_BIGPICTURE_CACHE_SIZE: number;
				public static fetchSound(param0: androidnetUri, param1: string): com.wonderpush.sdk.CacheUtil.FetchResult;
				public static fetchLargeIcon(param0: androidnetUri, param1: string): com.wonderpush.sdk.CacheUtil.FetchResult;
				public static fetchBigPicture(param0: androidnetUri, param1: string): com.wonderpush.sdk.CacheUtil.FetchResult;
			}
			export module CacheUtil {
				export class FetchResult {
					public static immediate(param0: javaioFile): com.wonderpush.sdk.CacheUtil.FetchResult;
					public getResult(): javaioFile;
					public getWork(): com.wonderpush.sdk.CacheUtil.FetchWork;
					public static workTask(param0: com.wonderpush.sdk.CacheUtil.FetchWork): com.wonderpush.sdk.CacheUtil.FetchResult;
					public needsWork(): boolean;
				}
				export class FetchWork {
					public constructor(param0: androidnetUri, param1: number, param2: string, param3: number, param4: string);
					public execute(): javaioFile;
				}
				export module FetchWork {
					export class AsyncTask {
						public doInBackground(param0: native.Array<com.wonderpush.sdk.CacheUtil.FetchWork>): native.Array<javaioFile>;
					}
				}
			}
		}
	}
}
