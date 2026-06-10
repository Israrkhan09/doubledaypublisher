import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import StoryMain from '../Sections/StoryWritingSection/StoryMain/StoryMain'
import FinalPublishingCalloutSection from '../Sections/StoryWritingSection/StoryContent/StoryContent'
import Navbar from '../Layouts/Navbar/Navbar'
import { TopSeller } from '../Sections/HomeSections/BestsellerSection/TopSeller'
import MemoirStepsSection from '../Sections/MemoirWritingSection/MemoirWritingSteps/MemoirSteps'
import StoryCTASection from '../Sections/StoryWritingSection/StoryCTASection/StoryCTASection'
import { WhyChooseUs, ReviewsCarousel, DreamBookCTA } from '../Sections/HomeSections/BrandSections/BrandSections'
import { Search, PenTool, Lightbulb, FileCheck } from "lucide-react";

// Data for the storytelling steps
const storySteps = [
  {
    id: 1,
    icon: Search,
    title: "Share Your Vision",
    frontText:
      "Share your story ideas, themes, and creative vision. We will craft a tailored outline to bring your narrative to life.",
    backText:
      "We gather your unique plot ideas, characters, and core messages, ensuring every detail of your story is captured.",
  },
  {
    id: 2,
    icon: PenTool,
    title: "Drafting & Editing",
    frontText:
      "Our expert writers draft your chapters meticulously, focusing on clarity, narrative flow, and grammar to capture your true voice.",
    backText:
      "We structure your narrative into a compelling story arc, highlighting key plot events and emotional milestones.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Review & Feedback",
    frontText:
      "We share chapters with you for review, incorporating your feedback and refining every detail to match your expectations.",
    backText:
      "Our team refines every sentence for maximum engagement, ensuring a flawless narrative that sounds exactly like you.",
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Final Polish & Publish",
    frontText:
      "We perform a final conceptual and structural polish, preparing your book for formatting, cover design, and publication.",
    backText:
      "We handle formatting, cover designs, and platform submissions, successfully launching your story to the world.",
  },
];

const StoryWriting = () => {
  return (
    <div>
        <Navbar/>
        <StoryMain/>
        <FinalPublishingCalloutSection/>
        <MemoirStepsSection 
          title="OUR 4-STEP STORY TELLING PROCESS" 
          steps={storySteps} 
        />

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: '#0A0F1F'
        }} />

        <StoryCTASection/>

        <TopSeller/>

        <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(20, 184, 166, 0.4), transparent)',
            backgroundColor: 'var(--hero-bg)'
        }} />

        <WhyChooseUs
            title="HIRE EXPERT STORY WRITERS TO BRING YOUR TALES AND CHARACTERS TO LIFE"
            desc={
                <>
                    <p className="wcu-desc">
                        When it comes to professional story writing, <strong>Doubleday Publisher</strong> stands out. Our team of skilled authors and narrative designers is dedicated to crafting engaging and unforgettable stories that capture your readers' imagination.
                    </p>
                    <p className="wcu-desc">
                        We work closely with you through outline development, character building, and drafting to capture your true voice, message, and creative vision. Whether it's fiction, young adult, fantasy, mystery, or drama, our expert writers shape it into a polished, publication-ready masterpiece.
                    </p>
                    <p className="wcu-desc">
                        Partner with <strong>Doubleday Publisher</strong> to bring your ideas to life. Hire a professional story writer today and take the first step toward launching your story to the world.
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

export default StoryWriting