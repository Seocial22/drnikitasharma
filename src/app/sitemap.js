// sitemap.js

export default function sitemap() {
  const baseUrl = "https://drnikitasharma.in";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/orthodontic`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/general-dentistry`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/cosmetic-dentistry`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/restorative-dentistry`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/preventive-care`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/gum-periodontal-treatment`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pediatric-dental-tips-ajmer-dentist`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/best-child-dentist-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/blog/best-pedodontist-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ blog/best-orthodontist-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/laser-dentistry-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/easy-dental-tips-for-kids-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/best-fluoride-treatment-for-kids-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/best-general-dentistry-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/why-regular-dental-checkups-are-important`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/common-dental-problems-and-how-to-prevent-them`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/importance-of-baby-teeth-early-oral-care`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/top-dental-problems-in-kids-solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/how-to-stop-thumb-sucking-habit-children`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/root-canal-treatment-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/common-dental-problems-in-children-prevention`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/blog/pediatric-dentistry-different-adult-dentistry-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/early-cavities-kids-stop-them-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/milk-bottle-tooth-decay-parents-guide-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/oral-hygiene-tips-toddlers-kids-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/thumb-sucking-effects-children-teeth-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/braces-aligners-differences-which-is-better-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/oral-hygiene-tips-healthy-teeth-gums-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/gum-disease-symptoms-stages-treatment-ajmer-dr-nikita-sharma`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/why-are-baby-teeth-important-milk-teeth-care`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/thumb-sucking-teeth-alignment-parents-guide-ajmer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/when-do-baby-teeth-start-coming-in`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/importance-regular-dental-checkups-healthy-teeth`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/tooth-decay-cavities-complete-guide-dentist`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/how-much-sugar-safe-children-teeth`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/how-much-toothpaste-should-kids-use`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
