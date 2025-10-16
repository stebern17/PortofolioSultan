import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import LedokSambi from "../assets/LedokSambi.png";
import MentalHealth from "../assets/MentalHealthCare.png";
import Kootin from "../assets/Kootin.png";
import Marica from "../assets/marica.png";
import GejossCash from "../assets/GC.png";
import InotekNichiha from "../assets/InotekNichiha.png";
import IDMaks from "../assets/IDMaks.png";
import Jinjam from "../assets/Jinjam.png";
import { FaGithub, FaGlobe, FaFigma } from "react-icons/fa";

export default function MyProject() {
  const [isMdUp, setIsMdUp] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const projects = [
    {
      title: "Inotek Nichiha (Comercial)",
      category: "Web Fullstack",
      desc: "This project appears to be a web application built with Next.js, React, and TypeScript, potentially connected to a Strapi backend. It leverages Tailwind CSS for styling and Flowbite React for UI components. The application seems to include features like a product catalog, contact form submission, and distributor information.",
      src: InotekNichiha,
      domain: "https://projectinotek.sultanjughead.dev",
    },
    {
      title: "Ordering System Ledok Sambi Ecopark",
      category: "Web Fullstack",
      desc: "A fullstack ordering system built with Laravel, MySQL, Blade, and Tailwind CSS for Ledok Sambi Ecopark, designed to simplify and digitalize the customer ordering experience. The application integrates both frontend and backend to manage menus, orders, and transactions in real time, complete with role-based authentication for admins and cashiers. With its mobile-first layout, intuitive interface, and efficient backend logic, the system enhances operational efficiency and provides a seamless ordering process for both staff and visitors.",
      src: LedokSambi,
      domain: "https://orderingledoksambi.shop/1",
      github:
        "https://github.com/stebern17/SistemPemesanan_LedokSambiEcopark.git",
    },
    {
      title: "Mental Health Care",
      category: "Web Frontend",
      desc: "Mental Health Care is a frontend web application built with React and Tailwind CSS, designed to promote mental health awareness and provide easy access to self-care resources. The project emphasizes an empathetic user experience through a calming design, structured layout, and soothing visuals, creating a safe and supportive digital space where users can learn, reflect, and find guidance for their mental well-being.",
      src: MentalHealth,
      domain: "https://mentalhealth.sultanjughead.dev/",
      github:
        "https://github.com/stebern17/FinalProject-Mental-Health-Awareness.git",
    },
    {
      title: "Kootin.id (Comercial)",
      category: "WordPress",
      desc: "Kootin.id is a WordPress-based perfume product landing page designed to showcase detailed product knowledge and highlight the brand’s premium identity. The website features an elegant and minimalist layout that enhances the visual appeal of each fragrance, ensuring a smooth and responsive browsing experience across all devices. Built with attention to aesthetics and usability, it effectively communicates the brand’s essence while making information about products clear and engaging for visitors.",
      src: Kootin,
      domain: "https://kootin.id/",
    },
    {
      title: "ID Maks (Comercial)",
      category: "UI/UX Design",
      desc: "ID Maks is a UI/UX design project created for a digital marketing agency, focusing on building a professional and modern interface that reflects the agency’s creative identity. The design emphasizes clear visual hierarchy, intuitive navigation, and an engaging user flow to enhance client interaction and brand credibility. Developed in Figma, this project showcases a clean, functional layout tailored for efficiency and aesthetic appeal.",
      src: IDMaks,
      figma:
        "https://www.figma.com/design/deYjPn919OoLZk9QfeEibq/ID-Maks?node-id=14-100",
    },
    {
      title: "Marica",
      category: "UI/UX Design",
      desc: "Marica is a UI/UX design concept for an online learning platform aimed at improving accessibility and engagement in digital education. Designed entirely in Figma, it focuses on creating a user-centered experience with visually appealing components, clear typography, and an intuitive dashboard. The project highlights how thoughtful interface design can simplify complex educational interactions while maintaining a modern and inviting look.",
      src: Marica,
      figma:
        "https://www.figma.com/proto/R9t1NVBeOgrKX0S3ExmM6L/Marica-Web?page-id=0%3A1&node-id=1-2",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Variants untuk animasi setiap card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="container mx-auto text-white font-mono">
      <h3 className="text-4xl font-extrabold mb-8 text-center md:text-start">
        My Projects
      </h3>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl border transition-all duration-200 text-sm ${
              activeCategory === cat
                ? "bg-[#00e5ff33] border-[#00e5ff] text-white"
                : "bg-white/5 border-white/10 hover:bg-white/10 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Project */}
      <motion.div
        layout
        className={`grid ${
          isMdUp ? "md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid-cols-1 gap-4"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(
            ({ title, src, category, desc, domain, github, figma }, idx) => (
              <motion.div
                key={title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
              >
                <SpotlightCard
                  className="custom-spotlight-card h-full min-h-[480px] flex flex-col items-center justify-between text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-4 hover:scale-[1.02] transition-all duration-300"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  {/* Gambar */}
                  <div className="flex justify-center items-center h-48 w-full mb-4">
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-auto max-w-[90%] object-contain rounded-lg"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-grow justify-between w-full">
                    <div>
                      <h4 className="text-xl font-bold mt-2">{title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{category}</p>
                      <p className="text-sm text-gray-200 leading-relaxed text-justify px-2">
                        {desc}
                      </p>
                    </div>

                    {/* Tombol */}
                    <div className="flex justify-center gap-4 mt-4">
                      {domain && domain !== "#" && (
                        <a
                          className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-[#00e5ff33] hover:scale-105 transition"
                          href={domain}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaGlobe size={18} />
                        </a>
                      )}
                      {github && (
                        <a
                          className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-[#00e5ff33] hover:scale-105 transition"
                          href={github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {figma && (
                        <a
                          className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-[#00e5ff33] hover:scale-105 transition"
                          href={figma}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaFigma size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
