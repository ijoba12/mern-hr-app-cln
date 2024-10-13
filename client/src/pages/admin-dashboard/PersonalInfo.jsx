import React from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom";
import Nav from "../../layout/Nav";
import "../../styles/PersonalInfo.css";
import Form from "react-bootstrap/Form";
import exclamationImg from "../../assets/exclamation-sign.svg";
import uploadImg from "../../assets/upload-img.svg";
import MyButton from "../../componenets/MyButton";

const PersonalInfo = () => {
  const match = useMatch("/admin-dashboard/employees/personal-info");

  return (
    <>
      {match ? (
        <main>
          <Nav />
          <div className="mt-5 personal-info-wrapper">
            <Form className="container-fluid pt-3">
              <div className="row justify-content-between mb-4">
                <Form.Group
                  className="mb-3 col-lg-6 ps-0 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3 ps-0 col-lg-6"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
              </div>
              {/* mobile and email */}
              <div className="row justify-content-between mb-4">
                <Form.Group
                  className="mb-3 col-lg-6 ps-0 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter Number" />
                </Form.Group>
                <Form.Group
                  className="mb-3 ps-0 col-lg-6"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Email Address" />
                </Form.Group>
              </div>
              {/* date of birth and marital status */}
              <div className="row justify-content-between mb-4">
                <Form.Group
                  className="mb-3 col-lg-6 ps-0 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="date" placeholder="Select Date" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6 ps-0">
                  <Form.Label htmlFor="">Marital Status</Form.Label>
                  <Form.Select id="" className="personal-info-wrapper-select">
                    <option disabled selected hidden>
                      Select
                    </option>
                    <option>Married</option>
                    <option>Single</option>
                  </Form.Select>
                </Form.Group>
              </div>
              {/* gender and address */}
              <div className="row justify-content-between mb-4">
                <Form.Group className="mb-3 col-lg-6 ps-0">
                  <Form.Label htmlFor="">Gender</Form.Label>
                  <Form.Select id="" className="personal-info-wrapper-select">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6 ps-0"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
              </div>
              <div className="">
                <h3>Thumbnail</h3>
                <div className="d-flex gap-2 align-items-center">
                  <img src={exclamationImg} alt="" />
                  <p className="pt-3">
                    This image will appear in the explore page, upload a square
                    size of 2mb
                  </p>
                </div>
                <div className="position-relative">
                  <img src={uploadImg} alt="" />
                  <input
                    type="file"
                    style={{ maxWidth: "17%", marginTop: "5px" }}
                    className=" position-absolute top-50 start-0 translate-middle-y opacity-0"
                    role="button"
                  />
                </div>
              </div>
              <div className="mt-4 d-flex gap-3">
                <MyButton/>
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
