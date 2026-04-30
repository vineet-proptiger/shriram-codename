import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'Shriram Codename Pudhiya Chennai | 1, 2 & 3 BHK Apartments — Thirumazhisai',
  description: 'Shriram Codename Pudhiya — Premium 1, 2 & 3 BHK Apartments at Thirumazhisai, Chennai. Starting ₹32 Lakhs*. 8.9 Acres, 7 Towers, 1053 Apartments, 75% Open Space. Enquire Now.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://projects.proptiger.com/shriram-codename-pudhiya/"
              },
              "headline": "Shriram Codename Pudhiya | 1, 2 & 3 BHK Apartments — Thirumazhisai, Chennai",
              "description": "Shriram Codename Pudhiya — Premium 1, 2 & 3 BHK Apartments at Thirumazhisai near Poonamallee, Chennai. Starting ₹32 Lakhs*.",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.proptiger.com/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": { "@type": "ImageObject", "url": "https://www.proptiger.com/" }
              },
              "datePublished": "2026-04-30"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
