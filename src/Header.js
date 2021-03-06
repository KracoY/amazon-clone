import React from "react";
import "./stylesheets/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasketRounded } from "@mui/icons-material";
import { UseStateValue } from "./StateProvider";
import logo from './logolightGreen.svg'


function Header() {
  const [{ basket }, dispatch] = UseStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="not found"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hallo Ender</span>
            <span className="header__optionLineTwo">Log in</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Retour &</span>
            <span className="header__optionLineTwo">Bestellingen</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Uw</span>
            <span className="header__optionLineTwo">Prime </span>
          </div>
        </Link>

        <Link to="/contact" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Contact</span>
            <span className="header__contact">Contact</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketRounded />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
