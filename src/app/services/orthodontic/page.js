import OrthodonticServicesPage from "@/components/OrthodonticServicesPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Orthodontic Treatment in Ajmer - Braces & Aligners by Dr. Nikita Sharma",
  description: "Expert orthodontic care including metal braces, ceramic braces, and invisible aligners for children and adults in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "orthodontist in Ajmer",
    "braces treatment Ajmer",
    "invisible aligners Ajmer",
    "teeth straightening Ajmer",
    "metal braces cost",
    "ceramic braces Ajmer",
    "child orthodontics",
    "adult braces treatment",
    "best orthodontist Ajmer",
    "clear aligners near me",
    "bite correction Ajmer",
    "overbite treatment",
    "underbite correction",
    "crowded teeth solution",
    "orthodontic consultation"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/orthodontic',
  },
  openGraph: {
    title: "Orthodontic Treatment in Ajmer - Braces & Aligners by Dr. Nikita Sharma",
    description: "Professional orthodontic solutions including traditional braces and modern aligner systems in Ajmer.",
    url: 'https://drnikitasharma.in/services/orthodontic',
    siteName: 'Nivik Smile Care - Orthodontics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/orthodontic-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Orthodontic Treatment Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orthodontic Treatment in Ajmer - Braces & Aligners",
    description: "Transform your smile with expert orthodontic care from Dr. Nikita Sharma in Ajmer.",
    images: ['/orthodontic-twitter.jpg'],
  },
};



export default function OrthodonticPage() {
  return (
    <>
     
      <div>
        <OrthodonticServicesPage/>
      </div>
    </>
  );
}