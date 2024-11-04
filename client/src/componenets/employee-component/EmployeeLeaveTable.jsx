import React from 'react';
import Table from "react-bootstrap/Table";
import { employeeLeaveHistory } from '../../db';
import "../../styles/EmployeeLeaveTable.css"
const EmployeeLeaveTable = () => {
  return (
    <>
 <main className="employee-leave-table-wrapper employee-table-container mt-4">
        <div className="employee-leave-table">
          <Table responsive="sm" hover role="button">
            <thead className="employee-leave-table-wrapper-head">
              <tr>
                <th>
                  {" "}
                  <h5 className="employee-leave-table-wrapper-h5">Leave Type</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-leave-table-wrapper-h5">Start Date</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-leave-table-wrapper-h5">End Date</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-leave-table-wrapper-h5">Days</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-leave-table-wrapper-h5">Status</h5>{" "}
                </th>
              </tr>
            </thead>
            {employeeLeaveHistory.map((employee) => {
              return (
                <tbody key={employee.id} className="employee-leave-table-body">
                  <tr>
                    <td>
                      <div className="d-flex gap-2 align-items-center ">
                    
                        <h6
                          id="employee-table-name"
                          className="employee-leave-table-data pt-1"
                        >
                          {employee.leaveType}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p
                        id="employee-leave-table-email"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee.startDate}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-leave-table-team"
                        className="employee-leave-table-data"
                      >
                        {" "}
                        {employee?.endDate}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-leave-table-supervisor"
                        className="employee-leave-table-data"
                      >
                        {" "}
                        {employee?.endDate}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`${
                          employee.status === "Pending"
                            ? "employee-leave-table-orange"
                            : employee.status === "Appproved"
                            ? "employee-leave-table-green"
                            : "employee-leave-table-blue"
                        }`}
                      >
                        {" "}
                        {employee.status}{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
         
        </div>
      </main>    </>
  )
}

export default EmployeeLeaveTable