import { ArrowLeftIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { IntentionCategory, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { IntentionList } from "@/components/intentions/intention-list";
import { Link } from "@/i18n/navigation";
import { categoryIcons } from "@/lib/icons";

type CategoryViewProps = {
  category: IntentionCategory;
  locale: LocaleCode;
};

export async function CategoryView({ category, locale }: CategoryViewProps) {
  const t = await getTranslations("Category");
  const Icon = categoryIcons[category.id];

  return (
    <article>
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-10 inline-flex items-center gap-2 text-sm transition-colors md:text-base"
      >
        <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden="true" />
        {t("backHome")}
      </Link>

      <header className="animate-rise mb-12">
        <div className="flex items-start gap-4">
          <div className="border-primary/20 bg-primary/8 text-primary flex size-12 shrink-0 items-center justify-center rounded-xl border">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {localize(category.title, locale)}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg leading-relaxed md:text-xl">
              {localize(category.description, locale)}
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="bg-accent/35 animate-draw mt-8 h-px w-20"
        />
      </header>

      <section aria-labelledby="intentions-heading">
        <h2 id="intentions-heading" className="sr-only">
          {t("intentionsHeading")}
        </h2>
        <IntentionList intentions={category.intentions} locale={locale} />
      </section>
    </article>
  );
}
