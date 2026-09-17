import { useEffect } from "react";
import { site } from "@/content/site";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title === site.name ? title : `${title} · ${site.name}`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
