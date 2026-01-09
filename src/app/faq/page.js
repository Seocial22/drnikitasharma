import FaqPage from "@/components/FaqPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Pediatric Dental Care - Expert Answers by Dr. Nikita Sharma",
  description: "Get answers to common questions about child dental care, treatments, and oral health from Ajmer's top pediatric dentist Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "pediatric dentist FAQs",
    "child dental questions",
    "kids teeth FAQ",
    "dental treatment queries",
    "baby teeth concerns",
    "braces questions Ajmer",
    "tooth decay in children",
    "dental emergency advice",
    "teething problems solutions",
    "child oral care tips",
    "dental procedures explained",
    "frequently asked dental questions",
    "Ajmer dentist answers",
    "Nivik Smile Care FAQs",
    "Dr. Nikita Sharma advice"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/faq',
  },
  openGraph: {
    title: "Best Pediatric Dental Care - FAQs - Expert Answers by Dr. Nikita Sharma",
    description: "Common questions about child dental care answered by Ajmer's leading pediatric dentist.",
    url: 'https://drnikitasharma.in/faq',
    siteName: 'Nivik Smile Care - Dental FAQs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/faq-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric Dental FAQs - Dr. Nikita Sharma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pediatric Dental FAQs - Expert Answers by Dr. Nikita Sharma",
    description: "Get expert answers to common child dental care questions from Ajmer's top pediatric dentist.",
    images: ['/faq-twitter-image.jpg'],
  },
};



export default function Faq() {
  return (
    <>
   
      <div>
        <h1 className="hidden">Best Dentist in Ajmer - Dr Nikita Sharma</h1>
        <FaqPage/>
      </div>
    </>
  );
}