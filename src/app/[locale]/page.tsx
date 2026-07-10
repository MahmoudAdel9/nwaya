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
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <section
          aria-labelledby="home-heading"
          className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="bg-accent/20 animate-draw absolute inset-s-0 top-16 h-px w-16 sm:top-20"
          />

          <p className="text-accent animate-fade mb-5 text-sm font-medium tracking-[0.28em] uppercase md:text-base">
            {t("explore")}
          </p>

          <h1
            id="home-heading"
            className="font-heading animate-rise text-[clamp(3.25rem,12vw,5.5rem)] leading-[0.95] font-bold tracking-tight"
          >
            {t("brand")}
          </h1>

          <p
            className="text-muted-foreground animate-rise mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {t("tagline")}
          </p>

          <div
            className="animate-rise mt-10"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#categories"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors md:text-base"
            >
              {t("explore")}
            </a>
          </div>
        </section>

        <section
          id="categories"
          aria-labelledby="categories-heading"
          className="scroll-mt-24 pb-20 sm:pb-28"
        >
          <h2 id="categories-heading" className="sr-only">
            {t("explore")}
          </h2>
          <CategoryLinks locale={typedLocale} />
        </section>

        <div className="pb-20 sm:pb-28">
          <FeaturedQuote />
        </div>
      </div>
    </>
  );
}
