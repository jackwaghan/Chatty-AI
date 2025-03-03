import type { Metadata } from "next";
import { SeoKeywords } from "./keywords";
import { DomainURL, ImageURL } from "./Url";

export const SeoMetadata: Metadata = {
  title: "Chatty AI",
  description:
    "Unlock the power of multiple AI models in one lightning-fast chat experience.",
  keywords: SeoKeywords,
  openGraph: {
    title: "Chatty AI",
    description:
      "Unlock the power of multiple AI models in one lightning-fast chat experience.",
    url: DomainURL,
    siteName: "Chatty AI",
    type: "website",
    images: [
      {
        url: ImageURL,
        width: 1905,
        height: 928,
        alt: "Chatty AI Image source",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatty AI",
    creator: "jackwaghan",
    site: DomainURL,
    description:
      "Unlock the power of multiple AI models in one lightning-fast chat experience.",
    images: [ImageURL],
  },
};
