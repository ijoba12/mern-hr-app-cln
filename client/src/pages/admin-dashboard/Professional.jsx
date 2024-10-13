import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../layout/Nav";
import Form from "react-bootstrap/Form";
import MyButton from "../../componenets/MyButton";


const Professional = () => {
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
                  <Form.Label>Office of Employment</Form.Label>
                  <Form.Control type="text" placeholder="Enter" />
                </Form.Group>
                <Form.Group
                  className="mb-3 ps-0 col-lg-6"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Title" />
                </Form.Group>
              </div>
              
              
              {/* gender and address */}
              <div className="row justify-content-between mb-4">
                <Form.Group className="mb-3 col-lg-6 ps-0">
                  <Form.Label htmlFor="">Department</Form.Label>
                  <Form.Select id="" className="personal-info-wrapper-select">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Product</option>
                    <option>Admin</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6 ps-0">
                  <Form.Label htmlFor="">Employment Status</Form.Label>
                  <Form.Select id="" className="personal-info-wrapper-select">
                    <option disabled selected>
                      Select
                    </option>
                    <option>On-Site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </Form.Select>
                </Form.Group>
              </div>
           
              <div className="mt-4 d-flex gap-3">
                <MyButton/>
              </div>
            </Form>
          </div>
      </div>
    </>
  );
};

export default Professional;
