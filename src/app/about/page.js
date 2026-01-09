import AboutUsSection from "@/components/AboutUsSection";


export const metadata = {
  title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
  description: "Meet Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) - Ajmer's top child dental specialist at Nivik Smile Care. Expert in pediatric dentistry, general dentistry, and child dental care.",
  keywords: [
    "best kids dentist in Ajmer",
    "pediatric dentist Ajmer",
    "child dental specialist",
    "Dr. Nikita Sharma BDS MDS",
    "pedodontist Ajmer",
    "children's dentist near me",
    "kids dental care Ajmer",
    "child tooth specialist",
    "baby teeth doctor Ajmer",
    "pediatric dental clinic",
    "dental care for children",
    "child friendly dentist",
    "teeth doctor for kids",
    "Nivik Smile Care pedodontist",
    "Rajasthan children dentist"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/about',
  },
  openGraph: {
    title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) specializes in child dental care at Nivik Smile Care, offering gentle treatment for young patients in Ajmer.",
    url: 'https://drnikitasharma.in/about',
    siteName: 'Nivik Smile Care - Pediatric Dental Specialists',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/pediatric-dentist-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nikita Sharma - Best Kids Dentist in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Kids Dentist in Ajmer - Dr Nikita Sharma (BDS, MDS, Pedodontist)",
    description: "Pediatric dental specialist providing gentle, expert care for children at Nivik Smile Care, Ajmer.",
    images: ['/pediatric-dentist-twitter.jpg'],
  },
};


export default function About() {  
  return (
    <>
    
      <div>
        <AboutUsSection/>
      </div>
    </>
  );
}