import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English temporarily disabled — re-add "en" when ready
  locales: ["ar" /* , "en" */],
  defaultLocale: "ar",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
