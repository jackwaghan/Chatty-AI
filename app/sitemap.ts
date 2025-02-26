import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chatty.jackwaghan.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://res.cloudinary.com/dqswovyzi/image/upload/v1740592387/Landing_page_zsgit4.png",
      ],
    },
  ];
}
