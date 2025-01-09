import { useState, useEffect } from "react";
import logo from "./assets/mern-transformed.webp";
import { Link } from "react-router-dom";

function Intro() {
  const fullText = "Muhammad Abdul Ahad Khan - Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [typer, setTyper] = useState(true);
  const typingSpeed = 100; // Adjust typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index)); // Directly slice the text up to the current index
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing when complete
      }
    };
    const cursorInterval = setInterval(() => {
      setTyper(!typer);
    }, 75);
    const typingInterval = setInterval(typeLetter, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-0 px-4 md:px-8">
        {" "}
        {/* Flexbox layout */}
        <div className="max-w-2xl mb-8 md:mb-0 py-20 mt-11 md:mt-32">
          <div
            className="mb-5 font-bold font-mono text-white md:text-5xl text-3xl min-h-[225px] md:min-h-[100px]"
            // style={{ minHeight: "250px" }} // Set a fixed height to prevent content shift
          >
            {displayedText}
            {typer && "|"}
          </div>
          <div className="font-mono text-white text-md md:text-xl md:mt-0 -mt-32 ">
            I'm a full-stack developer with expertise in the MERN stack,
            building responsive, user-focused web apps. Passionate about
            transforming ideas into functional digital solutions, I specialize
            in both front-end design and back-end systems. Explore my work, and
            let’s collaborate to bring innovative projects to life!
          </div>
          <div className="mt-6 flex justify-end">
            <Link to={"/projects"}>
              {" "}
              <button className="p-2 px-4 text-md md:text-lg text-white  rounded-full bg-emerald-500 hover:bg-emerald-600 mx-5">
                {" "}
                See My Work
              </button>
            </Link>
            <Link to={"/contact"}>
              {" "}
              <button className="p-2 px-4 text-md md:text-lg text-white  rounded-full bg-red-500 hover:bg-red-600 mx-5">
                {" "}
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
        <div className=" justify-center items-center hidden md:flex">
          <img src={logo} alt="MERN" className="w-full max-w-xl" /> {}
        </div>
      </div>{" "}
      <div className="text-xl  p-3 flex justify-around bg-zinc-200 fixed bottom-0 w-screen">
        <p>React</p>
        <p>Node</p>
        <p>Express</p>
        <p>Mongo DB</p>
      </div>
    </>
  );
}

export default Intro;
