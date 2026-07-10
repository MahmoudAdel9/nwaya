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
    <ul
      className="divide-border/50 mt-12 flex flex-col gap-6 divide-y"
      role="list"
    >
      {categories.map((category, index) => {
        const keys = categoryKeys[category.id];
        const Icon = categoryIcons[category.id];

        return (
          <li key={category.id}>
            <Link
              href={`/intentions/${category.id}`}
              className="group hover:border-primary/40 focus-visible:ring-ring animate-rise focus-visible:ring-offset-background block pb-6 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <span className="text-primary mb-3 flex items-center gap-2.5 text-sm font-semibold tracking-[0.2em] uppercase md:text-base">
                <Icon
                  className="size-5 shrink-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-foreground group-hover:text-primary block text-2xl font-semibold tracking-tight transition-colors md:text-3xl">
                {t(keys.title)}
              </span>
              <span className="text-muted-foreground mt-2 block max-w-xl text-lg leading-relaxed">
                {t(keys.description)}
              </span>
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
