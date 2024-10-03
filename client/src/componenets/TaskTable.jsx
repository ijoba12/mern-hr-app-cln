import React from "react";
import Table from "react-bootstrap/Table";
import { taskBoardTableData } from "../db";
import "../styles/TaskTable.css";

const TaskTable = () => {
  return (
    <main className="my-5 task-table-wrapper task-table-container">
      <h1 className="pb-4">Taskboard</h1>
      <div className="dd">
        <Table role="button" hover responsive>
          <thead className="task-table-wrapper-head">
            <tr>
              <th>
                <h5 className="task-table-wrapper-h5"># </h5>
              </th>
              <th>
                <h5 className="task-table-wrapper-h5"> Task </h5>
              </th>
              <th>
                <h5 className="task-table-wrapper-h5">Team</h5>
              </th>
              <th>
                <h5 className="task-table-wrapper-h5">Duration</h5>
              </th>
              <th>
                <h5 className="task-table-wrapper-h5">Action</h5>
              </th>
            </tr>
          </thead>
          {taskBoardTableData.map((task) => {
            return (
              <tbody key={task.id} className="task-table-body">
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="task-table-body-check-box"
                      role="button"
                    />
                  </td>
                  <td>
                    <h6 className="task-table-title pt-1">{task.title}</h6>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img src={task.teamPhoto.teamPhoto1} alt="" />
                      <img src={task.teamPhoto.teamPhoto2} alt="" />
                      <img src={task.teamPhoto.teamPhoto3} alt="" />
                      <img src={task.teamPhoto.teamPhoto4} alt="" />
                    </div>
                  </td>
                  <td className="d-flex flex-column">
                    <h6 id="task-table-body-start">
                      Start: {task.duration.start}
                    </h6>
                    <h6 id="task-table-body-end">End: {task.duration.end}</h6>
                  </td>
                  <td>
                    <p
                      className={`${
                        task.action === "Planned"
                          ? "task-table-ation-orange"
                          : task.action === "Completed"
                          ? "task-table-ation-green"
                          : "task-table-ation-blue"
                      }`}
                    >
                      {task.action}
                    </p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </main>
  );
};

export default TaskTable;
