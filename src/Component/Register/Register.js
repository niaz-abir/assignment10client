import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/Authprovider";

const Register = () => {
  const { loginwithemailpass, googlesignin, githubsignin } =
    useContext(Authcontext);
  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const [passerror, sepasserror] = useState("");

  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      sepasserror("Password should be six character!");
    }
    loginwithemailpass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  const handlewithgoogle = () => {
    googlesignin(googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handlegithub = () => {
    githubsignin(githubprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Register now!</h1>
          </div>
          {/* <p className="text-1xl text-red-900">{passerror}</p> */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-lg shadow-blue-500 ">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  name="photourl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-600 hover:bg-rose-500">
                  Register
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handlewithgoogle}
                  className="btn bg-cyan-600 hover:bg-rose-500"
                >
                  SignWithGoogle
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handlegithub}
                  className="btn  bg-cyan-600 hover:bg-rose-500"
                >
                  SignWithGithub
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
