import {
  BookOpenIcon,
  BriefcaseIcon,
  DumbbellIcon,
  GraduationCapIcon,
  MoonIcon,
  QuoteIcon,
  ScrollTextIcon,
  type LucideIcon,
} from "lucide-react";
import type { CategoryId, EvidenceKind } from "@/content/intentions";

export const categoryIcons: Record<CategoryId, LucideIcon> = {
  sleep: MoonIcon,
  work: BriefcaseIcon,
  gym: DumbbellIcon,
};

export const evidenceIcons: Record<EvidenceKind, LucideIcon> = {
  quran: BookOpenIcon,
  hadith: ScrollTextIcon,
  athar: QuoteIcon,
  scholar: GraduationCapIcon,
  note: QuoteIcon,
};
