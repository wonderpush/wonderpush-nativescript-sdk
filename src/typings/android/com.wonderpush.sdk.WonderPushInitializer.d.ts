declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushInitializer {
				/**
				 * Constructs a new instance of the com.wonderpush.sdk.WonderPushInitializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					initialize(param0: androidcontentContext): void;
				});
				public initialize(param0: androidcontentContext): void;
			}
		}
	}
}
