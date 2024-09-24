import React from "react";
import ladyProfilePic from "../assets/ladyProfilePic.svg";
import messageImg from "../assets/messageImg.png";
import searchImg from "../assets/searchIcon.svg";
import notificationImg from "../assets/notificationImg.svg";
import arrowDown from "../assets/arrowDownAuth.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <form>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="position-relative"
          />
          <img
            className="position-absolute "
            src={searchImg}
            alt="searchImg-image"
          />
        </form>
        <div className="d-flex">
          <div>
            <img src={notificationImg} alt="notifiction-image" />
          </div>
          <div>
            <img src={messageImg} alt="messageImg-image" />
          </div>
          <div className="d-flex">
            <img src={ladyProfilePic} alt="ladyProfilePic-image" />
            <h4>Eggys Eggys</h4>
            <div>
              <img src={arrowDown} alt="arrowDown-image" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
