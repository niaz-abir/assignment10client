import React from "react";
import Navcomponent from "../Navcomponent/Navcomponent";
import Navload from "../Navload/Navload";

const Course = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
      <div>
        <Navload></Navload>
      </div>

      <div>
        <Navcomponent></Navcomponent>
      </div>
    </div>
  );
};

export default Course;
