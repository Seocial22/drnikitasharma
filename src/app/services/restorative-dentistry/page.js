import RestorativeDentistryPage from "@/components/RestorativeDentistryPage";
import Head from 'next/head';

export const metadata = {
  title: "Best Restorative Dentistry in Ajmer | Tooth Repair & Replacement | Dr. Nikita Sharma",
  description: "Comprehensive restorative dental treatments including fillings, crowns, bridges, and dentures in Ajmer. Expert care by Dr. Nikita Sharma (B.D.S., M.D.S.) to restore function and aesthetics.",
  keywords: [
    "restorative dentist Ajmer",
    "dental fillings Ajmer",
    "tooth crowns near me",
    "dental bridges cost",
    "tooth replacement options",
    "broken tooth repair",
    "dental inlays and onlays",
    "tooth colored fillings",
    "best crowns specialist Ajmer",
    "partial dentures Ajmer",
    "full mouth rehabilitation",
    "dental restoration cost",
    "ceramic crowns Ajmer",
    "tooth decay treatment",
    "dental implant crowns"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/restorative-dentistry',
  },
  openGraph: {
    title: "Restorative Dentistry in Ajmer | Repair Damaged Teeth",
    description: "Advanced solutions for tooth repair and replacement to restore your smile's function and appearance.",
    url: 'https://drnikitasharma.in/services/restorative-dentistry',
    siteName: 'Nivik Smile Care - Restorative Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/restorative-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Restorative Dental Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Restorative Dentistry in Ajmer | Smile Restoration",
    description: "Expert tooth repair and replacement solutions from Dr. Nikita Sharma in Ajmer.",
    images: ['/restorative-dentistry-twitter.jpg'],
  },
};



export default function RestorativeDentistry() {
  return (
    <>
  
      <div>
        <RestorativeDentistryPage/>
      </div>
    </>
  );
}