import androidviewView = android.view.View;
import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import androidwebkitWebView = android.webkit.WebView;
import androidcontentresResources = android.content.res.Resources;
declare module com {
	export module wonderpush {
		export module sdk {
			export class WonderPushCompatibilityHelper {
				public static ViewSetBackground(param0: androidviewView, param1: androidgraphicsdrawableDrawable): void;
				public static getColorResource(param0: androidcontentresResources, param1: number): number;
				public static WebViewSettingsSetDatabasePath(param0: androidwebkitWebView, param1: string): void;
				public static getIntentFlagActivityNewDocument(): number;
				public static fromHtml(param0: string): string;
			}
		}
	}
}
