import { Award, Heart, Smile, Sparkles, Syringe, TreePine, type LucideIcon } from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Heart,
  Award,
  Syringe,
  Smile,
  TreePine,
};

/** Looks up an icon by the CMS-supplied string name; unknown names get a safe fallback instead of crashing. */
export function resolveIcon(name: string): LucideIcon {
  return registry[name] ?? Sparkles;
}
