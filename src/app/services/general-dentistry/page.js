import GeneralDentistryPage from "@/components/GeneralDentistryServicePage";
import Head from 'next/head';

export const metadata = {
  title: "Best General Dentistry in Ajmer - Complete Dental Care by Dr. Nikita Sharma",
  description: "Comprehensive general dental services in Ajmer including checkups, cleanings, fillings, root canals and extractions by experienced dentist Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "general dentist Ajmer",
    "dental checkup Ajmer",
    "teeth cleaning Ajmer",
    "tooth filling Ajmer",
    "root canal treatment Ajmer",
    "tooth extraction Ajmer",
    "cavity treatment Ajmer",
    "dental crown Ajmer",
    "gum treatment Ajmer",
    "oral health examination",
    "best general dentist Ajmer",
    "complete dental care",
    "family dentist near me",
    "painless dental treatment",
    "emergency dentist Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/general-dentistry',
  },
  openGraph: {
    title: "General Dentistry in Ajmer - Complete Dental Care by Dr. Nikita Sharma",
    description: "Professional general dental services including preventive care and treatments for all ages in Ajmer.",
    url: 'https://drnikitasharma.in/services/general-dentistry',
    siteName: 'Nivik Smile Care - General Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/general-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'General Dentistry Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "General Dentistry in Ajmer - Complete Dental Care",
    description: "Professional dental checkups, cleanings and treatments for the whole family in Ajmer.",
    images: ['/general-dentistry-twitter.jpg'],
  },
};


export default function GeneralDentistry() {
  return (
    <>
   
      <div>
        <GeneralDentistryPage/>
      </div>
    </>
  );
}