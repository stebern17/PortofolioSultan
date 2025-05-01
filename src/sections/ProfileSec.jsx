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
      <div className="container flex justify-center items-center gap-4">
        <div className="grid grid-cols-1 gap-4">
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
          </Fade>
        </div>
        <Fade
          blur={true}
          duration={2000}
          easing="ease-in-out"
          initialOpacity={0}
        >
          <PixelCard variant="blue">
            <img
              src={Avatar}
              alt="Foto"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
          </PixelCard>
        </Fade>
      </div>
    </>
  );
}
