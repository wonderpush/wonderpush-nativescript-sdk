declare module com {
	export module wonderpush {
		export module sdk {
			export class InstallationManager {
				public static CACHED_INSTALLATION_CUSTOM_PROPERTIES_MIN_DELAY: number;
				public static CACHED_INSTALLATION_CUSTOM_PROPERTIES_MAX_DELAY: number;
				public static getSensorStepDetectorSupported(param0: androidcontentContext): boolean;
				public static getLocaleCountry(): string;
				public static getTelephonyGSMSupported(param0: androidcontentContext): boolean;
				public static getFrontCameraSupported(param0: androidcontentContext): boolean;
				public static getCarrierName(): string;
				public static getLocaleCurrency(): string;
				public static getSDKVersion(): string;
				public static getIRSupported(param0: androidcontentContext): boolean;
				public static getTouchscreenDistinctSupported(param0: androidcontentContext): boolean;
				public static getApplicationVersion(): string;
				public static getScreenSize(param0: androidcontentContext): string;
				public static getOsVersion(): string;
				public static getSensorLightSupported(param0: androidcontentContext): boolean;
				public static getDeviceName(): string;
				public static getTelephonyCDMASupported(param0: androidcontentContext): boolean;
				public static updateInstallationCoreProperties(param0: androidcontentContext): void;
				public static getInstallationCustomProperties(): orgjsonJSONObject;
				public static getTouchscreenTwoFingersSupported(param0: androidcontentContext): boolean;
				public static putInstallationCustomProperties(param0: orgjsonJSONObject): void;
				public static getTouchscreenFullHandSupported(param0: androidcontentContext): boolean;
				public static getSensorGyroscopeSupported(param0: androidcontentContext): boolean;
				public static getLocaleString(): string;
				public static getSIPSupported(param0: androidcontentContext): boolean;
				public static getDeviceBrand(): string;
				public static getScreenDensity(param0: androidcontentContext): number;
				public static getWifiSupported(param0: androidcontentContext): boolean;
				public static getSensorCompassSupported(param0: androidcontentContext): boolean;
				public static getGPSSupported(param0: androidcontentContext): boolean;
				public static getBluetoothLESupported(param0: androidcontentContext): boolean;
				public static getBluetoothSupported(param0: androidcontentContext): boolean;
				public static getSensorBarometerSupported(param0: androidcontentContext): boolean;
				public static getCameraSupported(param0: androidcontentContext): boolean;
				public static getScreenWidth(param0: androidcontentContext): number;
				public static getNetworkLocationSupported(param0: androidcontentContext): boolean;
				public static getApplicationVersionCode(): number;
				public static getMicrophoneSupported(param0: androidcontentContext): boolean;
				public static getSensorAccelerometerSupported(param0: androidcontentContext): boolean;
				public static getSensorProximitySupported(param0: androidcontentContext): boolean;
				public static getScreenHeight(param0: androidcontentContext): number;
				public static getTouchscreenSupported(param0: androidcontentContext): boolean;
				public static getNFCSupported(param0: androidcontentContext): boolean;
				public static getDeviceModel(): string;
				public static getTelephonySupported(param0: androidcontentContext): boolean;
				public static getSIPVOIPSupported(param0: androidcontentContext): boolean;
				public static getWifiDirectSupported(param0: androidcontentContext): boolean;
				public static getUSBHostSupported(param0: androidcontentContext): boolean;
				public static getUserTimezone(): string;
				public static getSensorStepCounterSupported(param0: androidcontentContext): boolean;
				public static getUSBAccessorySupported(param0: androidcontentContext): boolean;
			}
		}
	}
}
