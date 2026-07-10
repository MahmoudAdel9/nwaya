import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CategoryLinks } from "@/components/intentions/category-links";
import { FeaturedQuote } from "@/components/intentions/featured-quote";
import type { LocaleCode } from "@/content/intentions";
import { routing } from "@/i18n/routing";
import { buildHomeMetadata, buildWebsiteJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  return buildHomeMetadata({ locale: locale as LocaleCode });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tMeta = await getTranslations("Meta");
  const typedLocale = locale as LocaleCode;
  const jsonLd = buildWebsiteJsonLd(typedLocale, tMeta("siteName"));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <FeaturedQuote />

        <section
          aria-labelledby="home-heading"
          className="animate-rise mt-16 min-h-[70vh] sm:mt-20"
        >
          <p className="text-primary mb-4 text-sm tracking-[0.25em] uppercase md:text-base">
            {t("explore")}
          </p>
          <h1
            id="home-heading"
            className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            {t("brand")}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
            {t("tagline")}
          </p>
          <CategoryLinks locale={typedLocale} />
        </section>
      </div>
    </>
  );
}
