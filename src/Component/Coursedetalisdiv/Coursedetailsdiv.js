import React from "react";
import { useLoaderData } from "react-router-dom";

const Coursedetailsdiv = () => {
  const coursedetailsdiv = useLoaderData([]);
  console.log(coursedetailsdiv);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={coursedetailsdiv.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{coursedetailsdiv.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetailsdiv;
