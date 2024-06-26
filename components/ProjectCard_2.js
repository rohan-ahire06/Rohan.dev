import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub, FaImage } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard_2 = ({ title, description, repoLink, appLink, image }) => {
  console.log(image.remotePatterns);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className=" bg-white flex lg:flex-row flex-col-reverse justify-between items-center  gap-5  shadow-lg py-6 px-5 my-10 lg:my-12 rounded-xl"
    >
      <div className=" flex flex-col justify-between lg:w-[50%] lg:px-10 text-center">
        <div>
          <h3 className=" mb-5 text-[1.5rem] font-bold">{title}</h3>
          <p className=" text-lg text-[#767676] text-justify">{description}</p>
        </div>

        <div className=" flex justify-evenly text-[1.3rem] font-medium mt-[3rem]">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-1 hover:text-[#147efb] duration-300 cursor-pointer"
          >
            Code
            <FaGithub />
          </a>
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-1 hover:text-[#147efb] duration-300 cursor-pointer"
          >
            Live Demo <MdOpenInNew />
          </a>
        </div>
      </div>
      <div className=" shadow-md rounded-2xl overflow-hidden">
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          {image ? (
            <Image
              src={image}
              alt="projectimg"
              loading="lazy"
              height={500}
              width={500}
              className=" h-auto w-[570px] hover:scale-105 duration-300 ease-in-out"
            />
          ) : (
            <div className=" flex justify-center items-center h-[500px] w-[570px] hover:scale-105 duration-300 ease-in-out">
              <FaImage className=" text-2xl text-gray-400" />
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard_2;
