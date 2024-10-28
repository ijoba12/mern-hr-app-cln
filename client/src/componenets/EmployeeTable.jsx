import React,{useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import { allEmployeesList } from "../db";
import "../styles/EmployeeTable.css";
import chevronRight from "../assets/chevron right.svg";
import chevronLeft from "../assets/chevron-left.svg";
import axios from "axios";

const EmployeeTable = ({ Name, Email, Team, Supervisor, Status }) => {
  const [employees, setEmployees] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const token = localStorage.getItem("hr-token"); 
  const fetchEmployees = async () => {
    setLoading(true); // 
    try {
      const response = await axios.get(`https://mern-hr-app.onrender.com/api/employee/users?page=${page}&limit=10`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
     console.log(response.data.users);
     setEmployees(response.data.users); 
      setTotalPages(response.data.totalPages); 
     
    } catch (err) {
      setError(err.response?.data.errMsg || "Error fetching employees");
    } finally {
      setLoading(false); 
    }
  };

   // Pagination handlers
   const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
useEffect(()=>{
  fetchEmployees()
},[page])
if (loading) return <p>Loading...</p>; 
if (error) return <p>{error}</p>; 
  return (
    <>
      <main className="employee-table-wrapper employee-table-container">
        <div className="employee-table">
          <Table responsive="sm" hover role="button">
            <thead className="employee-table-wrapper-head">
              <tr>
                <th>
                  {" "}
                  <h5 className="employee-table-wrapper-h5">Name</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Email</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Dept</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Supervisor</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Status</h5>{" "}
                </th>
              </tr>
            </thead>
            {employees.map((employee) => {
              return (
                <tbody key={employee._id} className="employee-table-body">
                  <tr>
                    <td>
                      <div className="d-flex gap-2 align-items-center ">
                        <img src={employee.profileImage} alt="" className="employee-profile-image" />
                        <h6
                          id="employee-table-name"
                          className="employee-table-data pt-1"
                        >
                          {`${employee.firstName} ${employee.lastName}`}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p
                        id="employee-table-email"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee.email}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-table-team"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee?.department?.name}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-table-supervisor"
                        className="employee-table-data"
                      >
                        {" "}
                        {/* {employee?.department?.manager}{" "} */}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`${
                          employee.employmentStatus === "remote"
                            ? "employee-table-orange"
                            : employee.employmentStatus === "on-site"
                            ? "employee-table-green"
                            : "employee-table-blue"
                        }`}
                      >
                        {" "}
                        {employee.employmentStatus}{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
        <div className="employee-table-pagination-wrapper row justify-content-between align-items-center">
          <div className="col-lg-6 mt-3 d-flex justify-content-between ">
            <p>10 Entries per page</p>
            <p>Page {page} of {totalPages}</p>
          </div>
          <div className="col-lg-4 d-flex gap-5">
            <button onClick={handlePrev} disabled={page === 1} className="w-50" role="button"> <span  className="me-2 "><img src={chevronLeft} alt="" /></span> Prev</button>
            <button role="button" onClick={handleNext} disabled={page === totalPages} className="w-50">Next <span className="ms-2"><img src={chevronRight} alt="" /></span> </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmployeeTable;
