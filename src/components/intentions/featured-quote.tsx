import { QuoteIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

type QuoteProps = {
  attribution: string;
  text: string;
  locale: string;
  className?: string;
};

function Quote({ attribution, text, locale, className }: QuoteProps) {
  return (
    <figure
      className={cn(
        "border-primary/25 bg-primary/8 border-s-primary/70 rounded-2xl border border-s-[3px] px-5 py-5 sm:px-6 sm:py-6",
        className,
      )}
    >
      <figcaption className="text-primary mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.08em] md:text-base">
        <QuoteIcon
          className="size-3.5 shrink-0 opacity-80"
          aria-hidden="true"
        />
        {attribution}
      </figcaption>
      <blockquote
        lang={locale}
        className={
          locale === "ar"
            ? "text-foreground font-sans text-base leading-loose md:text-lg"
            : "font-quote text-foreground text-base leading-relaxed md:text-lg"
        }
      >
        <p>«{text}»</p>
      </blockquote>
    </figure>
  );
}

export async function FeaturedQuote() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  return (
    <div className="animate-rise flex flex-col gap-4">
      <Quote
        locale={locale}
        attribution={t("featuredQuoteAttribution")}
        text={t("featuredQuote")}
      />
      <Quote
        locale={locale}
        attribution={t("secondQuoteAttribution")}
        text={t("secondQuote")}
      />
    </div>
  );
}
