import CosmeticDentistryPage from "@/components/CosmeticDentistryPage";


export const metadata = {
  title: "Best Cosmetic Dentistry in Ajmer - Dr. Nikita Sharma",
  description: "Transform your smile with expert cosmetic dentistry services in Ajmer - teeth whitening, veneers, dental crowns, and smile makeovers by Dr. Nikita Sharma (B.D.S., M.D.S.).",
  keywords: [
    "cosmetic dentist Ajmer",
    "smile makeover Ajmer",
    "teeth whitening Ajmer",
    "dental veneers Ajmer",
    "Hollywood smile treatment",
    "dental crowns Ajmer",
    "tooth colored fillings",
    "gum contouring Ajmer",
    "dental bonding Ajmer",
    "celebrity smile makeover",
    "best cosmetic dentist Ajmer",
    "painless smile design",
    "instant teeth whitening",
    "porcelain veneers cost",
    "cosmetic dental clinic"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services/cosmetic-dentistry',
  },
  openGraph: {
    title: "Cosmetic Dentistry in Ajmer - Smile Makeovers by Dr. Nikita Sharma",
    description: "Professional cosmetic dental treatments including teeth whitening, veneers and smile design in Ajmer.",
    url: 'https://drnikitasharma.in/services/cosmetic-dentistry',
    siteName: 'Nivik Smile Care - Cosmetic Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/cosmetic-dentistry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosmetic Dentistry Services in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cosmetic Dentistry in Ajmer - Smile Makeovers",
    description: "Achieve your dream smile with professional cosmetic dental treatments by Dr. Nikita Sharma.",
    images: ['/cosmetic-dentistry-twitter.jpg'],
  },
};

// JSON-LD structured data for Cosmetic Dentistry page


export default function CosmeticDentistry() {
  return (
    <>
     
      <div>
        <CosmeticDentistryPage/>
      </div>
    </>
  );
}