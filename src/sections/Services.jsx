import React from "react";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import UiuxService from "../assets/uiuxservice.svg";
import WebDevService from "../assets/webdevelopment.svg";

export default function Services() {
  return (
    <>
      <div className="container text-white font-mono md:mb-24">
        <h3 className="text-4xl font-extrabold text-center md:text-start mb-6">
          What Can I Do?
        </h3>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Web Development",
                desc: "Crafting high-performance, scalable, and interactive web applications using modern frameworks and clean architecture. Every project is built to be fast, secure, and tailored to deliver exceptional user experiences that align with your business goals.",
                spotlightColor: "rgba(0, 229, 255, 0.2)",
                image: WebDevService,
              },
              {
                title: "Responsive Design",
                desc: "Creating adaptable, visually consistent interfaces that look and perform beautifully on any device. With a balance of usability, accessibility, and modern aesthetics, every layout ensures your brand stays engaging from desktop to mobile.",
                spotlightColor: "rgba(255, 105, 180, 0.2)",
                image: UiuxService,
              },
            ].map(({ title, desc, spotlightColor, image }, idx) => (
              <SpotlightCard
                key={idx}
                className="custom-spotlight-card font-mono text-center h-[600px] md:h-full w-full items-centerr"
                spotlightColor={spotlightColor}
              >
                <img src={image} alt="serviceimg" className="size-24 mx-auto" />
                <h4 className="text-2xl font-bold mb-2">{title}</h4>
                <p className="text-lg">{desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
