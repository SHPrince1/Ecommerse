import React from "react";
import "../../styles/navbar.css";
import { GiStarFlag, GiStarAltar } from 'react-icons/gi';
const Navbar = () => {
  return (
    <>
      <nav className="navBox">
        <div>
          <ul>
            <li ><a href="#" className="top"> <span><GiStarFlag fill="#0033fe"/></span> <span>Sell on Jumia</span></a></li>
          </ul>
        </div>

        <div className="navItem">
          <ul>
            <li><a href="#" className="navItemLink"> <span><GiStarFlag fill="#0033fe"/></span>JUMIA</a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> <span>< GiStarAltar fill="red"/></span>PARTY </a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> <span>IMG</span>FOOD </a> </li>
          </ul>

          <ul>
            <li> <a href="#" className="navItemLink"><span>IMG</span>PARTY </a></li>
          </ul>

          <ul>
            <li><a href="#" className="navItemLink"> <span>IMG</span>PRIME </a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> <span>IMG</span>LOGISTICS</a> </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
