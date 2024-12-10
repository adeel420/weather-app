import React from "react";
import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";

const Header = ({ handleClick, setInput, input }) => {
  return (
    <div className="header-cont">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand main" href="#">
              SkyWatch
            </a>
            <form className="d-flex search-bar" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={handleClick}
              >
                <IoSearchSharp />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
