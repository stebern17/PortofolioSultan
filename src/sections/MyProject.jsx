import React from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";

export default function MyProject() {
  return (
    <>
      <div className="container text-white font-mono">
        <h3 className="text-4xl font-extrabold mb-6">My Project</h3>
        <div className="overflow-x-auto scroll-smooth snap-x flex space-x-4 scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          {[
            {
              title: "Ordering Sysytem Ledok Sambi Ecopark",
              category: "Web Fullstack",
              desc: "A web-based ordering system for Ledok Sambi Ecopark, integrating both frontend and backend functionalities.",
              src: "https://picsum.photos/seed/picsum/400/200",
            },
            {
              title: "Mental Health Care",
              category: "Web Frontend",
              desc: "A frontend web application focused on mental health care, providing resources and support.",
              src: "https://picsum.photos/seed/picsum/400/200",
            },
            {
              title: "Jinjam",
              category: "UI/UX Design",
              desc: "A UI/UX design project for Jinjam, focusing on user experience and interface.",
              src: "https://picsum.photos/seed/picsum/400/200",
            },
            {
              title: "Smart Lamp",
              category: "UI/UX Design",
              desc: "A UI/UX design project for a smart lamp, enhancing user interaction and functionality.",
              src: "https://picsum.photos/seed/picsum/400/200",
            },
            {
              title: "Gejoss Cashier",
              category: "UI/UX Design",
              desc: "A UI/UX design project for Gejoss Cashier, focusing on efficient user interface and experience.",
              src: "https://picsum.photos/seed/picsum/400/200",
            },
          ].map(({ title, src, category, desc }, idx) => (
            <SpotlightCard
              key={idx}
              className="custom-spotlight-card font-mono text-center h-full flex-shrink-0 w-[calc(100%/3)] flex flex-col items-center justify-center snap-center"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <img src={src} alt={title} />
              <h4 className="text-xl font-bold mt-2">{title}</h4>
              <p className="text-sm">{category}</p>
              <p className="text-lg">{desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </>
  );
}
