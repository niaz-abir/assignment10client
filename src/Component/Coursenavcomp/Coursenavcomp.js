import React from "react";
import "./Coursenav.css";

const Coursenavcomp = ({ comp }) => {
  console.log(comp);
  return (
    <div className="info-card">
      <div className="card w-60 bg-base-100 g gap-4 shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img className=" w-24" src={comp.img} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{comp.name}</h2>
          <p>Instructor:{comp.Instructor}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursenavcomp;
