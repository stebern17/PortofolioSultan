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
  return (
    <div className="overflow-hidden px-20 py-5">
      {" "}
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: [0, -60, 0] }} // Pergerakan lebih jauh agar tidak terpotong
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
}
