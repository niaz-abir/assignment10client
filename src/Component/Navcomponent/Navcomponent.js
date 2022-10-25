import React, { useEffect, useState } from "react";
import Coursenavcomp from "../Coursenavcomp/Coursenavcomp";

const Navcomponent = () => {
  const [comps, setcoms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setcoms(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ml-0   pl-28 lg:pl-0 mr-14">
      {comps.map((comp) => (
        <Coursenavcomp comp={comp} key={comp.id}></Coursenavcomp>
      ))}
    </div>
  );
};

export default Navcomponent;
