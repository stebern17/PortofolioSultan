import React, { useState } from "react";
import ProfileSec from "../sections/ProfileSec";
import Aurora from "../components/Aurora";
import Experties from "../sections/Experties";
import Particles from "../components/Backgrounds/Particles/Particles";
import { motion, AnimatePresence } from "framer-motion";
import FadeContent from "../components/Animation/FadeContent/FadeContent";
import MoreButton from "../components/MoreButton";
import Certification from "../sections/Certification";
import MyProject from "../sections/MyProject";
import Services from "../sections/Services";
import StickySocialNav from "../components/StickyNav";

// Variants untuk animasi section
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Komponen section dengan animasi muncul saat masuk viewport
function AnimatedSection({ children }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent">
        {/* Latar belakang partikel */}
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

        {/* Efek aurora */}
        <div className="relative z-10 min-h-screen">
          <Aurora
            colorStops={["#050C9C", "#3572EF", "#3ABEF9", "#A7E6FF"]}
            blend={0.1}
            amplitude={2.0}
            speed={0.8}
            className="absolute inset-0 z-0"
          />

          {/* Konten utama */}
          <div className="flex flex-col gap-5 mb-24 md:mb-0 relative z-10">
            {/* Section profil */}
            <ProfileSec />

            {/* Tombol sosial tetap */}
            <StickySocialNav />

            {/* Tombol "Show More" */}
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

            {/* Section tambahan dengan animasi */}
            <AnimatePresence mode="wait">
              {showMore && (
                <motion.div
                  key="more-section"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-5"
                >
                  <AnimatedSection>
                    <Experties />
                  </AnimatedSection>

                  <AnimatedSection>
                    <Certification />
                  </AnimatedSection>

                  <AnimatedSection>
                    <MyProject />
                  </AnimatedSection>

                  <AnimatedSection>
                    <Services />
                  </AnimatedSection>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
