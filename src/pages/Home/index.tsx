import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="bg-[#FAF7F0] min-h-[25vh] flex justify-center items-center">
        <h1 className="text-4xl font-fontAtkinson font-bold">All Project</h1>
      </div>
      <div className="bg-[#CDFCF6] min-h-[70vh] py-6 px-4">
        <Link
          to="/auto-scroll"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Auto Scroll Infinite
        </Link>
      </div>
      <div className="bg-[#CDFCF6] min-h-[5vh] py-6 px-4 text-center">
        © 2023 Fraza. All Rights Reserved
      </div>
    </div>
  );
};

export default Home;
