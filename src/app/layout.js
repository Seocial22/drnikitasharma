import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import './globals.css';
import Script from 'next/script';
import FloatingContact from '@/components/FloatingContact';

export const metadata = {
  metadataBase: new URL('https://drnikitasharma.in'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4g0i-WJ-8wGxGEoToql3r66Q5em7W_x9H26Vl_NEnIQ" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5JWJXL7WNE"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5JWJXL7WNE');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
