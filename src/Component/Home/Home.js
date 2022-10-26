import React from "react";
import Lottie from "lottie-react";
import reader from "../../asset/reader.json";

const Home = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-4xl font-bold text-blue-400 ">SPORLCE</h1>
      <div className="flex justify-center">
        <Lottie className="w-1/2" animationData={reader} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Home;
