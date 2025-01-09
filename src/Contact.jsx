import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="w-full bg-zinc-900 h-screen flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-zinc-700 pb-2">
          Connect with Me
        </h1>
        <div className="space-y-4 text-xl">
          <div className="flex items-center gap-4">
            <FaPhoneAlt />
            <p>
              <span className="font-bold">Phone:</span> +92 318 2562126
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp />
            <p>
              <span className="font-bold">WhatsApp:</span> +92 318 2562126
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/abdulahad-khan-5b1641234/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub />
            <a
              href="https://github.com/abd-bangash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400"
            >
              GitHub Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope />
            <p>
              <span className="font-bold">Email:</span> abdulahadk04@gmail.com
            </p>
          </div>
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

export default Contact;
