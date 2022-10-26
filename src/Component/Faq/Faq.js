import React from "react";

const Faq = () => {
  return (
    <div className="">
      {/* swap */}
      <div>
        <label className="btn btn-circle swap swap-rotate ">
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {/* option */}
      <div>
        <div className="grid grid-cols-1 mt-4">
          <select className="select select-ghost text-1xl w-2/3 max-w-xs">
            <option className="grid grid-cols-1" disabled selected>
              Pick the best JS Course
            </option>
            <option>Sass</option>
            <option>Bootstrap</option>
            <option>Nodejs</option>
            <option>Python</option>
            <option>Php</option>
            <option>React</option>
          </select>
        </div>
      </div>
      {/* progress bar */}
      <div>
        <div className="grid grid-cols-1 mt-14">
          <progress
            className="progress progress-info w-56 mb-4"
            value="10"
            max="100"
          ></progress>
          <p>Sass</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="40"
            max="100"
          ></progress>
          <p>Bootstrap</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="40"
            max="100"
          ></progress>
          <p>Php</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="70"
            max="100"
          ></progress>
          <p>Nodejs</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="70"
            max="100"
          ></progress>
          <p>Python</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="100"
            max="100"
          ></progress>
          <p>React</p>
          <progress
            className="progress progress-info w-56 mb-4"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Faq;
