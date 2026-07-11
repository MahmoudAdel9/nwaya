declare module "next-intl" {
  interface AppConfig {
    // English temporarily disabled — restore "en" when re-enabled in routing
    Locale: "ar" /* | "en" */;
    Messages: typeof import("../../messages/ar.json");
  }
}

export {};
