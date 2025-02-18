import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container ">
        <h1 align="center" className="mt-5 fw-bold fs-1">
          Log In
        </h1>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-8 col-10 border border-dark p-5 mt-5 bg-dark text-light rounded-5">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">
                <Link
                  to={`/Home`}
                  className="text-light fs-4 text-decoration-none"
                >
                  Login
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
