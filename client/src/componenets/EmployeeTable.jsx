import React from "react";
import Table from "react-bootstrap/Table";
import { allEmployeesList } from "../db";
import "../styles/EmployeeTable.css"

const EmployeeTable = ({ Name, Email, Team, Supervisor, Status }) => {
  return (
    <>
      <main className="employee-table-wrapper employee-table-container">
        <div className="employee-table">
          <Table responsive="sm" hover role="button">
            <thead className="employee-table-wrapper-head">
              <tr>
                <th> <h5 className="employee-table-wrapper-h5">Name</h5> </th>
                <th><h5 className="employee-table-wrapper-h5">Email</h5> </th>
                <th><h5 className="employee-table-wrapper-h5">Team</h5> </th>
                <th><h5 className="employee-table-wrapper-h5">Supervisor</h5> </th>
                <th><h5 className="employee-table-wrapper-h5">Status</h5> </th>
              </tr>
            </thead>
            {allEmployeesList.map((employee) => {
              return (
                  <tbody key={employee.id} className="employee-table-body">
                    <tr>
                      <td>
                        <div className="d-flex gap-2 align-items-center ">
                          <img src={employee.img} alt="" />
                          <h6 id="employee-table-name" className="employee-table-data pt-1"> {employee.name} </h6>
                        </div>
                      </td>
                      <td> 
                        <p id="employee-table-email" className="employee-table-data"> {employee.email} </p>
                      </td>
                      <td>
                        <p id="employee-table-team" className="employee-table-data"> {employee.team} </p>
                      </td>
                      <td> 
                        <p id="employee-table-supervisor" className="employee-table-data"> {employee.supervisor} </p>
                      </td>
                      <td>
                        <p className={`${
                        employee.status === "Remote"
                          ? "employee-table-orange"
                          : employee.status === "On-Site"
                          ? "employee-table-green"
                          : "employee-table-blue"
                      }`}> {employee.status} </p>
                      </td>
                    </tr>
                  </tbody>
              );
            })}
          </Table>
        </div>
      </main>
    </>
  );
};

export default EmployeeTable;
