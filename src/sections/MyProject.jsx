import React, { useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import LedokSambi from "../assets/LedokSambi.png";
import MentalHealth from "../assets/MentalHealthCare.png";
import GejossCash from "../assets/GC.png";
import Jinjam from "../assets/Jinjam.png";
import SmartLamp from "../assets/SmartLamp.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function MyProject() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="container text-white font-mono">
      <h3 className="text-4xl font-extrabold mb-6 text-center md:text-start">
        My Project
      </h3>
      <div className="overflow-x-auto scroll-smooth snap-x flex space-x-4">
        {[
          {
            title: "Ordering Sysytem Ledok Sambi Ecopark",
            category: "Web Fullstack",
            desc: "A web-based ordering system for Ledok Sambi Ecopark, integrating both frontend and backend functionalities. (Mobile Layout)",
            src: LedokSambi,
            domain: "http://31.97.109.14/1",
            github:
              "https://github.com/stebern17/SistemPemesanan_LedokSambiEcopark.git",
          },
          {
            title: "Mental Health Care",
            category: "Web Frontend",
            desc: "A frontend web application focused on mental health care, providing resources and support.",
            src: MentalHealth,
            domain: "https://sultan.neuversity.id/",
            github:
              "https://github.com/stebern17/FinalProject-Mental-Health-Awareness.git",
          },
          {
            title: "Jinjam",
            category: "UI/UX Design",
            desc: "A UI/UX design project for Jinjam, focusing on user experience and interface.",
            src: Jinjam,
            domain: "#",
          },
          {
            title: "Smart Lamp",
            category: "UI/UX Design",
            desc: "A UI/UX design project for a smart lamp, enhancing user interaction and functionality.",
            src: SmartLamp,
            domain: "#",
          },
          {
            title: "Gejoss Cashier",
            category: "UI/UX Design",
            desc: "A UI/UX design project for Gejoss Cashier, focusing on efficient user interface and experience.",
            src: GejossCash,
            domain: "#",
          },
        ].map(({ title, src, category, desc, domain, github }, idx) => (
          <SpotlightCard
            key={idx}
            className={`custom-spotlight-card font-mono text-center min-h-full flex-shrink-0 flex flex-col items-center justify-center snap-center mb-3 ${
              isMdUp ? "w-[calc(100%/3)]" : "w-full"
            }`}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img
              src={src}
              alt={title}
              className="w-80 h-48 object-cover rounded-md"
            />
            <h4 className="text-xl font-bold mt-2">{title}</h4>
            <p className="text-sm">{category}</p>
            <p className="text-lg">{desc}</p>
            <div
              className={`flex gap-4
                ${
                  domain === "#" ? "invisible pointer-events-none" : "visible"
                }`}
            >
              <a
                className="mt-2 font-bold px-4 py-2 rounded-xl transition duration-300
                bg-gray-400 bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-30 hover:bg-[#00e5ff33] hover:scale-105"
                href={domain === "#" ? undefined : domain}
                rel="noopener noreferrer"
                target={domain === "#" ? undefined : "_blank"}
              >
                <FaGlobe />
              </a>
              <a
                className="mt-2 font-bold px-4 py-2 rounded-xl transition duration-300
                bg-gray-400 bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-30 hover:bg-[#00e5ff33] hover:scale-105"
                href={github === "#" ? undefined : github}
                rel="noopener noreferrer"
                target={github === "#" ? undefined : "_blank"}
              >
                <FaGithub />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
