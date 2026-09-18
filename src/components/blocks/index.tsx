import type { Block } from "@/content/types";
import { AdvocacyList } from "./AdvocacyList";
import { CardGrid } from "./CardGrid";
import { ContactBlock } from "./ContactBlock";
import { CtaBand } from "./CtaBand";
import { DocGrid } from "./DocGrid";
import { FocusGrid } from "./FocusGrid";
import { FocusTabs } from "./FocusTabs";
import { Hero } from "./Hero";
import { HeroSlider } from "./HeroSlider";
import { LinkGrid } from "./LinkGrid";
import { NewsList } from "./NewsList";
import { OrgStructure } from "./OrgStructure";
import { PartnerMarquee } from "./PartnerMarquee";
import { PartnerYearList } from "./PartnerYearList";
import { PillarAccordion } from "./PillarAccordion";
import { RichText } from "./RichText";
import { SectionAnchor } from "./SectionAnchor";
import { StatBand } from "./StatBand";
import { StrataJourney } from "./StrataJourney";
import { StrataRubric } from "./StrataRubric";
import { SupportTable } from "./SupportTable";
import { ThemeGroups } from "./ThemeGroups";
import { VideoGrid } from "./VideoGrid";

/**
 * The one place page routes need to touch. Given a list of blocks (from a
 * static file today, from a CMS API tomorrow) it renders each by type and
 * silently skips anything it doesn't recognise — an unknown or malformed
 * block can never take the rest of the page down with it.
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "hero":
            return <Hero key={i} block={block} />;
          case "heroSlider":
            return <HeroSlider key={i} block={block} />;
          case "statBand":
            return <StatBand key={i} block={block} />;
          case "richText":
            return <RichText key={i} block={block} />;
          case "cardGrid":
            return <CardGrid key={i} block={block} />;
          case "pillarAccordion":
            return <PillarAccordion key={i} block={block} />;
          case "strataJourney":
            return <StrataJourney key={i} block={block} />;
          case "orgStructure":
            return <OrgStructure key={i} block={block} />;
          case "strataRubric":
            return <StrataRubric key={i} block={block} />;
          case "focusGrid":
            return <FocusGrid key={i} block={block} />;
          case "focusTabs":
            return <FocusTabs key={i} block={block} />;
          case "advocacyList":
            return <AdvocacyList key={i} block={block} />;
          case "newsList":
            return <NewsList key={i} block={block} />;
          case "docGrid":
            return <DocGrid key={i} block={block} />;
          case "videoGrid":
            return <VideoGrid key={i} block={block} />;
          case "partnerMarquee":
            return <PartnerMarquee key={i} block={block} />;
          case "ctaBand":
            return <CtaBand key={i} block={block} />;
          case "linkGrid":
            return <LinkGrid key={i} block={block} />;
          case "contactBlock":
            return <ContactBlock key={i} block={block} />;
          case "anchor":
            return <SectionAnchor key={i} block={block} />;
          case "themeGroups":
            return <ThemeGroups key={i} block={block} />;
          case "partnerYearList":
            return <PartnerYearList key={i} block={block} />;
          case "supportTable":
            return <SupportTable key={i} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
