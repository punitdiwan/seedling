import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[show,setShow] = useState(false);

  return (
    <>
    <div className="menu-bar">
    <div class="menu-bar-row" onClick={()=>setShow(!show)}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><a href="#">ABOUT</a>
            <div class="dropdown-menu">
              <ul>
                <li><Link to="/ourSchool">OUR SCHOOL</Link></li>
                <li><Link to="/director">DIRECTOR MESSAGE</Link></li>
                <li><Link to="/principal">PRINCIPAL MESSAGE</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/academic">ACADEMIC</Link>
           {/* <div class="dropdown-menu">
              <ul>
                <li><a href="#">SENIOR SCHOOL</a></li>
                <li><a href="#">JUNIOR School</a></li>
                <li><a href="#">MIDDLE SCHOOL</a></li>
                <li><a href="#">CBSE ACTIVITIES</a></li>
              </ul>
            </div> */}
          </li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/facilities">FACILITIES</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
