import fs from 'fs';
import path from 'path';
import ClientBlogPage from './ClientBlogPage.jsx';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: "Dental Health Blog - Expert Advice by Dr. Nikita Sharma ",
  description: "Read informative articles on pediatric dentistry, oral health tips, and dental care guidance by Dr. Nikita Sharma (B.D.S., M.D.S.), Ajmer's leading child dental specialist.",
  keywords: [
    "pediatric dental blog",
    "child oral health tips",
    "dentist blog Ajmer",
    "kids dental care articles",
    "tooth care for children",
    "dental health education",
    "parenting dental tips",
    "preventive dentistry blog",
    "Dr. Nikita Sharma articles",
    "Nivik Smile Care blog",
    "baby teeth care guide",
    "braces information for parents",
    "dental problems in children",
    "Ajmer dentist advice",
    "oral hygiene for kids"
  ].join(", "),
  authors: [{ name: "Dr. Nikita Sharma" }],
  metadataBase: new URL('https://drnikitasharma.in'),
  alternates: {
    canonical: 'https://drnikitasharma.in/blog',
  },
  openGraph: {
    title: "Dental Health Blog - Expert Advice by Dr. Nikita Sharma | Nivik Smile Care",
    description: "Educational articles on pediatric dentistry and oral health by Ajmer's leading child dental specialist.",
    url: 'https://drnikitasharma.in/blog',
    siteName: 'Nivik Smile Care - Dental Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Health Blog by Dr. Nikita Sharma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Health Blog - Expert Advice by Dr. Nikita Sharma",
    description: "Pediatric dentistry insights and oral health guidance from Ajmer's top child dental specialist.",
    images: ['/blog-twitter-image.jpg'],
  },
   robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for Blog page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Blog", "MedicalWebPage"],
  "name": "Nivik Smile Care Dental Blog",
  "description": "Educational articles on pediatric dentistry and oral health",
  "url": "https://drnikitasharma.in/blog",
  "inLanguage": "en-US",
  "publisher": {
    "@type": "Organization",
    "name": "Nivik Smile Care",
    "logo": {
      "@type": "ImageObject",
      "url": "https://drnikitasharma.in/logo.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Dr. Nikita Sharma",
    "honorificPrefix": "Dr.",
    "jobTitle": "Pedodontist & Child Dental Specialist",
    "hasCredential": ["B.D.S.", "M.D.S.", "Pedodontist Certification"]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drnikitasharma.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dental Health Blog"
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Pediatric Dentistry"
  },
  "mentions": [
    {"@type": "Thing", "name": "Child Oral Health"},
    {"@type": "Thing", "name": "Preventive Dentistry"},
    {"@type": "Thing", "name": "Dental Care for Children"}
  ]
};

export default function BlogPage() {
  const blogs = getBlogs();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientBlogPage blogs={blogs} />
    </>
  );
}