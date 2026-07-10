import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  getAllCategories,
  getCategory,
  localize,
  type CategoryId,
  type LocaleCode,
} from "@/content/intentions";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nwaya.app";

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

export function buildLocaleAlternates(path: string = "") {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = `${getSiteUrl()}/${locale}${normalized}`;
  }

  languages["x-default"] =
    `${getSiteUrl()}/${routing.defaultLocale}${normalized}`;

  return {
    canonical: undefined as string | undefined,
    languages,
  };
}

type HomeMetadataArgs = {
  locale: LocaleCode;
};

export async function buildHomeMetadata({
  locale,
}: HomeMetadataArgs): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("homeTitle");
  const description = t("homeDescription");
  const alternates = buildLocaleAlternates("");
  const url = `${getSiteUrl()}/${locale}`;

  alternates.canonical = url;

  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url,
      siteName: t("siteName"),
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type CategoryMetadataArgs = {
  locale: LocaleCode;
  categoryId: CategoryId;
};

export async function buildCategoryMetadata({
  locale,
  categoryId,
}: CategoryMetadataArgs): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const category = getCategory(categoryId);
  const categoryName = localize(category.title, locale);
  const title = t("categoryTitle", { category: categoryName });
  const description = t("categoryDescription", { category: categoryName });
  const path = `/intentions/${categoryId}`;
  const alternates = buildLocaleAlternates(path);
  const url = `${getSiteUrl()}/${locale}${path}`;

  alternates.canonical = url;

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "article",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url,
      siteName: t("siteName"),
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildWebsiteJsonLd(locale: LocaleCode, siteName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: `${getSiteUrl()}/${locale}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    potentialAction: {
      "@type": "ReadAction",
      target: getAllCategories().map(
        (category) => `${getSiteUrl()}/${locale}/intentions/${category.id}`,
      ),
    },
  };
}

export function buildCategoryJsonLd(
  locale: LocaleCode,
  categoryId: CategoryId,
) {
  const category = getCategory(categoryId);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: localize(category.title, locale),
    description: localize(category.description, locale),
    url: `${getSiteUrl()}/${locale}/intentions/${categoryId}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: category.intentions.map((intention, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: localize(intention.title, locale),
      })),
    },
  };
}
