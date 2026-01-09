import ServicesPage from "@/components/ServicesPage";


export const metadata = {
  title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma",
  description: "Comprehensive dental services for children and adults in Ajmer. Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) offers pediatric dentistry, general treatments, implants, and cosmetic procedures.",
  keywords: [
    "pediatric dentist Ajmer",
    "general dentist Ajmer",
    "child dental services",
    "teeth cleaning Ajmer", 
    "dental fillings for kids",
    "root canal treatment Ajmer",
    "dental crowns for children",
    "tooth extraction Ajmer",
    "braces for kids Ajmer",
    "teeth whitening Ajmer",
    "dental implants Ajmer",
    "gum treatment Ajmer",
    "child oral health",
    "family dentist near me",
    "emergency dental care Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/services',
  },
  openGraph: {
    title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Complete dental solutions for all ages - from pediatric care to advanced general dentistry services in Ajmer by Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist).",
    url: 'https://drnikitasharma.in/services',
    siteName: 'Nivik Smile Care - Complete Dental Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/dental-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nikita Sharma - Child & General Dentistry Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Expert Child & General Dentist in Ajmer - Dr Nikita Sharma",
    description: "Your family's complete dental care solution - pediatric to general dentistry services in Ajmer.",
    images: ['/dental-services-twitter.jpg'],
  },
};


export default function Services() {
  return (
    <>
     
      <div>
        <ServicesPage/>
      </div>
    </>
  );
}