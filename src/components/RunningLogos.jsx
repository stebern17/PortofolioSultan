import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import csslogo from "../assets/csslogo.png";
import reactlogo from "../assets/reactlogo.png";
import bslogo from "../assets/bootstraplogo.svg";
import htmllogo from "../assets/htmllogo.png";
import tailwindlogo from "../assets/tailwindlogo.svg";
import sasslogo from "../assets/sasslogo.png";
import phplogo from "../assets/phplogo.png";
import laravelogo from "../assets/laravellogo.png";

const logos = [
  { src: htmllogo, alt: "HTML Logo" },
  { src: csslogo, alt: "CSS Logo" },
  { src: reactlogo, alt: "React Logo" },
  { src: bslogo, alt: "Bootstrap Logo" },
  { src: tailwindlogo, alt: "Tailwind CSS Logo" },
  { src: sasslogo, alt: "Sass Logo" },
  { src: phplogo, alt: "PHP Logo" },
  { src: laravelogo, alt: "Laravel Logo" },
];

export default function RunningLogos() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // Tailwind md breakpoint is 768px
      setIsMdUp(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMdUp) {
    // md and above: Use the simpler animation with slight shift and bounce
    return (
      <div className="overflow-hidden px-20 py-5">
        <motion.div
          className="flex w-max gap-16"
          animate={{ x: [0, -60, 0] }} // oscillates back and forth
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {logos.map((logo, i) => (
            <motion.button key={i} whileHover={{ scale: 1.2 }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-auto object-contain"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    );
  } else {
    // mobile: use infinite horizontal scrolling
    const totalLogos = logos.length * 2;
    const distanceToScroll = totalLogos * 112;

    return (
      <div className="overflow-hidden px-4 py-5">
        <motion.div
          className="flex gap-16"
          style={{ width: distanceToScroll }}
          animate={{ x: [-distanceToScroll / 2, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              className="flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-auto object-contain"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    );
  }
}
