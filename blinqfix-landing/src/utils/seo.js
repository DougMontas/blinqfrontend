const DEFAULT_SOCIAL_IMAGE = "https://www.blinqfix.com/blinqfix_logo1.jpeg";
const DEFAULT_SITE_NAME = "BlinqFix";

function upsertHeadTag(selector, tagName, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      el.setAttribute(key, value);
    }
  });

  return el;
}

function applySchemaEntries(schemaEntries) {
  const schemaIds = [];

  schemaEntries.forEach(({ id, data }) => {
    if (!id || !data) return;

    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
    schemaIds.push(id);
  });

  return schemaIds;
}

export function applyPageSeo({
  title,
  description,
  canonical,
  robots = "index, follow",
  keywords,
  og = {},
  twitter = {},
  schema = [],
}) {
  if (typeof document === "undefined") {
    return () => {};
  }

  if (title) {
    document.title = title;
  }

  if (description) {
    upsertHeadTag('meta[name="description"]', "meta", {
      name: "description",
      content: description,
    });
  }

  if (robots) {
    upsertHeadTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: robots,
    });
  }

  if (keywords) {
    upsertHeadTag('meta[name="keywords"]', "meta", {
      name: "keywords",
      content: keywords,
    });
  }

  if (canonical) {
    upsertHeadTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonical,
    });
  }

  const ogTitle = og.title ?? title;
  const ogDescription = og.description ?? description;
  const ogUrl = og.url ?? canonical;
  const ogImage = og.image ?? DEFAULT_SOCIAL_IMAGE;
  const ogImageAlt =
    og.imageAlt ??
    "BlinqFix home services marketplace with emergency booking and live tracking";

  upsertHeadTag('meta[property="og:type"]', "meta", {
    property: "og:type",
    content: og.type ?? "website",
  });
  upsertHeadTag('meta[property="og:site_name"]', "meta", {
    property: "og:site_name",
    content: DEFAULT_SITE_NAME,
  });
  upsertHeadTag('meta[property="og:title"]', "meta", {
    property: "og:title",
    content: ogTitle,
  });
  upsertHeadTag('meta[property="og:description"]', "meta", {
    property: "og:description",
    content: ogDescription,
  });
  if (ogUrl) {
    upsertHeadTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: ogUrl,
    });
  }
  upsertHeadTag('meta[property="og:image"]', "meta", {
    property: "og:image",
    content: ogImage,
  });
  upsertHeadTag('meta[property="og:image:alt"]', "meta", {
    property: "og:image:alt",
    content: ogImageAlt,
  });

  const twitterTitle = twitter.title ?? ogTitle;
  const twitterDescription = twitter.description ?? ogDescription;
  const twitterImage = twitter.image ?? ogImage;

  upsertHeadTag('meta[name="twitter:card"]', "meta", {
    name: "twitter:card",
    content: twitter.card ?? "summary_large_image",
  });
  upsertHeadTag('meta[name="twitter:title"]', "meta", {
    name: "twitter:title",
    content: twitterTitle,
  });
  upsertHeadTag('meta[name="twitter:description"]', "meta", {
    name: "twitter:description",
    content: twitterDescription,
  });
  upsertHeadTag('meta[name="twitter:image"]', "meta", {
    name: "twitter:image",
    content: twitterImage,
  });

  const schemaIds = applySchemaEntries(schema);

  return () => {
    schemaIds.forEach((id) => document.getElementById(id)?.remove());
  };
}
