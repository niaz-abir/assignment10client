import React from "react";
import { useLoaderData } from "react-router-dom";

const Coursedetails = () => {
  const Coursedetails = useLoaderData();
  console.log(Coursedetails);
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={Coursedetails.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="text-2xl text-pink-900  font-bold">
            {Coursedetails.name}
          </h3>
          <h2 className="text-2xl text-pink-900 ">
            Instructor:{Coursedetails.Instructor}
          </h2>
          <h2 className="text-2xl text-pink-900 ">
            Class:{Coursedetails.class}
          </h2>
          <h2 className="text-2xl text-pink-900 ">
            Tutorial:{Coursedetails.durution}
          </h2>
          <p className="mt-4 text-pink-900 ">
            <span className="font-bold text-pink-900 ">Details</span> :
            {Coursedetails.details}
          </p>
          <button className="btn btn-outline text-pink-900 ">Thank you</button>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
