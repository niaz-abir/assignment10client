import React from "react";
import { useLoaderData } from "react-router-dom";

const Coursedetails = () => {
  const Coursedetails = useLoaderData();
  //   console.log(Coursedetails);
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={Coursedetails.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Coursedetails.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
