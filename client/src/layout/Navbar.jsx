import React, { useState } from "react";
import ladyProfilePic from "../assets/ladyProfilePic.svg";
import messageImg from "../assets/messageImg.png";
import searchImg from "../assets/searchIcon.svg";
import notificationImg from "../assets/notificationImg.svg";
import arrowDown from "../assets/arrowDownAuth.svg";
import "../styles/Navbar.css";
import AuthDropDown from "../componenets/AuthDropDown";
import OffCanvass from "../componenets/OffCanvass";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  function handleReveal() {
    isTrue ? setIsTrue(false) : setIsTrue(true);
  }
  return (
    <>
      <nav className="d-flex justify-content-between gap-5 sticky-top bg-light">
        <div className="d-md-none">
          {["start"].map((placement, idx) => (
            <OffCanvass key={idx} placement={placement} name={placement} />
          ))}
        </div>
        <form className="nav-form position-relative d-none d-md-block">
          <input
            // type="search"
            name=""
            id=""
            placeholder="Search"
            
          />
          <img
            className="position-absolute top-50 end-0 translate-middle-y pe-2"
            src={searchImg}
            alt="searchImg-image"
          />
        </form>
        <div className="nav-div d-flex gap-4 align-items-center">
          <div>
            <img
              src={notificationImg}
              alt="notifiction-image"
              className="d-none d-lg-block"
            />
          </div>
          <div>
            <img
              src={messageImg}
              alt="messageImg-image"
              className="d-none d-lg-block"
            />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div>
              <img
                src={ladyProfilePic}
                alt="ladyProfilePic-image"
                className=""
              />
            </div>
            {/* <h4 className="d-none d-lg-block">Eggys Eggys</h4> */}
            <Dropdown className="d-none d-lg-block" >
              <Dropdown.Toggle variant="" id="dropdown-basic " className="drop-down-header">
                Eggys Eggys
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1"className="text-danger" >Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <img
              onClick={handleReveal}
              role="button"
              src={arrowDown}
              alt="arrowDown-image"
              className="mb-1 d-none d-lg-block"
            /> */}
          </div>
        </div>
      </nav>
      {/* <div className="position-absolute end-0 me-5 pe-1">
        {isTrue && <AuthDropDown />}
      </div> */}
    </>
  );
};

export default Navbar;
