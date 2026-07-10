import { QuoteIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";

type QuoteProps = {
  attribution: string;
  text: string;
  locale: string;
  className?: string;
  index?: number;
};

function Quote({ attribution, text, locale, className, index = 0 }: QuoteProps) {
  return (
    <figure
      className={cn(
        "animate-rise border-border/50 relative overflow-hidden rounded-2xl border px-5 py-5 sm:px-6 sm:py-6",
        "bg-card/40 backdrop-blur-sm",
        className,
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden="true"
        className="bg-accent absolute start-0 top-0 bottom-0 w-[3px]"
      />
      <figcaption className="text-accent mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.06em] md:text-base">
        <QuoteIcon
          className="size-3.5 shrink-0 opacity-70"
          aria-hidden="true"
        />
        {attribution}
      </figcaption>
      <blockquote
        lang={locale}
        className={
          locale === "ar"
            ? "font-quote text-foreground text-lg leading-loose md:text-xl"
            : "font-quote text-foreground text-base leading-relaxed italic md:text-lg"
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

  const quotes = [
    {
      attribution: t("featuredQuoteAttribution"),
      text: t("featuredQuote"),
    },
    {
      attribution: t("secondQuoteAttribution"),
      text: t("secondQuote"),
    },
    {
      attribution: t("thirdQuoteAttribution"),
      text: t("thirdQuote"),
    },
    {
      attribution: t("fourthQuoteAttribution"),
      text: t("fourthQuote"),
    },
    {
      attribution: t("fifthQuoteAttribution"),
      text: t("fifthQuote"),
    },
  ];

  return (
    <section
      aria-labelledby="quotes-heading"
      className="flex flex-col gap-4"
    >
      <div className="mb-2 flex items-center gap-3">
        <h2
          id="quotes-heading"
          className="text-accent text-sm font-semibold tracking-[0.25em] uppercase md:text-base"
        >
          {t("quotesTitle")}
        </h2>
        <div
          aria-hidden="true"
          className="bg-border/70 animate-draw h-px flex-1"
        />
      </div>
      {quotes.map((quote, index) => (
        <Quote
          key={quote.attribution}
          locale={locale}
          attribution={quote.attribution}
          text={quote.text}
          index={index}
        />
      ))}
    </section>
  );
}
