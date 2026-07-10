import type { IntentionCategory } from "./types";

export const workCategory: IntentionCategory = {
  id: "work",
  slug: "work",
  title: {
    ar: "نوايا العمل",
    en: "Work Intentions",
  },
  description: {
    ar: "نوايا شرعية للعمل والكسب الحلال والنفقة والصدقة والاستغناء عن الناس.",
    en: "Islamic intentions for work: lawful earning, providing for family, charity, and independence from people.",
  },
  intentions: [
    {
      id: "work-lawful-earning",
      title: {
        ar: "الكسب من الحلال والأكل من الطيب والكفاية والاستغناء عن الناس",
        en: "Earning from the lawful, eating from what is wholesome, sufficiency, and independence from people",
      },
      evidences: [],
      children: [
        {
          id: "work-carry-wood",
          title: {
            ar: "التحريض على الأكل من عمل اليد والاكتساب من المباحات",
            en: "Encouragement to eat from the work of one’s own hands and to earn from what is permissible",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "لَأن يَحتَطِبَ أحَدُكُم حُزمةً على ظَهرِه خَيرٌ له مِن أن يَسألَ أحَدًا فيُعطيَه أو يَمنَعَه.",
                en: "That one of you should gather a bundle of firewood on his back is better for him than asking someone who may give him or refuse him.",
              },
              source: {
                ar: "رواه البخاري في صحيحه من حديث أبي هريرة رضي الله عنه",
                en: "Narrated by al-Bukhari in his Sahih from the hadith of Abu Hurayrah (may Allah be pleased with him)",
              },
            },
            {
              kind: "scholar",
              text: {
                ar: "وفيه التحريض على الأكل من عمل يده، والاكتساب من المباحات.",
                en: "It contains encouragement to eat from the work of one’s hands and to earn from what is permissible.",
              },
              source: {
                ar: "عمدة القاري للعيني",
                en: "‘Umdat al-Qari by al-‘Ayni",
              },
            },
          ],
        },
        {
          id: "work-seek-beautifully",
          title: {
            ar: "اتقوا الله وأجملوا في الطلب",
            en: "Fear Allah and seek provision in a fine manner",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "أيُّها النّاسُ اتَّقوا اللَّهَ وأجملوا في الطَّلبِ فإنَّ نفسًا لن تموتَ حتّى تستوفيَ رزقَها وإن أبطأَ عنْها فاتَّقوا اللَّهَ وأجملوا في الطَّلبِ خذوا ما حلَّ ودعوا ما حَرُمَ",
                en: "O people, fear Allah and seek provision in a fine manner, for a soul will not die until it has received its provision in full, even if it is delayed. So fear Allah and seek in a fine manner: take what is lawful and leave what is forbidden.",
              },
              source: {
                ar: "رواه ابن ماجه في سننه من حديث جابر بن عبدالله رضي الله عنه",
                en: "Narrated by Ibn Majah in his Sunan from the hadith of Jabir ibn Abdullah (may Allah be pleased with them)",
              },
            },
          ],
        },
        {
          id: "work-hand-labor",
          title: {
            ar: "خير الطعام ما أكل من عمل اليد",
            en: "The best food is what one eats from the work of one’s hands",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "ما أكل أحد طعاما قط، خيرا من أن يأكل من عمل يده، وإن نبي الله داود عليه السلام كان يأكل من عمل يده.",
                en: "No one has ever eaten food better than that which he eats from the work of his hands. And the Prophet of Allah Dawud (peace be upon him) used to eat from the work of his hands.",
              },
              source: {
                ar: "رواه البخاري في صحيحه من حديث المقدام رضي الله عنه",
                en: "Narrated by al-Bukhari in his Sahih from the hadith of al-Miqdam (may Allah be pleased with him)",
              },
            },
          ],
        },
        {
          id: "work-purest-earning",
          title: {
            ar: "أطيب الكسب كسب الرجل من عمله",
            en: "The purest earning is a man’s earning from his own work",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "إنَّ أطيَبَ ما أكَلَ الرَّجلُ مِن كَسْبِه..",
                en: "The purest of what a man eats is from his own earning…",
              },
              source: {
                ar: "رواه النسائي وأبو داود والترمذي من حديث عائشة رضي الله عنها",
                en: "Narrated by an-Nasa’i, Abu Dawud, and at-Tirmidhi from the hadith of Aishah (may Allah be pleased with her)",
              },
            },
          ],
        },
      ],
    },
    {
      id: "work-kinship-rights",
      title: {
        ar: "استخدام المال في صلة الرحم وأداء حق الله فيه",
        en: "Using wealth to uphold kinship ties and fulfill Allah’s right in it",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "إنما الدنيا لأربعةِ نَفَرٍ: عبدٌ رزقه اللهُ مالًا وعلمًا فهو يَتَّقِي في مالِه ربَّه، ويَصِلُ فيه رَحِمَه، ويعلمُ للهِ فيه حقًّا، فهذا بأحسنِ المنازلِ عند اللهِ..",
            en: "This world is only for four kinds of people: a servant whom Allah has given wealth and knowledge, so he fears his Lord regarding his wealth, upholds kinship with it, and knows Allah’s right in it — this one is in the best rank with Allah…",
          },
          source: {
            ar: "رواه أحمد والترمذي من حديث أبي كبشة الأنماري رضي الله عنه",
            en: "Narrated by Ahmad and at-Tirmidhi from the hadith of Abu Kabshah al-Anmari (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "work-provide-family",
      title: {
        ar: "الإنفاق على أهلك وعيالك وغير ذلك",
        en: "Spending on your family, dependents, and the like",
      },
      evidences: [],
      children: [
        {
          id: "work-neglect-sin",
          title: {
            ar: "كفى بالمرء إثماً أن يضيّع من يقوت",
            en: "It is enough sin for a person to neglect those he is responsible to feed",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "كفى بالمرء إثما أن يضيِّع من يقوت",
                en: "It is enough sin for a person that he neglects those whom he is responsible to feed.",
              },
              source: {
                ar: "رواه أحمد في مسنده من حديث جابر رضي الله عنه",
                en: "Narrated by Ahmad in his Musnad from the hadith of Jabir (may Allah be pleased with him)",
              },
            },
          ],
        },
        {
          id: "work-intention-protect",
          title: {
            ar: "من النية صيانة العيال",
            en: "Protecting one’s dependents is itself part of intention",
          },
          evidences: [
            {
              kind: "athar",
              text: {
                ar: "قال المروذي لأحمد بن حنبل: إن رجلاً قال: لا أكسب حتى تصح لي النية، وله عيال، فقال أحمد: إِذَا كَانَ يَجِبُ عَلَيْهِ أَنْ يُعِفَّهُمْ فَمِنَ النِّيَّةِ صِيَانَتُهُمْ",
                en: "Al-Marwadhi said to Ahmad ibn Hanbal: A man said, ‘I will not earn until my intention is sound,’ and he had dependents. Ahmad replied: If he is obligated to protect their chastity and needs, then safeguarding them is part of intention.",
              },
              source: {
                ar: "كتاب الحث على التجارة للخلال",
                en: "Kitab al-Hathth ‘ala al-Tijarah by al-Khallal",
              },
            },
          ],
        },
      ],
    },
    {
      id: "work-charity",
      title: {
        ar: "استخدام المال في الصدقات ووجوه الخير عموماً",
        en: "Using wealth in charity and avenues of good in general",
      },
      evidences: [],
      children: [
        {
          id: "work-spend-in-truth",
          title: {
            ar: "أن تكون ممن سُلّط على هلكة ماله في الحق",
            en: "To be among those empowered to spend their wealth in what is right",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "لا حَسَدَ إلَّا في اثنَتَينِ: رَجُلٌ آتاه اللهُ مالًا فسُلِّطَ على هَلَكَتِه في الحَقِّ…",
                en: "There is no envy except in two: a man whom Allah has given wealth and empowered to spend it in what is right…",
              },
              source: {
                ar: "رواه البخاري في صحيحه من حديث عبدالله بن مسعود رضي الله عنه",
                en: "Narrated by al-Bukhari in his Sahih from the hadith of Abdullah ibn Mas‘ud (may Allah be pleased with him)",
              },
            },
            {
              kind: "note",
              text: {
                ar: "فتنوي أن تكون منهم",
                en: "Intend to be among them.",
              },
              source: {
                ar: "",
                en: "",
              },
            },
          ],
        },
        {
          id: "work-righteous-wealth",
          title: {
            ar: "نعم المال الصالح للمرء الصالح",
            en: "How excellent is righteous wealth for a righteous person",
          },
          evidences: [
            {
              kind: "hadith",
              text: {
                ar: "نِعْمَ المالُ الصَّالحُ للمَرءِ الصَّالحِ.",
                en: "How excellent is righteous wealth for a righteous person.",
              },
              source: {
                ar: "رواه البخاري في الأدب المفرد من حديث عمرو بن العاص رضي الله عنه",
                en: "Narrated by al-Bukhari in al-Adab al-Mufrad from the hadith of Amr ibn al-As (may Allah be pleased with him)",
              },
            },
          ],
        },
        {
          id: "work-aid-religion",
          title: {
            ar: "الاستعانة بالمال على أمور الدين، كالزواج والنفقة على الأهل وغيره مما يقرّبك إلى الله عز وجل",
            en: "Using wealth as an aid in matters of religion — such as marriage, providing for family, and other things that draw you nearer to Allah",
          },
          evidences: [
            {
              kind: "athar",
              text: {
                ar: "قال أبو إسحاق السبيعي: كانوا يرون السعة عونًا على الدين",
                en: "Abu Ishaq as-Sabi‘i said: They used to regard ease of means as an aid to the religion.",
              },
              source: {
                ar: "رواه أحمد في العلل ومعرفة الرجال",
                en: "Narrated by Ahmad in al-‘Ilal wa Ma‘rifat al-Rijal",
              },
            },
            {
              kind: "athar",
              text: {
                ar: "قال محمد بن المنكدر: نعم العون على التقوى الغنى",
                en: "Muhammad ibn al-Munkadir said: How excellent an aid to piety is wealth.",
              },
              source: {
                ar: "رواه البغوي في مسند ابن الجعد",
                en: "Narrated by al-Baghawi in Musnad Ibn al-Ja‘d",
              },
            },
            {
              kind: "athar",
              text: {
                ar: "قال سفيان الثوري: المال في زماننا هذا سلاح المؤمن",
                en: "Sufyan ath-Thawri said: Wealth in our time is the weapon of the believer.",
              },
              source: {
                ar: "رواه ابن أبي الدنيا في إصلاح المال",
                en: "Narrated by Ibn Abi al-Dunya in Islah al-Mal",
              },
            },
            {
              kind: "athar",
              text: {
                ar: "قال سعيد بن المسيب: لا خير فيمن لا يطلب المال فيقي به دينه، ويصون به عرضه، ويقضي به ذمامه، وإن مات تركه ميراثًا لمن بعده",
                en: "Sa‘id ibn al-Musayyib said: There is no good in one who does not seek wealth to protect his religion with it, safeguard his honor with it, fulfill his obligations with it, and if he dies leave it as inheritance for those after him.",
              },
              source: {
                ar: "رواه ابن أبي الدنيا في إصلاح المال",
                en: "Narrated by Ibn Abi al-Dunya in Islah al-Mal",
              },
            },
          ],
        },
      ],
    },
    {
      id: "work-inheritance",
      title: {
        ar: "تركه ميراثاً لمن وراءك",
        en: "Leaving it as inheritance for those after you",
      },
      evidences: [
        {
          kind: "hadith",
          text: {
            ar: "أن تَدَعَ ورَثَتَكَ أغنياءَ خَيرٌ مِن أن تَذَرَهم عالةً يَتَكَفَّفونَ النَّاسَ، ولَن تُنفِقَ نَفَقةً تَبتَغي بها وجهَ اللهِ إلَّا أُجِرتَ عليها، حتَّى ما تَجعَلُ في في امرَأتِكَ.",
            en: "That you leave your heirs wealthy is better than leaving them dependent, begging from people. And you will not spend any spending seeking Allah’s Face except that you are rewarded for it — even what you put in your wife’s mouth.",
          },
          source: {
            ar: "رواه البخاري في صحيحه من حديث سعد بن أبي وقاص رضي الله عنه",
            en: "Narrated by al-Bukhari in his Sahih from the hadith of Sa‘d ibn Abi Waqqas (may Allah be pleased with him)",
          },
        },
      ],
    },
    {
      id: "work-not-dependent",
      title: {
        ar: "ألا تكون عالة على أهلك أو على المسلمين",
        en: "Not to be a burden upon your family or upon the Muslims",
      },
      evidences: [
        {
          kind: "athar",
          text: {
            ar: "كان سفيان الثوري يمر بنا ونحن جلوس في المسجد الحرام فيقول: ما يجلسكم؟ فنقول: فما نصنع؟ فيقول: اطْلُبُوا مِنْ فَضْلِ اللَّهِ، وَلَا تَكُونُوا عِيَالًا عَلَى الْمُسْلِمِينَ",
            en: "Sufyan ath-Thawri would pass by us while we sat in the Sacred Mosque and say, ‘What keeps you sitting?’ We would say, ‘What should we do?’ He would say: Seek from the bounty of Allah, and do not be dependents upon the Muslims.",
          },
          source: {
            ar: "عن محمد بن ثور عن سفيان الثوري رحمه الله",
            en: "From Muhammad ibn Thawr, from Sufyan ath-Thawri (may Allah have mercy on him)",
          },
        },
      ],
    },
  ],
};
