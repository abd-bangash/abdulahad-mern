import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <div className=" bg-zinc-900  h-full md:h-screen font-mono overflow-scroll md:overflow-hidden">
      <Skills />
      <div className="text-xl  p-3 flex justify-around bg-zinc-200 fixed bottom-0 w-screen">
        <p>React</p>
        <p>Node</p>
        <p>Express</p>
        <p>Mongo DB</p>
      </div>
    </div>
  );
}

export default About;
