import { Khand, Mukta } from "next/font/google";
import "./globals.css";

const khand = Khand({
  subsets: ["latin", "devanagari"],
  weight: ["500", "600", "700"],
  variable: "--display",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600"],
  variable: "--body",
  display: "swap",
});

const url = "https://nabindhamala.com";

export const metadata = {
  metadataBase: new URL(url),
  title: "Nabin Dhamala — Journalist, Founder of Public Relation Nepal, Chairman of Sarun Media",
  description:
    "Nabin Dhamala is a Nepali journalist and entrepreneur, MD & founder of Public Relation Nepal, chairman of Sarun Media and editor of onlinesarokar.com. Campaign strategist and media counsel to former chief ministers, mayors and institutions.",
  openGraph: {
    type: "profile",
    title: "Nabin Dhamala",
    description: "Journalist. Founder, Public Relation Nepal. Chairman, Sarun Media.",
    images: ["/nabin.jpg"],
    locale: "en_NP",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23101a24'/><text x='16' y='23' font-family='sans-serif' font-size='18' font-weight='700' fill='%23c8102e' text-anchor='middle'>N</text></svg>",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nabin Dhamala",
  alternateName: "नबिन धमला",
  jobTitle: "Managing Director & Founder",
  email: "nabindhamala@publicrelationnepal.com",
  telephone: "+977-985-107-5588",
  address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  worksFor: {
    "@type": "Organization",
    name: "Public Relation Nepal",
    url: "https://publicrelationnepal.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${khand.variable} ${mukta.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
