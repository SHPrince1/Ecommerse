import React from "react";
import "../../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navBox">
        <div>
          <ul>
            <li ><a href="#" className="top">Sell on Jumia</a></li>
          </ul>
        </div>

        <div className="navItem">
          <ul>
            <li><a href="#" className="navItemLink"> JUMIA</a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> PARTY </a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> FOOD </a> </li>
          </ul>

          <ul>
            <li> <a href="#" className="navItemLink"> PARTY </a></li>
          </ul>

          <ul>
            <li><a href="#" className="navItemLink"> PRIME </a></li>
          </ul>
          <ul>
            <li> <a href="#" className="navItemLink"> LOGISTICS</a> </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
