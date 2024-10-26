import React from "react";
import Table from "react-bootstrap/Table";
import { allLeaveList } from "../db";
import "../styles/LeaveTable.css";


const LeaveTable = ({ Name, Email, Team, Supervisor, Status }) => {
  return (
    <>
      <main className="employee-table-wrapper employee-table-container mt-5">
        <div className="employee-table">
          <Table responsive="sm" hover role="button">
            <thead className="employee-table-wrapper-head">
              <tr>
                <th>
                  <h5 className="employee-table-wrapper-h5">Name</h5>{" "}
                </th>
                <th className="">
                  <h5 className="employee-table-wrapper-h5 ">Leave Type</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Duration</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Days</h5>{" "}
                </th>
                <th>
                  <h5 className="employee-table-wrapper-h5">Status</h5>{" "}
                </th>
              </tr>
            </thead>
            {allLeaveList.map((leave) => {
              return (
                <tbody key={leave.id} className="employee-table-body">
                  <tr>
                    <td>
                      <div className="d-flex gap-2 align-items-center ">
                        <img src={leave.img} alt="" />
                        <h6
                          id="employee-table-name"
                          className="employee-table-data pt-1"
                        >
                          {" "}
                          {leave.name}{" "}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <p
                        id="employee-table-email"
                        className="employee-table-data"
                      >
                        {" "}
                        {leave.leaveType}{" "}
                      </p>
                    </td>
                    <td className="d-flex flex-column">
                    <h6 id="task-table-body-start">
                      Start: {leave.duration.start}
                    </h6>
                    <h6 id="task-table-body-end">End: {leave.duration.end}</h6>
                  </td>
                    <td>
                      <p
                        id="employee-table-supervisor"
                        className="employee-table-data"
                      >
                        {" "}
                        {leave.days}{" "}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`${
                          leave.status === "Remote"
                            ? "employee-table-orange"
                            : leave.status === "On-Site"
                            ? "employee-table-green"
                            : "employee-table-blue"
                        }`}
                      >
                        {" "}
                        {leave.status}{" "}
                      </p>
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

export default LeaveTable;
