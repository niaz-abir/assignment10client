import React from "react";
import { Link } from "react-router-dom";

const Coursenav = ({ loads }) => {
  //   console.log(loads);
  return (
    <div className="mb-8 ">
      <Link to={`/detail/${loads.id}`} className=" text-purple-800 text-2xl  ">
        {loads.name}
        <hr className="w-1/2 mt-4 flex ml-28"></hr>
      </Link>
    </div>
  );
};

export default Coursenav;
