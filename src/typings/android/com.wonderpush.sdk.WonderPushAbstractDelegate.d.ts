/// <reference path="./com.wonderpush.sdk.DeepLinkEvent.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export abstract class WonderPushAbstractDelegate {
				public urlForDeepLink(param0: com.wonderpush.sdk.DeepLinkEvent): string;
				public constructor();
			}
		}
	}
}
