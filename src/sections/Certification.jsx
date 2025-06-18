import React from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";

export default function Certification() {
  return (
    <>
      <div className="container text-white font-mono">
        <h3 className="text-4xl text-center md:text-start font-extrabold">
          Certification
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex lg:flex gap-5 mt-5 items-stretch">
          {[
            {
              title: "Python 101 for Data Science",
              link: "https://courses.cognitiveclass.ai/certificates/52adfdce3d2c46ddafc1f571ac0a32cd",
              date: "November 2023 - No Expiry",
            },
            {
              title: "Neuversity Front End Development",
              link: "https://credsverse.com/credentials/ce570824-030b-4f1f-8cb4-fc3d12d6b3c7?preview=1",
              date: "December 2024 - No Expiry",
            },
            {
              title: "InnoCoders Fusion Academy",
              link: "https://drive.google.com/file/d/1GmaAipqxHOUCdukKxnqhbzTIRYlJu0F8/view?usp=sharing",
              date: "January 2025 - No Expiry",
            },
          ].map(({ title, link, date }, idx) => (
            <a
              href={link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <SpotlightCard
                className="custom-spotlight-card font-mono text-center h-full w-full flex flex-col items-center justify-center"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-lg">{date}</p>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
