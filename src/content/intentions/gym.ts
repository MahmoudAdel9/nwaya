import type { IntentionCategory } from "./types";

export const gymCategory: IntentionCategory = {
  id: "gym",
  slug: "gym",
  title: {
    ar: "نوايا الجيم",
    en: "Gym Intentions",
  },
  description: {
    ar: "نوايا شرعية لتقوية البدن وحماية الأهل والتزيّن بالمعروف.",
    en: "Islamic intentions for training: strengthening the body, protecting family, and beautifying oneself with kindness.",
  },
  intentions: [
    {
      id: "gym-strengthen-body",
      title: {
        ar: "تقوية البدن",
        en: "Strengthening the body",
      },
      evidences: [
        {
          kind: "quran",
          text: {
            ar: "وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ",
            en: "And prepare against them whatever you are able of power.",
          },
          source: {
            ar: "سورة الأنفال",
            en: "Surah al-Anfal",
          },
        },
        {
          kind: "hadith",
          text: {
            ar: "المُؤمِنُ القَويُّ خَيرٌ وأحَبُّ إلى اللهِ مِنَ المُؤمِنِ الضَّعيفِ، وفي كُلٍّ خَيرٌ.",
            en: "The strong believer is better and more beloved to Allah than the weak believer, and in both there is good.",
          },
          source: {
            ar: "رواه مسلم في صحيحه من حديث أبي هريرة رضي الله عنه",
            en: "Narrated by Muslim in his Sahih from the hadith of Abu Hurayrah (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "gym-protect-family",
      title: {
        ar: "حماية نفسك وأهلك",
        en: "Protecting yourself and your family",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "من قاتل دون مالِه فقُتل فهو شهيدٌ، ومن قاتل دونَ دمِه فهو شهيدٌ، ومن قاتل دونَ أهلِه فهو شهيدٌ",
            en: "Whoever is killed defending his wealth is a martyr, whoever is killed defending his life is a martyr, and whoever is killed defending his family is a martyr.",
          },
          source: {
            ar: "أخرجه أبو داود والنسائي وأحمد بلفظه من حديث سعيد بن زيد رضي الله عنه",
            en: "Reported by Abu Dawud, an-Nasa’i, and Ahmad with this wording from the hadith of Sa‘id ibn Zayd (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "gym-adorn-spouse",
      title: {
        ar: "تحسين الشكل والتزيّن لزوجتك",
        en: "Improving one’s appearance and adorning oneself for one’s wife",
      },
      evidences: [
        {
          kind: "athar",
          text: {
            ar: "إنِّي لأحبُّ أن أتزيَّنَ للمرأةِ كما أحبُّ أن تتزيَّنَ ليَ المرأةُ، لأنَّ اللَّهَ يقول: وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ",
            en: "I love to adorn myself for my wife just as I love that she adorn herself for me, because Allah says: And due to them [wives] is similar to what is expected of them, according to what is reasonable.",
          },
          source: {
            ar: "رواه البيهقي في السنن الكبرى وابن أبي شيبة في مصنفه عن ابن عباس رضي الله عنهما",
            en: "Narrated by al-Bayhaqi in al-Sunan al-Kubra and Ibn Abi Shaybah in his Musannaf from the athar of Ibn Abbas (may Allah be pleased with them)",
          },
        },
      ],
    },
  ],
};
