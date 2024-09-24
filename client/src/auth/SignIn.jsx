import React, { useState } from "react";
import "../styles/SignIn.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import navLogo from "../assets/nav-logo.png";
import { Link, useNavigate } from "react-router-dom";
import vissibilityOnIcon from "../assets/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import vissibilityOffIcon from "../assets/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const SignIn = () => {
  const [isReveal, setIsReveal] = useState(false);
  const navigate = useNavigate()

  function handleSignIn(event) {
    event.preventDefault();
  }
  function toggleReveal() {
    if (isReveal) {
      setIsReveal(false);
    } else {
      setIsReveal(true);
    }
  }

function handleNavigate(){
  navigate('/admin-dashboard')
}
  return (
    <>
      <main className="main-auth sign-in d-flex justify-content-center align-items-center">
        <Form className="sign-in-inner shadow-lg" onSubmit={handleSignIn}>
          <div className="text-center">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div>
                <img src={navLogo} alt="nav-logo" />
              </div>
              <h1 className="pt-2">HR Manager</h1>
            </div>
            <h3 className="pt-4">
              Welcome to HR Manager - Where Creativity Meets Opportunity!
            </h3>
          </div>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              className="input"
              type="email"
              placeholder="Enter email"
            />
            {/* <p>error</p> */}
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <div className="d-flex justify-content-between">
              <Form.Label className="label">Password</Form.Label>
              <Link to="/auth/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="position-relative">
              <img
                onClick={toggleReveal}
                role="button"
                className=" position-absolute end-0 pt-2 pe-1"
                src={isReveal ? vissibilityOffIcon : vissibilityOnIcon}
                alt="eye-open-logo"
              />
              <Form.Control
                className="input"
                type={isReveal ? "text" : "password"}
                placeholder="Password"
              />
              {/* <p>error</p> */}
            </div>
          </Form.Group>
          <Button className="sign-in-btn" variant="primary" type="submit" onClick={handleNavigate}>
            Sign In
          </Button>
        </Form>
      </main>
    </>
  );
};

export default SignIn;
