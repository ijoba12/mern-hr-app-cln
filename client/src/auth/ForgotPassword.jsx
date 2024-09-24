import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import navLogo from "../assets/nav-logo.png";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <main className="main-auth forgot-password-container d-flex justify-content-center align-items-center">
        <Form className="forgot-password-inner shadow-lg">
          <div className="">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <div>
                <img src={navLogo} alt="nav-logo" />
              </div>
              <h1 className="pt-2">HR Manager</h1>
            </div>
          </div>
          <Form.Group className="" controlId="formBasicEmail">
            <h3 className="py-2">Forgot password</h3>
            <Form.Control
              className="input"
              type="email"
              placeholder="Enter your email address to reset your password."
            />
            {/* <p>error</p> */}
          </Form.Group>

          <Button
            className="forgot-password-btn"
            variant="primary"
            type="submit"
          >
            Request Password Reset
          </Button>
        </Form>
      </main>
    </>
  );
};

export default ForgotPassword;
