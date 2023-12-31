import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redis from "../assets/redis.png";
import spring from "../assets/spring.png";
import terraform from "../assets/terraform.png";
import jekins from "../assets/jenkins.png";
import godot from "../assets/godot.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import linux from "../assets/linux.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
        id: 7,
        src: python,
        title: "Python",
        style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: redis,
      title: "Redis",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: spring,
      title: "Spring framework",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: terraform,
      title: "Terraform",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: jekins,
      title: "Jenkins",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: godot,
      title: "Godot",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 15,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 16,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-600",
    },
    {
      id: 17,
      src: docker,
      title: "Docker",
      style: "shadow-blue-700",
    },
    {
      id: 18,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-700",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;