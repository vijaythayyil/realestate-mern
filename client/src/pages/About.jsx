import React from "react";
import { FaBuilding, FaHandshake, FaUsers } from "react-icons/fa"; // Ensure you have react-icons installed

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-6 text-slate-800">About Mern Estate</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <FaBuilding className="w-16 h-16 text-slate-700 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Expertise</h2>
          <p className="text-slate-700">
            Mern Estate is a premier real estate agency specializing in buying, selling, and renting
            properties in top neighborhoods. Our experienced agents are committed to excellence,
            ensuring a seamless process for all clients.
          </p>
        </div>
        <div className="flex-1">
          <FaHandshake className="w-16 h-16 text-slate-700 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-slate-700">
            We aim to empower clients in achieving their real estate ambitions through expert
            advice, personalized service, and comprehensive market insights. Your journey in buying,
            selling, or renting is our priority.
          </p>
        </div>
        <div className="flex-1">
          <FaUsers className="w-16 h-16 text-slate-700 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="text-slate-700">
            With a rich background in real estate, our agents bring unparalleled expertise and
            passion to every transaction. We're dedicated to making your property experience
            rewarding and fulfilling.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-slate-700 mb-4">Ready to start your real estate journey with us?</p>
        <button className="bg-slate-800 text-white font-bold py-2 px-4 rounded hover:bg-slate-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
