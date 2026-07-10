import { getTranslations } from "next-intl/server";
import type { Evidence, EvidenceKind, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { evidenceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const kindStyles: Record<
  EvidenceKind,
  { accent: string; label: string; surface: string }
> = {
  quran: {
    accent: "border-s-quran/70",
    label: "text-quran",
    surface: "border-quran/20 bg-quran/8",
  },
  hadith: {
    accent: "border-s-hadith/70",
    label: "text-hadith",
    surface: "border-hadith/20 bg-hadith/8",
  },
  athar: {
    accent: "border-s-border",
    label: "text-foreground/75",
    surface: "border-border/50 bg-muted/30",
  },
  scholar: {
    accent: "border-s-border",
    label: "text-foreground/75",
    surface: "border-border/50 bg-muted/30",
  },
  note: {
    accent: "border-s-border",
    label: "text-foreground/75",
    surface: "border-border/50 bg-muted/30",
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
            ? "text-foreground font-sans text-base leading-loose md:text-lg"
            : "font-quote text-foreground text-base leading-relaxed md:text-lg"
        }
      >
        <p>«{localize(evidence.text, locale)}»</p>
      </blockquote>
      {localize(evidence.source, locale) ? (
        <footer className="border-border/35 mt-4 border-t pt-3">
          <p className="text-foreground/80 text-sm leading-relaxed">
            {localize(evidence.source, locale)}
          </p>
        </footer>
      ) : null}
    </figure>
  );
}
