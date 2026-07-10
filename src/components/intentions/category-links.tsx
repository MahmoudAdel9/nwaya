import { ArrowRightIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  getAllCategories,
  localize,
  type LocaleCode,
} from "@/content/intentions";
import { Link } from "@/i18n/navigation";
import { categoryIcons } from "@/lib/icons";

const categoryKeys = {
  sleep: {
    title: "sleepTitle",
    description: "sleepDescription",
  },
  work: {
    title: "workTitle",
    description: "workDescription",
  },
  gym: {
    title: "gymTitle",
    description: "gymDescription",
  },
} as const;

type CategoryLinksProps = {
  locale: LocaleCode;
};

export async function CategoryLinks({ locale }: CategoryLinksProps) {
  const t = await getTranslations("Home");
  const categories = getAllCategories();

  return (
    <ul className="flex flex-col gap-2" role="list">
      {categories.map((category, index) => {
        const keys = categoryKeys[category.id];
        const Icon = categoryIcons[category.id];

        return (
          <li key={category.id}>
            <Link
              href={`/intentions/${category.id}`}
              className="group focus-visible:ring-ring focus-visible:ring-offset-background animate-rise block rounded-2xl px-1 py-5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-2 sm:py-6"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <span className="text-primary mb-3 flex items-center gap-2.5 text-sm font-semibold tracking-[0.2em] uppercase md:text-base">
                <span className="border-primary/20 bg-primary/8 text-primary flex size-8 items-center justify-center rounded-lg border transition-colors group-hover:border-primary/40 group-hover:bg-primary/15">
                  <Icon
                    className="size-4 shrink-0"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-foreground group-hover:text-primary flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors md:gap-3 md:text-3xl">
                {t(keys.title)}
                <ArrowRightIcon
                  className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-all group-hover:translate-x-1 md:size-6 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span className="text-muted-foreground mt-2 block max-w-xl text-lg leading-relaxed">
                {t(keys.description)}
              </span>
              <span
                aria-hidden="true"
                className="bg-border/60 group-hover:bg-primary/40 mt-5 block h-px w-full origin-left transition-colors rtl:origin-right"
              />
              <span className="sr-only">
                {localize(category.title, locale)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
