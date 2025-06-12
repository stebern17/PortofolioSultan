import React from "react";
import RunningLogos from "../components/RunningLogos";

export default function Experties() {
  return (
    <>
      <div className="container flex justify-center items-center text-white font-mono flex-col gap-5">
        <h3 className="text-4xl font-extrabold">I'm Good At</h3>
        <RunningLogos />
      </div>
    </>
  );
}
