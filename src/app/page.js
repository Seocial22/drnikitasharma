import DentalCareSection from "@/components/DentalCareSection";
import Hero from "../components/Hero";
import DentalServices from "@/components/DentalServices";
import DentalFAQ from "@/components/DentalFaq";
import PatientReviews from "@/components/PatientReviews";
import ServicesSlider from "@/components/ServiceSlider";
import DoctorProfile from "@/components/DoctorProfile";
import NewYearPopup from "@/components/NewYearPopup";

export const metadata = {
  title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
  description:
    "Dr. Nikita Sharma, M.D.S. Pedodontist - Expert dental care in Ajmer. Root canal, implants, teeth whitening & orthodontic services. Book appointment today!",
  keywords: [
    "best dentist in Ajmer",
    "Dr. Nikita Sharma",
    "dental clinic Ajmer",
    "root canal treatment Ajmer",
    "dental implants Ajmer",
    "teeth whitening Ajmer",
    "orthodontist Ajmer",
    "dental care Ajmer",
    "tooth extraction Ajmer",
    "dental surgery Ajmer",
    "pediatric dentist Ajmer",
    "cosmetic dentistry Ajmer",
    "dental checkup Ajmer",
    "oral health Ajmer",
    "dentist near me Ajmer",
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  creator: "Dr. Nikita Sharma",
  publisher: "Dr. Nikita Sharma Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drnikitasharma.in"),
  alternates: {
    canonical: "https://drnikitasharma.in/",
  },
  openGraph: {
    title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description:
      "Dr. Nikita Sharma, M.D.S. Pedodontist - Expert dental care in Ajmer. Root canal, implants, teeth whitening & orthodontic services. Book appointment today!",
    url: "https://drnikitasharma.in/",
    siteName: "Nivik Smile Care - Dr. Nikita Sharma",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Nikita Sharma - Best Dentist in Ajmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description:
      "Dr. Nikita Sharma, M.D.S. Pedodontist - Expert dental care in Ajmer. Root canal, implants, teeth whitening & orthodontic services.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Healthcare",
  classification: "Dental Services",
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Ajmer",
    "geo.position": "26.4499;74.6399",
    ICBM: "26.4499, 74.6399",
  },
};

// JSON-LD Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://drnikitasharma.in/#dentist",
      name: "Dr. Nikita Sharma",
      description:
        "Experienced Pedodontist providing comprehensive dental care in Ajmer",
      url: "https://drnikitasharma.in/",
      image: "https://drnikitasharma.in/og-image.jpg",
      telephone: "+91 79761 22545",
      email: "niviksmilecare@gmail.com",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "B.D.S.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "M.D.S. (PEDODONTIST)",
        },
      ],
      knowsAbout: [
        "Root Canal Treatment",
        "Dental Implants",
        "Teeth Whitening",
        "Orthodontic Services",
        "Pediatric Dentistry",
        "Cosmetic Dentistry",
        "Dental Surgery",
      ],
      sameAs: ["https://drnikitasharma.in/"],
      address: [
        {
          "@type": "PostalAddress",
          name: "Paras Urology & Multispeciality Hospital",
          streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Home Clinic",
          streetAddress: "B-455 Panchsheel, B Block",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      ],
      openingHours: ["Mo-Sa 10:00-12:00", "Mo-Sa 17:00-19:00"],
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Root Canal Treatment",
          description: "Endodontic treatment to save infected teeth",
        },
        {
          "@type": "MedicalProcedure",
          name: "Dental Implants",
          description: "Permanent tooth replacement solutions",
        },
        {
          "@type": "MedicalProcedure",
          name: "Teeth Whitening",
          description: "Professional teeth whitening services",
        },
        {
          "@type": "MedicalProcedure",
          name: "Orthodontic Treatment",
          description: "Teeth alignment and bite correction",
        },
        {
          "@type": "MedicalProcedure",
          name: "Pediatric Dentistry",
          description: "Specialized dental care for children",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://drnikitasharma.in/#business",
      name: "Nivik Smile Care",
      description:
        "Premier dental clinic in Ajmer providing comprehensive dental care services",
      url: "https://drnikitasharma.in/",
      telephone: "+91 79761 22545",
      email: "niviksmilecare@gmail.com",
      image: "https://drnikitasharma.in/og-image.jpg",
      priceRange: "$$",
      paymentAccepted: "Cash, Card, UPI",
      hasMap: "https://maps.google.com/?q=26.4499,74.6399",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.4499",
        longitude: "74.6399",
      },
      address: [
        {
          "@type": "PostalAddress",
          name: "Paras Urology & Multispeciality Hospital",
          streetAddress: "Haribhau Upadhyay Nagar, C-Block, Pushkar Road",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          postalCode: "305001",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Home Clinic",
          streetAddress: "B-455 Panchsheel, B Block",
          addressLocality: "Ajmer",
          addressRegion: "Rajasthan",
          postalCode: "305004",
          addressCountry: "IN",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "12:00",
          description: "Morning Session at Paras Hospital",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "17:00",
          closes: "19:00",
          description: "Evening Session at Home Clinic",
        },
      ],
      sameAs: ["https://drnikitasharma.in/"],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "26.4499",
          longitude: "74.6399",
        },
        geoRadius: "50000",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://drnikitasharma.in/#website",
      url: "https://drnikitasharma.in/",
      name: "Dr. Nikita Sharma - Best Dentist in Ajmer",
      description:
        "Official website of Dr. Nikita Sharma, leading dentist in Ajmer providing comprehensive dental care services",
      publisher: {
        "@id": "https://drnikitasharma.in/#dentist",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://drnikitasharma.in/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://drnikitasharma.in/#webpage",
      url: "https://drnikitasharma.in/",
      name: "Best Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
      isPartOf: {
        "@id": "https://drnikitasharma.in/#website",
      },
      about: {
        "@id": "https://drnikitasharma.in/#dentist",
      },
      description:
        "Dr. Nikita Sharma, M.D.S. Pedodontist - Expert dental care in Ajmer. Root canal, implants, teeth whitening & orthodontic services. Book appointment today!",
      breadcrumb: {
        "@id": "https://drnikitasharma.in/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://drnikitasharma.in/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://drnikitasharma.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://drnikitasharma.in/",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div>
        <Hero />
        <DoctorProfile />
        <DentalCareSection />
        <DentalServices />
        <DentalFAQ />
        <ServicesSlider />
        <PatientReviews />
        <NewYearPopup/>
      </div>
    </>
  );
}
