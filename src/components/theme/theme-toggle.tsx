"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const t = useTranslations("Nav");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t("switchToLight") : t("switchToDark");

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? label : t("toggleTheme")}
      className="text-muted-foreground hover:text-foreground"
    >
      {mounted && !isDark ? (
        <MoonIcon className="size-4" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <SunIcon className="size-4" strokeWidth={1.75} aria-hidden="true" />
      )}
    </Button>
  );
}
