import React from "react";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark d-flex" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-1 ms-lg-5" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-start justify-content-lg-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-1 me-lg-5 mb-2 mb-lg-0 mt-lg-0'">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )    
}

export default Nav;