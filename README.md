# نوايا | Nwaya

Islamic intentions for everyday habits — sleep, work, training, and more — with evidence from the Quran, Sunnah, the early generations, and scholars.

**نوايا** موقع مفتوح المصدر يجمع النوايا الصالحة للأعمال اليومية مع أدلتها، ليساعد المسلم على استحضار النية واحتساب الأجر في عاداته.

Contributions are welcome: new intentions, new categories, translations, UI improvements, and bug fixes.

---

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- next-intl (`ar` default, `en`)
- pnpm

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 10+

## Getting started

```bash
git clone https://github.com/<your-org>/nwaya.git
cd nwaya
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/ar`.

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `pnpm dev`          | Start the development server |
| `pnpm build`        | Create a production build    |
| `pnpm start`        | Run the production server    |
| `pnpm lint`         | Run ESLint                   |
| `pnpm format`       | Format files with Prettier   |
| `pnpm format:check` | Check Prettier formatting    |

Before opening a PR, run:

```bash
pnpm lint
pnpm format:check
pnpm build
```

## Project structure

```
src/
  app/                  # Next.js routes (locale-aware)
  components/           # UI components
  content/intentions/   # Intention categories (typed content)
  i18n/                 # next-intl routing & config
  lib/                  # SEO, icons, highlight helper, utilities
messages/
  ar.json               # Arabic UI chrome (nav, SEO, labels)
  en.json               # English UI chrome
```

- **Content** (intentions + evidence + optional phrase highlights): `src/content/intentions/`
- **UI strings** (nav, home copy, labels): `messages/ar.json` and `messages/en.json`
- **Phrase highlighting**: `src/lib/highlight-text.tsx` (used by evidence blocks and intention titles)

---

## Contributing

### Ways to help

1. **Add intentions** to an existing category (sleep, work, gym, …)
2. **Add a new category** (e.g. eating, studying, travel)
3. **Improve translations** (Arabic ↔ English)
4. **Fix bugs** or improve accessibility / SEO / UI
5. **Review evidence** — correct sources, wording, or attributions

### Contribution workflow

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Keep Arabic and English in sync for any user-facing text
4. Run `pnpm lint`, `pnpm format:check`, and `pnpm build`
5. Open a pull request with a short description of what you added or fixed

### Content guidelines

When adding or editing intentions:

- Prefer clear, practical intentions a Muslim can actually hold in daily life
- Every intention should include at least one piece of **evidence** (title-only entries are rare; use them only when the intention itself is the point)
- Evidence kinds: `quran` | `hadith` | `athar` | `scholar` | `note`
- Cite sources carefully (surah, collection, narrator, scholar name)
- Provide **both** `ar` and `en` for titles, texts, and sources
- Do not invent or weakly attribute texts — accuracy matters more than volume
- Use **phrase highlights** to emphasize the key wording that supports the intention (see below)

### Phrase highlights

Key phrases in evidence text (and optionally in intention titles) can be emphasized in the UI with a soft accent mark.

- On an **evidence**: optional `highlights?: LocaleString[]`
- On an **intention**: optional `titleHighlights?: LocaleString[]` (useful when there is no evidence body)

Each entry must be an **exact substring** of the corresponding `ar` / `en` text — including Arabic diacritics. Mismatched harakat will not highlight.

```ts
highlights: [
  {
    ar: "ونَمْ", // must appear verbatim inside text.ar
    en: "sleep", // must appear verbatim inside text.en
  },
],
```

Prefer short, meaningful spans (the sleep-related word, the ruling phrase, etc.), not the entire narration unless the whole text is the point.

---

## Adding an intention to an existing category

1. Open the category file, e.g. `src/content/intentions/sleep.ts`
2. Append an object to the `intentions` array:

```ts
{
  id: "sleep-example-id", // unique, kebab-case, prefixed by category
  title: {
    ar: "عنوان النية",
    en: "Intention title",
  },
  // optional — emphasize a phrase inside the title:
  // titleHighlights: [{ ar: "…", en: "…" }],
  evidences: [
    {
      kind: "hadith", // quran | hadith | athar | scholar | note
      text: {
        ar: "نص الدليل…",
        en: "Evidence text…",
      },
      // optional — exact substrings of text.ar / text.en:
      highlights: [
        {
          ar: "العبارة المميزة",
          en: "the key phrase",
        },
      ],
      source: {
        ar: "المصدر بالعربية",
        en: "Source in English",
      },
    },
  ],
  // optional nested intentions:
  // children: [ ... ]
}
```

3. Save and check the category page in the browser (`/ar/intentions/sleep`, `/en/intentions/sleep`). Confirm highlighted phrases render correctly in both locales.

---

## Adding a new category

Follow these steps in order:

### 1. Extend the type

In `src/content/intentions/types.ts`, add the new id to `CategoryId`:

```ts
export type CategoryId = "sleep" | "work" | "gym" | "study";
```

### 2. Create the content file

Create `src/content/intentions/study.ts` (example) exporting an `IntentionCategory` — mirror `gym.ts` or `sleep.ts`.

### 3. Register the category

In `src/content/intentions/index.ts`:

```ts
import { studyCategory } from "./study";

const categories: Record<CategoryId, IntentionCategory> = {
  sleep: sleepCategory,
  work: workCategory,
  gym: gymCategory,
  study: studyCategory,
};
```

### 4. Add UI copy (both locales)

In `messages/ar.json` and `messages/en.json`:

- `Nav.study` — nav label
- `Home.studyTitle` / `Home.studyDescription` — home card copy

### 5. Add an icon

In `src/lib/icons.ts`, map the new `CategoryId` to a Lucide icon in `categoryIcons`.

### 6. Wire the home cards and header nav

These two places list categories explicitly:

- `src/components/intentions/category-links.tsx` — add a `title` / `description` message-key pair for the home cards
- `src/components/layout/site-header.tsx` — add a nav item (`href`, `key`, `icon`)

### 7. Verify

```bash
pnpm build
```

Then open `/ar/intentions/<slug>` and `/en/intentions/<slug>`.

---

## Translations

| What                         | Where                                      |
| ---------------------------- | ------------------------------------------ |
| Intention titles & evidence  | `src/content/intentions/*.ts`              |
| Phrase highlights (ar / en)  | `highlights` / `titleHighlights` in those files |
| Nav, SEO, home, footer, UI   | `messages/ar.json`, `messages/en.json`     |

Always update **both** locales. Arabic is the default locale.

---

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for canonical URLs, sitemap, and Open Graph metadata.

---

## Code style

- TypeScript throughout
- Match existing patterns and naming
- Format with Prettier (`pnpm format`)
- Prefer small, focused PRs over large mixed changes

---

## License

This project is open source. If you contribute, you agree that your contributions are included under the same license as the repository.

> Maintainers: add a `LICENSE` file (e.g. MIT) when you publish the repo publicly.

---

## Acknowledgments

جزاكم الله خيرًا لكل من يساهم في نشر النية الصالحة وتسهيل احتساب الأجر في الأعمال اليومية.
