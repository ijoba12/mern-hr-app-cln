import React from "react";
import Nav from "../../layout/Nav";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import MyButton from "../../componenets/MyButton";

const UserAccount = () => {
  return (
    <>
     <div>
        <Nav />
        <div className="mt-5 personal-info-wrapper">
            <Form className="container-fluid pt-3">
              <div className="row justify-content-between mb-4">
                <Form.Group
                  className="mb-3 col-lg-6 ps-0 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3 ps-0 col-lg-6"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="text" placeholder="Re Enter Password" />
                </Form.Group>
              </div>
              <div className="row">
              <Form.Group className="col-lg-12  ps-0">
                <MyButton />
              </Form.Group>
            </div>
            </Form>
          </div>
      </div>
    </>
  );
};

export default UserAccount;
