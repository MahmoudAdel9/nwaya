import { getTranslations } from "next-intl/server";
import type { Evidence, EvidenceKind, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { highlightText } from "@/lib/highlight-text";
import { evidenceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const kindStyles: Record<
  EvidenceKind,
  { accent: string; label: string; surface: string }
> = {
  quran: {
    accent: "border-s-quran",
    label: "text-quran",
    surface: "border-quran/15 bg-quran/6",
  },
  hadith: {
    accent: "border-s-hadith",
    label: "text-hadith",
    surface: "border-hadith/15 bg-hadith/6",
  },
  athar: {
    accent: "border-s-accent/70",
    label: "text-accent",
    surface: "border-accent/15 bg-accent/5",
  },
  scholar: {
    accent: "border-s-border",
    label: "text-foreground/70",
    surface: "border-border/40 bg-muted/25",
  },
  note: {
    accent: "border-s-border",
    label: "text-foreground/70",
    surface: "border-border/40 bg-muted/25",
  },
};

type EvidenceBlockProps = {
  evidence: Evidence;
  locale: LocaleCode;
};

export async function EvidenceBlock({ evidence, locale }: EvidenceBlockProps) {
  const t = await getTranslations("Category");
  const label = t(`evidenceLabel.${evidence.kind}`);
  const styles = kindStyles[evidence.kind];
  const Icon = evidenceIcons[evidence.kind];
  const text = localize(evidence.text, locale);
  const highlightPhrases =
    evidence.highlights?.map((phrase) => localize(phrase, locale)) ?? [];

  return (
    <figure
      className={cn(
        "rounded-xl border border-s-[3px] px-4 py-4 sm:px-5 sm:py-5",
        styles.accent,
        styles.surface,
      )}
    >
      <figcaption
        className={cn(
          "mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase",
          styles.label,
        )}
      >
        <Icon
          className="size-3.5 shrink-0"
          strokeWidth={2}
          aria-hidden="true"
        />
        {label}
      </figcaption>
      <blockquote
        lang={locale === "ar" ? "ar" : "en"}
        className={
          locale === "ar"
            ? "font-quote text-foreground text-lg leading-loose md:text-xl"
            : "font-quote text-foreground text-base leading-relaxed md:text-lg"
        }
      >
        <p>«{highlightText(text, highlightPhrases)}»</p>
      </blockquote>
      {localize(evidence.source, locale) ? (
        <footer className="border-border/30 mt-4 border-t pt-3">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {localize(evidence.source, locale)}
          </p>
        </footer>
      ) : null}
    </figure>
  );
}
