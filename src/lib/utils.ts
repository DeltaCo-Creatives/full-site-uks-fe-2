import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function youtubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{6,})/);
  return match ? match[1] : null;
}
