import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import ScriptMain from '../Sections/ScriptWritingSection/ScriptMain/ScriptMain'
import Navbar from '../Layouts/Navbar/Navbar'
import ScriptServices from '../Sections/ScriptWritingSection/ScriptServices/ScriptServices'
import ScriptwritingSection from '../Sections/ScriptWritingSection/ScriptWriting/ScriptWriting'
import MemoirStepsSection from '../Sections/MemoirWritingSection/MemoirWritingSteps/MemoirSteps'
import ScriptCTASection from '../Sections/ScriptWritingSection/ScriptCTASection/ScriptCTASection'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import { Search, PenTool, Lightbulb, FileCheck } from "lucide-react";

// Data for the scriptwriting steps
const scriptSteps = [
  {
    id: 1,
    icon: Search,
    title: "Outline & Concept",
    frontText:
      "Share your script ideas, concepts, and format preferences. We will craft a comprehensive outline and beat sheet.",
    backText:
      "We gather your character bios, settings, and main plot points, ensuring every detail of your script is planned out.",
  },
  {
    id: 2,
    icon: PenTool,
    title: "Drafting Scenes",
    frontText:
      "Our expert screenwriters draft your scenes, focusing on snappy dialogues, narrative pacing, and industry-standard formatting.",
    backText:
      "We format the script according to screenwriting guidelines (Courier Prime, sluglines, parentheticals) to ensure readability.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Review & Revisions",
    frontText:
      "We share drafts with you for feedback, refining scenes, character actions, and dialogue to meet your production standards.",
    backText:
      "Our team polishes action lines and dialogue flow, ensuring a high-impact screenplay that resonates with directors and actors.",
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Final Script Polish",
    frontText:
      "We perform table read proofreading, formatting adjustments, and structural final edits, preparing your script for production.",
    backText:
      "We deliver a production-ready screenplay (PDF/Final Draft format), setting you up for pitch meetings and shooting.",
  },
];

const ScriptWriting = () => {
  return (
    <div>
        <Navbar/>
        <ScriptMain/>
        <ScriptServices/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: 'var(--hero-bg)'
        }} />

        <ScriptwritingSection/>
        
        <MemoirStepsSection 
          title="OUR 4-STEP SCRIPT WRITING PROCESS" 
          steps={scriptSteps} 
        />

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: '#0A0F1F'
        }} />

        <ScriptCTASection/>

        <TopSeller/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: 'var(--hero-bg)'
        }} />

        <WhyChooseUs
            title="HIRE EXPERT SCRIPTWRITERS TO TURN YOUR IDEAS INTO CINEMATIC SCREENPLAYS"
            desc={
                <>
                    <p className="wcu-desc">
                        When it comes to professional scriptwriting, <strong>Doubleday Publisher</strong> stands out. Our team of skilled screenwriters and playwrights is dedicated to crafting high-impact screenplays that captivate audiences and keep them watching.
                    </p>
                    <p className="wcu-desc">
                        We work closely with you through outline development, character creation, dialogue polishing, and formatting to capture your true creative vision. Whether it's a feature film, TV pilot, short film, commercial, or play, our expert writers shape it into an industry-standard, production-ready masterpiece.
                    </p>
                    <p className="wcu-desc">
                        Partner with <strong>Doubleday Publisher</strong> to bring your cinematic ideas to life. Hire a professional scriptwriter today and take the first step toward launching your story onto the screen.
                    </p>
                </>
            }
        />
        <ReviewsCarousel/>
        <DreamBookCTA/>

        <Footer/>
    </div>
  )
}

export default ScriptWriting