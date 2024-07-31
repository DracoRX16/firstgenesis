import React from "react";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1 className="text-2xl font-bold pt-2 pb-4">About</h1>

      <p>
        Welcome to FirstGenesis, a dedicated platform for first-generation,
        low-income students seeking to achieve their educational and career
        aspirations. Our mission is to empower you with the resources and
        support needed to navigate the complex landscape of higher education and
        professional development.
      </p>

      <div className="relative z-2 mt-8 text-xl text-gray-700">
        Created by DracoRX for EmpowerHacks2.0
        <a
          href="https://github.com/DracoRX16/firstgenesis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer text-2xl mt-2" />
        </a>
      </div>
    </div>
  );
};

export default About;
