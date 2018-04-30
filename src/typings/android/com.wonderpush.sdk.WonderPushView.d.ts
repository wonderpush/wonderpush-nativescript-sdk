import androidutilAttributeSet = android.util.AttributeSet;
// import androidwebkitWebResourceRequest = android.webkit.WebResourceRequest;
// import androidwebkitWebResourceError = android.webkit.WebResourceError;
type androidwebkitWebResourceRequest = any;
type androidwebkitWebResourceError = any;
/// <reference path="./com.wonderpush.sdk.RequestParams.d.ts" />
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushView {
				public static WEBVIEW_REQUEST_TOTAL_TIMEOUT: number;
				public static ERROR_INVALID_SID: number;
				public isLoginSource: boolean;
				public close(): void;
				public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public getShowCloseButton(): boolean;
				public setStateListener(param0: com.wonderpush.sdk.WonderPushView.OnStateListener): void;
				public setFullUrl(param0: string): void;
				public goBack(): void;
				public setResource(param0: string): void;
				public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
				public canGoBack(): boolean;
				public onDetachedFromWindow(): void;
				public constructor(param0: androidcontentContext);
				public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
				public setShowCloseButton(param0: boolean): void;
				public setResource(param0: string, param1: com.wonderpush.sdk.RequestParams): void;
			}
			export module WonderPushView {
				export class ErrorState extends com.wonderpush.sdk.WonderPushView.UserInterfaceState {
					public onEnterState(): void;
					public onLeaveState(): void;
				}
				export class InitialState extends com.wonderpush.sdk.WonderPushView.UserInterfaceState {
					public onEnterState(): void;
					public onLeaveState(): void;
				}
				export class LoadingState extends com.wonderpush.sdk.WonderPushView.UserInterfaceState {
					public onEnterState(): void;
					public onLeaveState(): void;
				}
				export class OnStateListener {
					/**
					 * Constructs a new instance of the com.wonderpush.sdk.WonderPushView$OnStateListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onLoading(): void;
						onLoaded(): void;
						onError(): void;
						onClose(): void;
					});
					public onClose(): void;
					public onLoaded(): void;
					public onLoading(): void;
					public onError(): void;
				}
				export abstract class UserInterfaceState {
					public onEnterState(): void;
					public onLeaveState(): void;
				}
				export class WebContentState extends com.wonderpush.sdk.WonderPushView.UserInterfaceState {
					public onEnterState(): void;
				}
				export class WonderPushWebCallbackHandler {
					public handleWebCallback(param0: androidnetUri): boolean;
				}
				export class WonderPushWebViewClient {
					public onReceivedError(param0: androidwebkitWebView, param1: number, param2: string, param3: string): void;
					public shouldOverrideUrlLoading(param0: androidwebkitWebView, param1: androidwebkitWebResourceRequest): boolean;
					public shouldOverrideUrlLoading(param0: androidwebkitWebView, param1: string): boolean;
					public onPageStarted(param0: androidwebkitWebView, param1: string, param2: androidgraphicsBitmap): void;
					public onPageFinished(param0: androidwebkitWebView, param1: string): void;
					public onReceivedError(param0: androidwebkitWebView, param1: androidwebkitWebResourceRequest, param2: androidwebkitWebResourceError): void;
				}
			}
		}
	}
}
