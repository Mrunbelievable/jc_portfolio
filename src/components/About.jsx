import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A software engineer with 2 year working experience in Web development and maintenance, and a passion for continually improving the efficiency of systems. 
        Proficient in microservice tools. A self-driven learner seeking a software development role to use technology to create better products to serve people and change the world.
        </p>

      </div>
    </div>
  );
};

export default About;