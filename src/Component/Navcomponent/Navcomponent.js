import React, { useEffect, useState } from "react";
import Coursenavcomp from "../Coursenavcomp/Coursenavcomp";
import { Link } from "react-router-dom";

const Navcomponent = () => {
  const [comps, setcoms] = useState([]);
  useEffect(() => {
    fetch("https://assignment9-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setcoms(data));
  }, []);

  return (
    <div
      to={`/detail/${comps.id}`}
      className="grid grid-cols-1 lg:grid-cols-2 ml-0   pl-28 lg:pl-0 mr-14"
    >
      {comps.map((comp) => (
        <Coursenavcomp comp={comp} key={comp.id}></Coursenavcomp>
      ))}
    </div>
  );
};

export default Navcomponent;
