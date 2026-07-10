import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-auto border-t text-center">
      <div className="border-border/40 flex flex-col gap-2 border-t py-6 text-base">
        <p className="text-muted-foreground leading-relaxed">{t("rights")}</p>
        <p className="text-muted-foreground">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
