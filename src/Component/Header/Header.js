import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovider";
import "./Header.css";
import ReactTooltip from "react-tooltip";

const Header = () => {
  const { user, logout } = useContext(Authcontext);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handlemood = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <Link
                  to="/home"
                  className="hover:bg-blue-400 text-pink-900   text-1xl text-pink-900 f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  Home
                </Link>
                <Link
                  to="/course"
                  className="hover:bg-blue-400 text-pink-900   text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  Course
                </Link>
                <Link
                  to="/blog"
                  className="hover:bg-blue-400 text-pink-900   text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  {" "}
                  Faq
                </Link>
              </li>
              <li>
                <button className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600">
                  Toggle
                </button>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  {" "}
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:bg-blue-400 text-pink-900   text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  Register
                </Link>
                <button
                  onClick={handlelogout}
                  className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center ml-4 lg:ml-4">
            <img
              className="w-14  rounded-full"
              src="https://learnworthy.net/wp-content/uploads/2019/10/10-things-every-programmer-should-know.jpg"
            ></img>
            <Link
              to="/home"
              className="btn btn-ghost normal-case text-pink-900  text-4xl font-bold"
            >
              SPORLCE
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/home"
                className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/course"
                className="hover:bg-blue-400 text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                Course
              </Link>
              <Link
                to="/blog"
                className="hover:bg-blue-400  text-pink-900 text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="hover:bg-blue-400  text-pink-900  text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                {" "}
                Faq
              </Link>
            </li>
            <li>
              <button
                onClick={handlemood}
                className="hover:bg-blue-400 text-pink-900   text-1xl  font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                Toggle
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:bg-blue-400 text-pink-900   text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                {" "}
                Login
              </Link>
              <Link
                to="/register"
                className="hover:bg-blue-400 text-pink-900   text-1xl f font-semibold hover:shadow-lg hover:shadow-purple-600"
              >
                Register
              </Link>
            </li>
          </ul>
          <button onClick={handlelogout}>Logout</button>
        </div>

        <div className="navbar-end">
          {/* <div className="tooltip" data-tip="hello">
            <button className="btn">Hover me</button>
          </div> */}

          <div
            className="tooltip tooltip-left text-pink-900 "
            data-tip={user?.displayName}
          >
            {
              <img
                className="rounded w-8 lg:w-14 mr-2 tooltip"
                src={user?.photoURL}
              ></img>
            }
          </div>
          <p className="text-pink-900 ">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
