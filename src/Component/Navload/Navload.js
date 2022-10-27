import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coursenav from "../Coursenav/Coursenav";

const Navload = () => {
  const [load, setload] = useState([]);

  useEffect(() => {
    fetch("https://assignment9-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setload(data));
  }, []);
  return (
    <div>
      <div className="mt-24 ">
        {load.map((loads) => (
          <Coursenav loads={loads} key={loads.id}></Coursenav>
        ))}
      </div>
    </div>
  );
};

export default Navload;
