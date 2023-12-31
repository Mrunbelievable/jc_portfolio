import React from "react";


import uci from "../assets/uci.png";
import neu from "../assets/neu.png";
import webank from "../assets/webank.png";
import boostingbytes from "../assets/boostingbytes.png";

const Experiences = () => {

  const experiences = [
    {
      id: 1,
      title: "Northeastern University",
      year: "2022-2024",
      img: neu,
    },
    {
      id: 2,
      title: "BoostingBytes Inc",
      year: "2022-2023",
      img: boostingbytes,
    },
    {
      id: 3,
      title: "WeBank Co, Ltd",
      year: "2021-2022",
      img: webank,
    },
    {
      id: 4,
      title: "University of California, Irvine",
      year: "2019-2021",
      img: uci,
    },
  ];

  
  return (
    <div name="experiences" className="bg-gradient-to-b from-gray-800 to-black w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experiences
          </p>
        </div>

        <div>
          {experiences.map((experience) => (
            <div key={experience.id} className="relative flex flex-col sm:flex-row items-center mb-8">
              <div className="flex flex-col items-center sm:items-start sm:mr-8">
                <div className="flex items-center justify-center w-16 h-16 ">
                  <img src={experience.img} alt={experience.title} className="object-cover" />
                </div>
                <div className="hidden sm:block w-1 h-16 bg-gray-500"></div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-2xl font-bold">{experience.title}</p>
                <p className="text-xl">{experience.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Experiences;