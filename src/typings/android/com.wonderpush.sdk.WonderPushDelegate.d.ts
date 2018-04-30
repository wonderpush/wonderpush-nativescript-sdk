/// <reference path="./com.wonderpush.sdk.DeepLinkEvent.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushDelegate {
				/**
				 * Constructs a new instance of the com.wonderpush.sdk.WonderPushDelegate interface with the provided implementation.
				 */
				public constructor(implementation: {
					urlForDeepLink(param0: com.wonderpush.sdk.DeepLinkEvent): string;
				});
				public urlForDeepLink(param0: com.wonderpush.sdk.DeepLinkEvent): string;
			}
		}
	}
}
