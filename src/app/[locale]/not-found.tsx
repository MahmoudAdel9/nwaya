import { ArrowLeftIcon, FileQuestionIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <div className="border-primary/20 bg-primary/8 text-primary mb-6 flex size-12 items-center justify-center rounded-xl border">
        <FileQuestionIcon
          className="size-5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md text-lg leading-relaxed">
        {t("description")}
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors md:text-base"
      >
        <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden="true" />
        {t("backHome")}
      </Link>
    </div>
  );
}
