import {
  Cairo,
  IBM_Plex_Sans_Arabic,
  Onest,
  Source_Serif_4,
} from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/seo";
import "../globals.css";

const uiFont = Cairo({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const displayFont = Cairo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const serifFont = Onest({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal"],
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">) {
  const { locale: localeParam } = await params;
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: t("homeTitle"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("homeDescription"),
    applicationName: t("siteName"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${uiFont.variable} ${displayFont.variable} ${serifFont.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <SkipLink />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
