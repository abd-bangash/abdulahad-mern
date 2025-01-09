import React from "react";
import kygImage from "../public/assets/kyg.png";
import blogImage from "../public/assets/blog.png";
import docsImage from "../public/assets/docs.png";
import exptImage from "../public/assets/expt.png";
import simImage from "../public/assets/sim.png";
import gbImage from "../public/assets/gb.png";

function Projects() {
  const projects = [
    {
      title: "Know Your Games",
      description:
        "A game exploration website to discover and learn about your favorite games.",
      image: kygImage, // Replace this with actual image
      link: "https://know-your-games.vercel.app/",
    },
    {
      title: "Docs App",
      description:
        "A front-end-only fun documentation app with a sleek interface.",
      image: docsImage, // Replace this with actual image
      link: "https://docs-app-ivory.vercel.app/",
    },
    {
      title: "React Blog",
      description:
        "A proper blog website with functionality to create and delete blogs.",
      image: blogImage, // Replace this with actual image
      link: "https://react-js-blog-two.vercel.app/",
    },
    {
      title: "Simulator",
      description:
        "A simulator for predicting customer counts and analyzing trends.",
      image: simImage, // Replace this with actual image
      link: "https://simulator-seven.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracker app to manage and visualize your daily expenses.",
      image: exptImage, // Replace this with actual image
      link: "https://expense-tracker-react-coral-seven.vercel.app/",
    },
    {
      title: "Green Book",
      description:
        "A web app inspired by Green Book to organize and manage your contacts.",
      image: gbImage, // Replace this with actual image
      link: "https://greenbook-zeta.vercel.app/",
    },
  ];

  return (
    <>
      <div className="w-full bg-zinc-900 pt-20 pb-10 px-5 ">
        {/* Add padding to prevent the heading from being hidden */}
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          My Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 md:px-10 md:pb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-4 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all
"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xl  p-3 flex justify-around bg-zinc-200 fixed bottom-0 w-screen">
        <p>React</p>
        <p>Node</p>
        <p>Express</p>
        <p>Mongo DB</p>
      </div>
    </>
  );
}

export default Projects;
