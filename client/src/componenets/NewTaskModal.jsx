import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../styles/NewTeamModal.css";
import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";
// import { Loader } from "../utils/Loader";


const NewTaskModal = (props) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [assignedMembers, setAssignedMembers] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const token = localStorage.getItem("hr-token");
  const [isSubmitting,setIsSubmitting] = useState(false)

  useEffect(() => {
    if (searchQuery) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4040/api/employee/users/search?query=${searchQuery}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setSuggestions(response.data.users);
        } catch (error) {
          // console.error("Error fetching user suggestions:", error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleAddMember = (member) => {
    if (!assignedMembers.some((m) => m._id === member._id)) {
      setAssignedMembers([...assignedMembers, member]);
      setSearchQuery("");
      setSuggestions([]);
    }else{

      toast.error("member already added")
    }
  };
  const handleRemoveMember = (memberToRemove) => {
    setAssignedMembers(
      assignedMembers.filter((member) => member._id !== memberToRemove._id)
    );
  };
  const newTask = {
    title,
    description,
    assignedMembers: assignedMembers.map((member) => member._id),
    startDate,
    endDate,
    status,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true)
      const req = await axios.post(
        "http://localhost:7030/api/task/tasks",
        newTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (req.data.success) {
        toast.success(req?.data?.message);
        setTitle([]);
        setDescription([]);
        setAssignedMembers([]);
        setEndDate("");
        setStartDate("");
        setStatus("");
        setSearchQuery("");
        setSuggestions([]);
      }
      // console.log(req.data);
    } catch (error) {
      // console.error("Error creating task:", error.response.data.errMsg);
      toast.error(error?.response?.data?.errMsg);
    }finally{
      setIsSubmitting(false)
    }
  };
  function reset() {
    setTitle([]);
    setDescription([]);
    setAssignedMembers([]);
    setEndDate("");
    setStartDate("");
    setStatus("");
    setSearchQuery("");
    setSuggestions([]);
  }
  const btnText = isSubmitting ? <LoaderIcon/> : "Save";

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            {/* assign persons */}
            <Form.Group className="mb-3">
              <Form.Label>Assign Persons</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search for employees"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Suggestions List */}
              {suggestions.length > 0 && (
                <ul className="suggestions-list" role="button">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion._id}
                      onClick={() => handleAddMember(suggestion)}
                    >
                      {suggestion.firstName} {suggestion.lastName}
                    </li>
                  ))}
                </ul>
              )}
              {/* Display Added Members */}
              <div className="assigned-members">
                {assignedMembers.map((member) => (
                  <span key={member._id} className="assigned-member">
                    {member.firstName} {member.lastName}
                    <span
                      onClick={() => handleRemoveMember(member)}
                      className="text-danger"
                    >
                      <CiCircleRemove fontSize={15} className="mb-2" role="button"/>
                    </span>
                  </span>
                ))}
              </div>
            </Form.Group>
            {/* start and end date */}
            {/* Start and End Date */}
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            {/* Task Status */}
            <Form.Group className="mb-3" controlId="taskStatus">
              <Form.Label>Task Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="Planned">Planned</option>
                <option value="In progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex flex-column-reverse flex-md-row gap-3 w-100">
              <Button
                onClick={reset}
                variant="outline-danger"
                className="cancel-btn mb-2"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="save-and-continue-btn"
               disabled={setIsSubmitting}
              >
                {btnText}
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
