import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto gap-2">
              <li className="nav-item rounded">
                <Link to={`/Home`} className="nav-link active" aria-current="page">
                  <i className="bi bi-house-fill me-2" />
                  Home
                </Link>
              </li>
              <li className="nav-item rounded">
                <Link to={`/AddPost`} className="nav-link" >
                  <i className="bi bi-people-fill me-2" />
                Add Post
                </Link>
              </li>
            
           
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
