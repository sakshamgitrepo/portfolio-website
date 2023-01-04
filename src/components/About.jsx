import React from "react";
import AboutImage from "../assets/aboutImage.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b pb-5 px-4 text-white"
    >
      <div className="flex justify-space-between items-center">
        <div className="max-w-screen-lg py-6 md:p-3 mx-auto flex flex-col  justify-center w-full h-full">
          <div className="pb-4 ">
            <p className="text-4xl w-full font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img
                alt=""
                src={AboutImage}
                className="aboutImage "
              />
            </div>
            <p className="md:text-xl  mt-10">
            Hi, My name is Saksham Kumar,
            I am a BCA Graduate, graduated from JIMS Rohini(Jagan Institute of management studies) affliated to GGSIPU (Guru Gobind Singh Indraprastha University), New Delhi.  I have Always had a deep interest and Curiosity for Website, Web technologies and Web Development in general. so far my main area of my expertise is front-end development with decent knowledge of Back-end and i am consistently learning to be a full stack web developer with refined knowledge of old and new technologies
             
            </p>

            <br />

            <p className="md:text-xl">
            I have created successful responsive websites that are fast, easy to use, and built with best practices. building from small, medium to almost large web apps, features, animations, and interactive layouts
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
