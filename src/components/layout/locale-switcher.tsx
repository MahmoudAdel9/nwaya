"use client";

import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("Nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  // English temporarily disabled — restore when "en" is back in routing.locales
  const nextLocale = (locale === "ar" ? "en" : "ar") as Locale;
  const label = nextLocale === "ar" ? "العربية" : "English";

  function switchLocale() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      aria-label={`${t("switchLocale")}: ${label}`}
      className="text-muted-foreground hover:text-foreground min-w-20 gap-1.5 font-medium"
    >
      <LanguagesIcon className="size-3.5" aria-hidden="true" />
      <span lang={nextLocale}>{label}</span>
    </Button>
  );
}
