import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


const LeaveModal = (props) => {
    return (
      <>
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="new-team-wrapper"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <span> Leave Request</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* task status */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="">Leave Type</Form.Label>
                <Form.Select id="" className="new-team-wrapper-select">
                  <option disabled selected>
                    Select
                  </option>
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                </Form.Select>
              </Form.Group>
             
             
              {/* start and end date */}
              <div className="container-fluid mb-4">
              <div className='row justify-content-between'>
  
                  <Form.Group
                    className="mb-3 col-lg-6 ps-0"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-lg-6 px-0 "
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" />
                  </Form.Group>
              </div>
                </div>
                <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
             
              <div className="d-flex flex-column-reverse flex-md-row justify-content-between w-100">
                <Button variant="outline-danger" className="cancel-btn mb-2">
                  Cancel
                </Button>
                <Button
                  variant="primary"
                //   type="submit"
                  className="save-and-continue-btn"
                >
                  Save
                </Button>
              </div>
            </Form>
          </Modal.Body>
  
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal>
      </>
    );
  };

export default LeaveModal