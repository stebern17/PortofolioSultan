import React from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import LedokSambi from "../assets/LedokSambi.png";
import MentalHealth from "../assets/MentalHealthCare.png";
import GejossCash from "../assets/GC.png";
import Jinjam from "../assets/Jinjam.png";
import SmartLamp from "../assets/SmartLamp.png";
export default function MyProject() {
  return (
    <>
      <div className="container text-white font-mono">
        <h3 className="text-4xl font-extrabold mb-6">My Project</h3>
        <div className="overflow-x-auto scroll-smooth snap-x flex space-x-4">
          {[
            {
              title: "Ordering Sysytem Ledok Sambi Ecopark",
              category: "Web Fullstack",
              desc: "A web-based ordering system for Ledok Sambi Ecopark, integrating both frontend and backend functionalities.",
              src: LedokSambi,
              domain: "#",
              statusStyle: "hidden",
            },
            {
              title: "Mental Health Care",
              category: "Web Frontend",
              desc: "A frontend web application focused on mental health care, providing resources and support.",
              src: MentalHealth,
              domain: "https://sultan.neuversity.id/",
              statusStyle: "block",
            },
            {
              title: "Jinjam",
              category: "UI/UX Design",
              desc: "A UI/UX design project for Jinjam, focusing on user experience and interface.",
              src: Jinjam,
              domain: "#",
              statusStyle: "hidden",
            },
            {
              title: "Smart Lamp",
              category: "UI/UX Design",
              desc: "A UI/UX design project for a smart lamp, enhancing user interaction and functionality.",
              src: SmartLamp,
              domain: "#",
              statusStyle: "hidden",
            },
            {
              title: "Gejoss Cashier",
              category: "UI/UX Design",
              desc: "A UI/UX design project for Gejoss Cashier, focusing on efficient user interface and experience.",
              src: GejossCash,
              domain: "#",
              statusStyle: "hidden",
            },
          ].map(({ title, src, category, desc, domain, statusStyle }, idx) => (
            <SpotlightCard
              key={idx}
              className="custom-spotlight-card font-mono text-center min-h-full flex-shrink-0 w-[calc(100%/3)] flex flex-col items-center justify-center snap-center mb-3"
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
              <a
                href={domain === "#" ? undefined : domain}
                className={`mt-2 font-bold px-4 py-2 rounded-xl transition duration-300
    bg-gray-400 bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-30 hover:bg-[#00e5ff33] hover:scale-105
    ${domain === "#" ? "invisible pointer-events-none" : "visible"}`}
                rel="noopener noreferrer"
                target={domain === "#" ? undefined : "_blank"}
              >
                Visit Site
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </>
  );
}
