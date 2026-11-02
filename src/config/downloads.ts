export interface StoreDownload {
  id: "android" | "ios";
  platformName: string;
  storeName: string;
  buttonLabel: string;
  secondaryText: string;
  url: string | null; // Configurable: set to actual URL once published to stores
  isAvailable: boolean;
  versionNotice: string;
}

export const downloadsConfig: Record<"android" | "ios", StoreDownload> = {
  android: {
    id: "android",
    platformName: "Android",
    storeName: "Google Play Store",
    buttonLabel: "Download for Android",
    secondaryText: "Get it on Google Play",
    url: null, // Will be set to https://play.google.com/store/apps/details?id=com.mechfind.app when released
    isAvailable: false,
    versionNotice: "Android 8.0+ compatible. Native location & background tracking.",
  },
  ios: {
    id: "ios",
    platformName: "iOS",
    storeName: "Apple App Store",
    buttonLabel: "Download for iOS",
    secondaryText: "Download on the App Store",
    url: null, // Will be set to https://apps.apple.com/app/mechfind/id... when released
    isAvailable: false,
    versionNotice: "iOS 15.0+ compatible. Apple Maps & push notification support.",
  },
};

