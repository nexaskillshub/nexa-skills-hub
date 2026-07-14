import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
}

function setMeta(attr: "name" | "property", key: string, content?: string) {
  if (!content) return;
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/** Sets document title and meta tags for the current page (client-side SPA equivalent of route `head()`). */
export function Seo({ title, description, ogTitle, ogDescription }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
  }, [title, description, ogTitle, ogDescription]);

  return null;
}
