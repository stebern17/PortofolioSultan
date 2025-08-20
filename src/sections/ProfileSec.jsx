import React from "react";
import SplitText from "../components/SplitText";
import PixelCard from "../components/PixelCard/PixelCard";
import Avatar from "../assets/Avatar.png";
import TrueFocus from "../components/TextAnimation/TrueFocus/TrueFocus";
import Fade from "../components/Animation/FadeContent/FadeContent";

export default function ProfileSec() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div className="container grid grid-cols-1 md:flex justify-center items-center gap-4">
        <div className="grid grid-cols-1 gap-4 order-2 md:order-1">
          <SplitText
            text="Hello, My name is Sultan Faaiz!"
            className="text-5xl font-semibold text-center text-white font-mono"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <Fade
            blur={true}
            duration={2000}
            easing="ease-in-out"
            initialOpacity={0}
          >
            <TrueFocus />
            <div className="ms-5 md:ms-0 text-white font-mono text-sm md:text-2xl flex flex-col gap-2">
              <ul className="list-disc flex justify-center  gap-10  mt-5">
                <li>Remote</li>
                <li>On Site</li>
                <li>Based in Yogyakarta</li>
              </ul>
              <p className="text-center">
                Currently Working at{" "}
                <span className="font-sans font-extrabold text-3xl text-[#E4004B] drop-shadow-[0_0_20px_#ff6060]">
                  ID Maks
                </span>
              </p>
            </div>
          </Fade>
          <Fade
            blur={true}
            duration={2000}
            easing="ease-in-out"
            initialOpacity={0}
            className="bg-gray-300 w-fit py-3 px-6 backdrop-blur-md bg-opacity-20 rounded-full text-center text-xl text-white font-mono font-semibold hover:bg-opacity-30 transition duration-500 ease-in-out mx-auto mt-2 hover:scale-105 md:text-2xl"
          >
            <a
              href="https://drive.google.com/file/d/1A8jTYngYXWqqJLMTR4ts3R2o6jCoejfU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Fade>
        </div>
        <Fade
          blur={true}
          duration={2000}
          easing="ease-in-out"
          initialOpacity={0}
          className="grid order-1 mx-auto md:order-2"
        >
          <PixelCard
            variant="blue"
            className="relative bg-gray-600 bg-opacity-30 backdrop-blur-md"
          >
            <img
              src={Avatar}
              alt="Foto"
              className="absolute bottom-0 w-52 h-auto object-contain"
            />
          </PixelCard>
        </Fade>
      </div>
    </>
  );
}
