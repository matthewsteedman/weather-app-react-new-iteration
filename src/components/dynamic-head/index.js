import Head from "next/head";

const DynamicHead = ({
  title,
  description,
  og_meta_title,
  og_meta_description,
  website,
  og_image,
  og_url,
  ads,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
      <link
        rel='rel="apple-touch-icon"'
        href="/android-chrome-192x192.png"
        sizes="192x192"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={og_meta_description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={og_image} />
      <meta property="og:site_name" content="Weather app" />
      <meta property="og:locale" content="en_ZA" />
      <meta
        name="og:url"
        content={"https://main--weather-app-react-new-iteration.netlify.app"}
      />
    </Head>
  );
};

export default DynamicHead;
