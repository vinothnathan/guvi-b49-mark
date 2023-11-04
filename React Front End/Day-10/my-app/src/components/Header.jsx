import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          <img src="./image/logo.png" alt="logo" />
        </a>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link className="text-white fs-4" to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
        </ul>

        <Link className="text-danger fs-3" to="/ListPages">
          <i className="fa-solid fa-list"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Header;