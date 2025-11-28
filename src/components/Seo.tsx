import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export default function Seo({
  title = "Wisal - WhatsApp AI Receptionist for Oman Clinics",
  description = "Automate your clinic WhatsApp with Wisal AI receptionist. Arabic-first, 24/7 patient messaging, appointment booking, and staff-freeing automation.",
  keywords = "WhatsApp AI, Clinic Automation, Oman, GCC, Arabic AI, Healthcare AI, Patient Messaging",
  url = "https://wisal.om",
  image = "https://wisal.om/og-image.png",
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
