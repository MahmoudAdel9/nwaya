import type { IntentionCategory } from "./types";

export const sleepCategory: IntentionCategory = {
  id: "sleep",
  slug: "sleep",
  title: {
    ar: "نوايا النوم",
    en: "Sleep Intentions",
  },
  description: {
    ar: "نوايا شرعية للنوم امتثالاً للسنة وإعطاء الجسد حقه والتقوّي على العبادة.",
    en: "Islamic intentions for sleep: following the Sunnah, giving the body its right, and gaining strength for worship.",
  },
  intentions: [
    {
      id: "sleep-prophet-command",
      title: {
        ar: "امتثالاً لأمر النبي صلى الله عليه وسلم",
        en: "In obedience to the command of the Prophet ﷺ",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "وقُمْ ونَمْ",
            en: "Pray and sleep.",
          },
          source: {
            ar: "رواه البخاري في صحيحه من حديث عبدالله بن عمرو بن العاص رضي الله عنه",
            en: "Narrated by al-Bukhari in his Sahih from the hadith of Abdullah ibn Amr ibn al-As (may Allah be pleased with them)",
          },
        },
      ],
    },
    {
      id: "sleep-prophet-guidance",
      title: {
        ar: "امتثالاً لهدي النبي صلى الله عليه وسلم واستناناً بسنته",
        en: "Following the guidance of the Prophet ﷺ and taking his Sunnah as an example",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "أما واللهِ إنِّي لَأخشاكُم للهِ وأتقاكُم له، لَكِنِّي أصومُ وأُفطِرُ، وأُصَلِّي وأرقُدُ، وأتَزَوَّجُ النِّساءَ، فمَن رَغِبَ عن سُنَّتي فليسَ مِنِّي.",
            en: "By Allah, I am the most fearful of Allah among you and the most mindful of Him; yet I fast and break my fast, I pray and I sleep, and I marry women. Whoever turns away from my Sunnah is not of me.",
          },
          source: {
            ar: "رواه البخاري في صحيحه من حديث أنس بن مالك رضي الله عنه",
            en: "Narrated by al-Bukhari in his Sahih from the hadith of Anas ibn Malik (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "sleep-body-right",
      title: {
        ar: "إعطاء كل ذي حق حقه كما قال سلمان رضي الله عنه وصدّقه النبي صلى الله عليه وسلم",
        en: "Giving every rightful claim its due, as Salman (may Allah be pleased with him) said, and the Prophet ﷺ affirmed him",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "صُمْ وأفطرْ، وقُمْ وَنَمْ؛ فإنَّ لجسدك عليك حقًّا، وإنَّ لعينك عليك حقًّا",
            en: "Fast and break your fast, pray and sleep; for your body has a right over you, and your eyes have a right over you.",
          },
          source: {
            ar: "رواه البخاري في صحيحه من حديث عبدالله بن عمرو رضي الله عنه",
            en: "Narrated by al-Bukhari in his Sahih from the hadith of Abdullah ibn Amr (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "sleep-no-harm",
      title: {
        ar: "جرياناً على القاعدة الشرعية الشهيرة: لا ضرر ولا ضرار",
        en: "Acting upon the well-known legal maxim: there should be neither harm nor reciprocating harm",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "لا ضَررَ ولا ضِرارَ",
            en: "There should be neither harm nor reciprocating harm.",
          },
          source: {
            ar: "رواه ابن ماجه في سننه متصلاً ومالك في الموطأ مرسلاً من حديث أبي سعيد الخدري رضي الله عنه",
            en: "Narrated by Ibn Majah in his Sunan with a connected chain and by Malik in al-Muwatta as a mursal report from the hadith of Abu Sa‘id al-Khudri (may Allah be pleased with him)",
          },
        },
        {
          kind: "note",
          text: {
            ar: "ولا شك أن قلة النوم تضر بالجسم والتركيز وغيره عند أغلب الناس",
            en: "There is no doubt that lack of sleep harms the body, focus, and more for most people.",
          },
          source: {
            ar: "",
            en: "",
          },
        },
      ],
    },
    {
      id: "sleep-seek-benefit",
      title: {
        ar: "من باب الحرص على النافع",
        en: "Out of eagerness for what benefits",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "احرِصْ على ما يَنفَعُكَ",
            en: "Be eager for what benefits you.",
          },
          source: {
            ar: "رواه مسلم في صحيحه من حديث أبي هريرة رضي الله عنه",
            en: "Narrated by Muslim in his Sahih from the hadith of Abu Hurayrah (may Allah be pleased with him)",
          },
        },
        {
          kind: "note",
          text: {
            ar: "ولا شك أن النوم مما ينفع الإنسان",
            en: "Sleep is undoubtedly among what benefits a person.",
          },
          source: {
            ar: "",
            en: "",
          },
        },
        {
          kind: "quran",
          text: {
            ar: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
            en: "And We made your sleep a rest.",
          },
          source: {
            ar: "سورة النبأ",
            en: "Surah an-Naba",
          },
        },
        {
          kind: "quran",
          text: {
            ar: "وَمِنْ آيَاتِهِ مَنَامُكُمْ بِاللَّيْلِ وَالنَّهَارِ",
            en: "And among His signs is your sleep by night and by day.",
          },
          source: {
            ar: "سورة الروم",
            en: "Surah ar-Rum",
          },
        },
      ],
    },
    {
      id: "sleep-strengthen-worship",
      title: {
        ar: "أن أنام لأتقوّى على عبادة الله، وأداء الفرائض، وطلب الرزق الحلال، وطلب العلم، وسائر أعمال البر في اليوم التالي، فإن هذه الأعمال لا تُؤدَّى على وجهها الأكمل إلا بجسدٍ أخذ كفايته من الراحة",
        en: "That I sleep to gain strength for worshipping Allah, fulfilling obligations, seeking lawful provision, seeking knowledge, and other righteous deeds the next day — for these acts are not performed at their best except with a body that has taken its share of rest",
      },
      evidences: [
        {
          kind: "athar",
          text: {
            ar: "سأل أبو موسى الأشعري معاذ بن جبل: فكيفَ تَقرَأُ أنتَ يا مُعاذُ؟ فقال: أنامُ أوَّلَ اللَّيلِ، فأقومُ وقد قَضَيتُ جُزئي مِنَ النَّومِ، فأقرَأُ ما كَتَبَ اللهُ لي، فأحتَسِبُ نَومَتي كما أحتَسِبُ قَومَتي.",
            en: "Abu Musa al-Ash‘ari asked Mu‘adh ibn Jabal: How do you recite, O Mu‘adh? He said: I sleep at the beginning of the night, then I rise having taken my share of sleep, and I recite what Allah has written for me. I hope for reward for my sleep just as I hope for reward for my standing in prayer.",
          },
          source: {
            ar: "رواه البخاري في صحيحه من حديث أبي موسى الأشعري رضي الله عنه",
            en: "Narrated by al-Bukhari in his Sahih from the hadith of Abu Musa al-Ash‘ari (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "sleep-sunnah-acts",
      title: {
        ar: "امتثال سنن النوم الثابتة عن النبي صلى الله عليه وسلم، كالوضوء قبل النوم وتعاهد الفراش بنفضه والاضطجاع على الشق الأيمن والإتيان بأذكار النوم إلى غير ذلك من أذكار النوم؛ فإن هذه السنن لا يمكن أداؤها إلا عند النوم!",
        en: "Practicing the established sleep Sunnahs of the Prophet ﷺ — such as ablution before sleep, dusting the bed, lying on the right side, and saying the sleep remembrances — for these Sunnahs can only be performed when one sleeps!",
      },
      evidences: [],
    },
  ],
};
