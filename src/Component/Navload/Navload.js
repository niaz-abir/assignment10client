import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coursenav from "../Coursenav/Coursenav";

const Navload = () => {
  const [load, setload] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => setload(data));
  }, []);
  return (
    <div>
      <div className="ml-24">
        {load.map((loads) => (
          <Coursenav loads={loads} key={loads.id}></Coursenav>
        ))}
      </div>
    </div>
  );
};

export default Navload;
