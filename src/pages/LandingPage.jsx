import { useState } from "react";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CallToActionButton from "../components/CallToActionButton";
import MeetYourMentor from "../components/MeetYourMentor";
import PromiseSection from "../components/PromiseSection";
import StickyBar from "../components/StickyBar";
import TestimonialsSection from "../components/TestimonialsSection";
import BlueprintPremiumSection from "../components/BlueprintPremiumSection";
import PricingTrustCard from "../components/PricingTrustCard";
// import WhyHealthyNation from "../components/WhyHealthyNation";
// import VideoTestimonialsSection from "../components/VideoTestimonialsSection";
import HealthyNationTeam from "../components/HealthyNationTeam";
import { NewspaperMarquee } from "../components/ImageMarquee";
import WhatsAppProofWall from "../components/WhatsAppProofWall";
import ContactFooter from "../components/ContactFooter";
import CoachBackground from "../components/CoachBackground";

function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Add bottom padding so content isn't covered by sticky bar */}
      <div className="pb-24 sm:pb-28 justify-center relative">
        {/* Temporary Debug Button */}
        <div className="fixed top-4 right-4 z-50">
          <Link
            to="/thank-you"
            className="bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition"
          >
            Go to Thank You Page
          </Link>
        </div>

        <Review />
        <Hero />
        <VideoSection />
        <CallToActionButton />
        <TestimonialsSection />
        <MeetYourMentor />
        <CoachBackground />
        <BlueprintPremiumSection />
        <ContactFooter />
      </div>

      <StickyBar />
    </>
  );
}

export default LandingPage;
