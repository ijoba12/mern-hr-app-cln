import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../styles/NewTeamModal.css";
// import DeptButton from "../componenets/MyButton"

const NewTaskModal = (props) => {
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
            <span> Create New Task</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            {/* assign persons */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Assign Persons</Form.Label>
              <Form.Select id="" className="new-team-wrapper-select">
                <option disabled selected>
                  Select
                </option>
                <option>Product</option>
                <option>Admin</option>
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
            {/* task status */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Task Status</Form.Label>
              <Form.Select id="" className="new-team-wrapper-select">
                <option disabled selected>
                  Select
                </option>
                <option>Product</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex flex-column-reverse flex-md-row gap-3 w-100">
              <Button variant="outline-danger" className="cancel-btn mb-2">
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
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

export default NewTaskModal;
