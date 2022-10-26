import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Reactpackeg = () => {
  const packegs = useLoaderData([]);
  console.log(packegs);

  return (
    <div className="flex justify-center">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={packegs.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-8">
            <h1 className="text-4xl font-bold">Yes! You Get It</h1>
            <h3 className="text-2xl mt-2 font-serif">
              {" "}
              Course Name :{packegs.name}
            </h3>
            <h3 className="text-2xl mt-2 font-serif">
              Instructor:{packegs.Instructor}
            </h3>
            <h3 className="text-2xl mt-2 mb-2 font-serif">
              Total Class:{packegs.class}
            </h3>
            {/* The button to open modal */}
            <label
              htmlFor="my-modal-3"
              className="btn bg-cyan-600 hover:bg-rose-500"
            >
              For Update
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-2xl font-bold">
                  Congratulations Now you are a<br></br> member of our family!
                </h3>
                <p className="py-4">Contact us: Sporlcecse@email.com</p>
                <p>phone :01817936252</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reactpackeg;
