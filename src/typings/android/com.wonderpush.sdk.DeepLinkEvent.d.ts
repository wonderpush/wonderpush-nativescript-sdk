declare module com {
	export module wonderpush {
		export module sdk {
			export class DeepLinkEvent {
				public getContext(): androidcontentContext;
				public getUrl(): string;
				public toString(): string;
			}
		}
	}
}
