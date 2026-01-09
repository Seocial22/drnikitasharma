import GumPeriodontalPage from "@/components/GumPeriodontalPage";


export const metadata = {
  title: "Best Gum Disease Treatment in Ajmer | Periodontal Care by Dr. Nikita Sharma",
  description: "Expert diagnosis and treatment of gum diseases including gingivitis and periodontitis in Ajmer. Advanced periodontal therapies by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "gum disease treatment Ajmer",
    "periodontist in Ajmer",
    "gingivitis treatment",
    "periodontitis specialist",
    "gum recession treatment",
    "deep cleaning teeth Ajmer",
    "scaling and root planing",
    "laser gum treatment",
    "bleeding gums solution",
    "pocket reduction surgery",
    "gum infection treatment",
    "best gum specialist Ajmer",
    "halitosis treatment",
    "dental bone loss treatment",
    "gum flap surgery"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/gum-periodontal-treatment',
  },
  openGraph: {
    title: "Gum Disease Treatment in Ajmer | Advanced Periodontal Care",
    description: "Comprehensive solutions for gum diseases including non-surgical and surgical treatments in Ajmer.",
    url: 'https://drnikitasharma.in/services/gum-periodontal-treatment',
    siteName: 'Nivik Smile Care - Periodontics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/gum-treatment-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gum Disease Treatment Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gum Disease Treatment in Ajmer | Save Your Smile",
    description: "Expert periodontal treatments to restore gum health from Dr. Nikita Sharma in Ajmer.",
    images: ['/gum-treatment-twitter.jpg'],
  },
};


export default function GumPeriodontal() {
  return (
    <>
 
      <div>
        <GumPeriodontalPage/>
      </div>
    </>
  );
}