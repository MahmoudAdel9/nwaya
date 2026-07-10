import { ChevronDownIcon } from "lucide-react";
import type { Intention, LocaleCode } from "@/content/intentions";
import { localize } from "@/content/intentions";
import { EvidenceBlock } from "@/components/intentions/evidence-block";
import { cn } from "@/lib/utils";

type IntentionItemProps = {
  intention: Intention;
  locale: LocaleCode;
  level?: number;
};

function shellForLevel(level: number) {
  if (level === 0) {
    return "border-border/40 bg-card/50 hover:border-primary/30 hover:bg-card/70 open:border-primary/35 open:bg-card/80 backdrop-blur-sm";
  }
  return "border-border/45 bg-muted/35 hover:border-primary/25 hover:bg-muted/55 open:border-primary/30 open:bg-muted/65";
}

export function IntentionItem({
  intention,
  locale,
  level = 0,
}: IntentionItemProps) {
  const hasChildren = Boolean(intention.children?.length);
  const hasEvidences = intention.evidences.length > 0;
  const title = localize(intention.title, locale);
  const titleClass =
    level === 0
      ? "font-heading text-foreground text-lg leading-relaxed font-medium md:text-xl"
      : "text-foreground/90 text-base leading-relaxed font-medium md:text-lg";

  if (!hasChildren && !hasEvidences) {
    return (
      <article
        className={cn(
          "overflow-hidden rounded-2xl border px-4 py-4 transition-colors sm:px-5 sm:py-5",
          shellForLevel(level),
        )}
      >
        <h3 className={titleClass}>{title}</h3>
      </article>
    );
  }

  return (
    <details
      className={cn(
        "group/intention overflow-hidden rounded-2xl border transition-colors",
        shellForLevel(level),
      )}
      open={level === 0}
    >
      <summary
        className={cn(
          "hover:text-primary cursor-pointer list-none px-4 py-4 marker:content-none sm:px-5 sm:py-5",
          "flex items-start justify-between gap-3 outline-none",
          "focus-visible:ring-ring focus-visible:rounded-xl focus-visible:ring-2",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        <h3 className={cn(titleClass, "min-w-0 flex-1")}>{title}</h3>
        <span
          aria-hidden="true"
          className="bg-muted/60 text-muted-foreground group-open/intention:bg-primary/15 group-open/intention:text-primary mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors"
        >
          <ChevronDownIcon className="size-4 transition-transform duration-200 group-open/intention:rotate-180" />
        </span>
      </summary>

      <div className="border-border/25 space-y-4 border-t px-4 pt-4 pb-5 sm:px-5">
        {hasEvidences ? (
          <div className="flex flex-col gap-3">
            {intention.evidences.map((evidence, index) => (
              <EvidenceBlock
                key={`${intention.id}-${evidence.kind}-${index}`}
                evidence={evidence}
                locale={locale}
              />
            ))}
          </div>
        ) : null}

        {hasChildren ? (
          <div className="border-primary/20 ms-1 flex flex-col gap-2.5 border-s-2 ps-3 sm:ps-4">
            {intention.children!.map((child) => (
              <IntentionItem
                key={child.id}
                intention={child}
                locale={locale}
                level={level + 1}
              />
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

type IntentionListProps = {
  intentions: Intention[];
  locale: LocaleCode;
};

export function IntentionList({ intentions, locale }: IntentionListProps) {
  return (
    <div className="flex w-full flex-col gap-3.5">
      {intentions.map((intention) => (
        <IntentionItem
          key={intention.id}
          intention={intention}
          locale={locale}
        />
      ))}
    </div>
  );
}
