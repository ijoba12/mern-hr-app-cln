import React from 'react';
import Table from "react-bootstrap/Table";
import { employeeLeaveHistory } from '../../db';

const EmployeeLeaveTable = () => {
  return (
    <>
 <main className="employee-table-wrapper employee-table-container mt-4">
        <div className="employee-table">
          <Table responsive="sm" hover role="button">
            <thead className="employee-table-wrapper-head">
              <tr>
                <th>
                  {" "}
                  <h5 className="employee-table-wrapper-h5">Leave Type</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Start Date</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">End Date</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Days</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Status</h5>{" "}
                </th>
              </tr>
            </thead>
            {employeeLeaveHistory.map((employee) => {
              return (
                <tbody key={employee.id} className="employee-table-body">
                  <tr>
                    <td>
                      <div className="d-flex gap-2 align-items-center ">
                    
                        <h6
                          id="employee-table-name"
                          className="employee-table-data pt-1"
                        >
                          {employee.leaveType}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p
                        id="employee-table-email"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee.startDate}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-table-team"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee?.endDate}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        id="employee-table-supervisor"
                        className="employee-table-data"
                      >
                        {" "}
                        {employee?.endDate}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`${
                          employee.status === "Pending"
                            ? "employee-table-orange"
                            : employee.status === "Appproved"
                            ? "employee-table-green"
                            : "employee-table-blue"
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