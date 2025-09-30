import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
  jsonLd?: Record<string, any> | Record<string, any>[];
};

export default function SEO({
  title = "Impacta Ltd — Component Handling & Packaging Solutions",
  description = "British-made, built to last. Impacta designs, manufactures and repairs high-quality packaging and handling solutions in the UK.",
  canonical,
  image,
  noindex,
  keywords,
  jsonLd,
}: SEOProps) {
  const siteName = "Impacta Ltd";
  const url = canonical;
  const metaImage = image || "/impacta-site/impactawarehouse.JPEG";
  const keywordsStr = keywords?.join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsStr && <meta name="keywords" content={keywordsStr} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {metaImage && <meta property="og:image" content={metaImage} />}        

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      <meta name="theme-color" content="#044bab" />
      <link rel="icon" type="image/x-icon" href="/logo.ico" />
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((obj, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(obj)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )
      )}
    </Helmet>
  );
}
