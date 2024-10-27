import React from "react";
import "../../styles/Settings.css";
import Form from "react-bootstrap/Form";
import profilePic from "../../assets/taskTeamPhotoLady.svg";
import MyButton from "../../componenets/MyButton";

const Settings = () => {
  return (
    <>
      <main className="pt-5 settings-wrapper">
        <section className="settings-section-1 pt-1">
          <h2 className="settings-section-1-header">Settings</h2>
          <h5>Dashboard/Settings</h5>
        </section>
        <section className="container settings-section-2 mt-4">
            <Form>
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h2 className="settings-section-2-h2">Profile Information</h2>
              <h5 className="settings-section-2-h5">Edit your profile information</h5>
            </div>
            <div className="col-md-7">
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="settings-form-label" >Full Name</Form.Label>
                  <Form.Control className="section-form-input" type="text" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="settings-form-label" >Email Address</Form.Label>
                  <Form.Control className="section-form-input" type="email" placeholder="name@example.com" />
                </Form.Group>
               
                </div>
            </div>
          </div>
          {/* security */}
          <div className="row pt-4 justify-content-between">
            <div className="col-md-4">
              <h2 className="settings-section-2-h2">Security</h2>
            </div>
            <div className="col-md-7">
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="settings-form-label" >Password</Form.Label>
                  <Form.Control className="section-form-input" type="password" placeholder="name@example.com" />
                </Form.Group>
              </div>
            </div>
          </div>
          {/* upload photo */}
          <div className="row pt-4 justify-content-between">
            <div className="col-md-4">
              <h2 className="settings-section-2-h2">Upload Photo</h2>
            </div>
            <div className="col-md-7">
              <div>
                <h6>Profile pic</h6>
                <img src={profilePic} alt="profile-pic" />
                <p>Your profile pic will be visible next to your name in your profile.  Your image should be at least 200x200px and must be in JPG or PNG format.</p>
              </div>
              <div className="mt-4">
                <MyButton/>
              </div>
            </div>
          </div>

          </Form>
        </section>
      </main>
    </>
  );
};

export default Settings;
