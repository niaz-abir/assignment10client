import React from "react";
import { Link } from "react-router-dom";
import "./Coursenav.css";

const Coursenavcomp = ({ comp }) => {
  //   console.log(comp);
  return (
    <Link to={`/detail/${comp.id}`}>
      <div className="info-card">
        <div className="cardm w-60 bg-base-100 g gap-4 shadow-xl mb-4">
          <figure className="px-10 pt-10">
            <img className=" w-24" src={comp.img} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-pink-900 ">{comp.name}</h2>
            <p className="text-pink-900 ">Instructor:{comp.Instructor}</p>
            <div className="card-actions">
              <button className="btn bg-cyan-600 hover:bg-rose-500 text-pink-900 ">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coursenavcomp;
