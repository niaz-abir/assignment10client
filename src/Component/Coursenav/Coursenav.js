import React from "react";

const Coursenav = ({ loads }) => {
  //   console.log(loads);
  return (
    <div>
      <h2 className="border-2 w-2/4 text-center mb-6 px-2 py-4 ml-8 lg:ml-0 rounded-lg text-2xl font-semibold border-blue-500">
        {loads.name}
      </h2>
    </div>
  );
};

export default Coursenav;
