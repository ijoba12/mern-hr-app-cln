import React from "react";
import Table from "react-bootstrap/Table";
import { allLeaveList } from "../db";
import "../styles/LeaveTable.css";


const LeaveTable = ({ Name, Email, Team, Supervisor, Status }) => {
  return (
    <>
      <main className="leave-table-wrapper leave-table-container my-5 w-100">
        <div className="leave-table">
          <Table responsive hover role="button">
            <thead className="leave-table-wrapper-head">
              <tr>
                <th>
                  <h5 className="leave-table-wrapper-h5">Name</h5>{" "}
                </th>
                <th className="" >
                  <h5 className="leave-table-wrapper-h5 leave-tabel-sm">Leave Type</h5>{" "}
                </th>
                <th>
                  <h5 className="leave-table-wrapper-h5">Duration</h5>{" "}
                </th>
                <th>
                  <h5 className="leave-table-wrapper-h5">Days</h5>{" "}
                </th>
                <th>
                  <h5 className="leave-table-wrapper-h5">Status</h5>{" "}
                </th>
              </tr>
            </thead>
            {allLeaveList.map((leave) => {
              return (
                <tbody key={leave.id} className="leave-table-body">
                  <tr>
                    <td>
                      <div className="d-flex gap-2 align-items-center ">
                        <img src={leave.img} alt="" />
                        <h6
                          id="leave-table-name"
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
                    <h6 id="leave-table-body-start">
                      Start: {leave.duration.start}
                    </h6>
                    <h6 id="leave-table-body-end">End: {leave.duration.end}</h6>
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
                          leave.status === "Pending"
                            ? "leave-table-orange"
                            : leave.status === "Approved"
                            ? "leave-table-green"
                            : "leave-table-red"
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
