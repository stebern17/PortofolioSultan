import React from "react";
import ProfileSec from "../sections/ProfileSec";
import Aurora from "../components/Aurora";
import Experties from "../sections/Experties";
import Particles from "../components/Backgrounds/Particles/Particles";
import { motion, AnimatePresence } from "framer-motion";
import FadeContent from "../components/Animation/FadeContent/FadeContent";
import MoreButton from "../components/MoreButton";
import Certification from "../sections/Certification";
import MyProject from "../sections/MyProject";

export default function Home() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        {/* Particles background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Particles
            particleColors={["A7E6FF", "3ABEF9"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Your content goes here */}
        <div className="relative z-10 min-h-screen">
          <Aurora
            colorStops={["#050C9C", "#3572EF", "#3ABEF9", "#A7E6FF"]}
            blend={0.1}
            amplitude={2.0}
            speed={0.8}
            className="absolute inset-0 z-0"
          />
          <div className="flex flex-col gap-10">
            <ProfileSec />

            {!showMore && (
              <FadeContent
                blur={true}
                duration={2000}
                easing="ease-in-out"
                initialOpacity={0}
              >
                <div className="flex justify-center">
                  <MoreButton showMore={showMore} setShowMore={setShowMore} />
                </div>
              </FadeContent>
            )}

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-10"
                >
                  <Experties />
                  <Certification />
                  <MyProject />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
