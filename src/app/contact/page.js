import ContactUsSection from "@/components/ContactUsSection";


export const metadata = {
  title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma",
  description: "Book an appointment with Dr. Nikita Sharma (B.D.S., M.D.S., Pedodontist) at Nivik Smile Care, Ajmer. Clinic addresses, phone numbers, and contact form for pediatric and general dental care.",
  keywords: [
    "dentist contact Ajmer",
    "pediatric dentist appointment",
    "child dental clinic contact",
    "Dr. Nikita Sharma contact",
    "Nivik Smile Care address",
    "kids dentist phone number",
    "dental clinic hours Ajmer",
    "emergency dentist contact",
    "book dental appointment Ajmer",
    "child tooth specialist contact",
    "dental clinic near me",
    "dentist email contact",
    "Paras Hospital dental contact",
    "Panchsheel dental clinic",
    "best dentist contact in Ajmer"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/contact',
  },
  openGraph: {
    title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma | Nivik Smile Care",
    description: "Get in touch with pediatric dental specialist Dr. Nikita Sharma at Nivik Smile Care, Ajmer. Clinic locations, contact details and appointment booking.",
    url: 'https://drnikitasharma.in/contact',
    siteName: 'Nivik Smile Care - Pediatric Dental Specialists',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Nikita Sharma - Best Kids Dentist in Ajmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Best Kids Dentist in Ajmer - Dr Nikita Sharma",
    description: "Book appointments with Ajmer's leading pediatric dentist at Nivik Smile Care. Clinic addresses and contact information.",
    images: ['/contact-twitter-image.jpg'],
  },
};



export default function Contact() {
  return (
    <>
     
      <div>
        <h1 className="hidden">Best Dentist in Ajmer - Dr Nikita Sharma</h1>
        <ContactUsSection/>
      </div>
    </>
  );
}