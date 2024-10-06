import React from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom";
import Nav from "../../layout/Nav";
import "../../styles/PersonalInfo.css";
import Form from "react-bootstrap/Form";

const PersonalInfo = () => {
  const match = useMatch("/admin-dashboard/employees/personal-info");

  return (
    <>
      {match ? (
        <main>
          <Nav />
          <div className="mt-5">
            <Form className="container pt-3">
              <div className="row justify-content-between">
                <Form.Group
                  className="mb-3 col-lg-6 ps-0 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3 px-0 col-lg-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </div>
            </Form>
          </div>
        </main>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
