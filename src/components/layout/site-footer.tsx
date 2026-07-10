import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/40 mt-auto border-t">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <div
          aria-hidden="true"
          className="bg-accent/40 mb-1 h-px w-10"
        />
        <p className="font-quote text-foreground/85 max-w-md text-base leading-relaxed italic md:text-lg">
          {t("rights")}
        </p>
        <p className="text-muted-foreground text-sm">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
