import { useState, useEffect } from "react";

function Skills() {
  const fullText = "Technical Skills..";
  const [displayedText, setDisplayedText] = useState("");
  const [widths, setWidths] = useState([0, 0, 0, 0, 0, 0, 0, 0]); // To track widths of each bar
  const [typer, setTyper] = useState(true);
  const typingSpeed = 100;

  const targetWidths = [95, 90, 85, 80, 75, 70, 80, 85]; // Final widths for each skill bar

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const cursorInterval = setInterval(() => {
      setTyper((prev) => !prev);
    }, 75);

    const typingInterval = setInterval(typeLetter, typingSpeed);

    const widthInterval = setInterval(() => {
      setWidths((prevWidths) =>
        prevWidths.map((width, idx) => {
          if (width < targetWidths[idx]) {
            return width + 2; // Increment width until it reaches the target
          }
          return width; // Once it reaches the target width, keep it constant
        })
      );
    }, 75);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearInterval(widthInterval);
    };
  }, []);

  return (
    <div className="mt-14 pb-4">
      <h1 className="px-4 py-10 text-6xl text-white min-h-[260px] md:min-h-[100px]">
        {displayedText} {typer && "|"}
      </h1>
      <div className="mt-14 flex flex-wrap justify-between text-2xl space-y-6 md:space-y-0">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row px-4 items-center space-y-2 md:space-y-0"
            >
              <span className="w-full md:w-1/4 text-white">{skill}</span>
              <div className="w-full md:w-3/4 bg-gray-300 h-4 rounded-lg">
                <div
                  className={`h-4 rounded-lg ${
                    index % 2 === 0 ? "bg-emerald-600" : "bg-red-600"
                  }`}
                  style={{
                    width: `${widths[index]}%`, // Use the width from state
                    transition: "width 0.5s ease-in-out", // Smooth transition
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6 md:pt-44">
          {["Node.js", "Express", "MongoDB", "Tailwind CSS"].map(
            (skill, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row px-4 items-center space-y-2 md:space-y-0"
              >
                <span className="w-full md:w-1/4 text-white">{skill}</span>
                <div className="w-full md:w-3/4 bg-gray-300 h-4 rounded-lg">
                  <div
                    className={`h-4 rounded-lg ${
                      index % 2 === 0 ? "bg-emerald-600" : "bg-red-600"
                    }`}
                    style={{
                      width: `${widths[index + 4]}%`, // Use width from state
                      transition: "width 0.5s ease-in-out", // Smooth transition
                    }}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
