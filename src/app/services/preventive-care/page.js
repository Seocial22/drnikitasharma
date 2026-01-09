import PreventiveCarePage from "@/components/PreventiveCarePage";

export const metadata = {
  title: "Best Preventive Dental Care in Ajmer - Complete Oral Health Solutions | Dr. Nikita Sharma",
  description: "Professional preventive dental care including cleanings, fluoride treatments, sealants, and oral health education for all ages in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "preventive dentistry Ajmer",
    "dental cleaning Ajmer",
    "fluoride treatment near me",
    "dental sealants for children",
    "oral health education",
    "scaling and polishing",
    "periodontal care Ajmer",
    "cavity prevention",
    "best dentist for kids Ajmer",
    "oral hygiene maintenance",
    "dental checkup cost",
    "teeth cleaning price",
    "gum disease prevention",
    "plaque removal treatment",
    "oral prophylaxis specialist"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/preventive-care',
  },
  openGraph: {
    title: "Preventive Dental Care in Ajmer - Complete Oral Health Solutions",
    description: "Comprehensive preventive dental services to maintain optimal oral health for your entire family in Ajmer.",
    url: 'https://drnikitasharma.in/services/preventive-care',
    siteName: 'Nivik Smile Care - Preventive Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/preventive-care-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Preventive Dental Care Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Preventive Dental Care in Ajmer - Healthy Smiles for Life",
    description: "Protect your smile with expert preventive dental care from Dr. Nikita Sharma in Ajmer.",
    images: ['/preventive-care-twitter.jpg'],
  },
};



export default function PreventiveCare() {
  return (
    <>
     
      <div>
        <PreventiveCarePage/>
      </div>
    </>
  );
}