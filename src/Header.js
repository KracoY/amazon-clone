import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="C:\Users\Ender Yuruk\Desktop\Amazon\amazon-clone\src\assets\amazon_PNG25.png"
          alt="Image not found"
        ></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link className="header__link">
      <div className="header__option">
      <span>Hello G</span>
      <span>Sign in</span>
      </div>
      </Link>
      </div>

    </nav>
  );
}

export default Header;
