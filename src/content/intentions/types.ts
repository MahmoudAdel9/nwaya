export type LocaleCode = "ar" | "en";

export type LocaleString = Record<LocaleCode, string>;

export type EvidenceKind = "quran" | "hadith" | "athar" | "scholar" | "note";

export type Evidence = {
  kind: EvidenceKind;
  text: LocaleString;
  source: LocaleString;
};

export type Intention = {
  id: string;
  title: LocaleString;
  evidences: Evidence[];
  children?: Intention[];
};

export type CategoryId = "sleep" | "work" | "gym";

export type IntentionCategory = {
  id: CategoryId;
  slug: CategoryId;
  title: LocaleString;
  description: LocaleString;
  intentions: Intention[];
};
