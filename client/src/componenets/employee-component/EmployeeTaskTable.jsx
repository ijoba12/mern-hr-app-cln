import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";
import { employeetaskBoardTableData } from '../../db';

const EmployeeTaskBoard = () => {
  return (
    <>
      <main className="my-5 task-table-wrapper task-table-container">
      <h1 className="pb-4">Taskboards</h1>
     <div>
     <Table role="button"  responsive>
          <thead className="task-table-wrapper-head">
            <tr>
              {/* <th>
                <h5 className="task-table-wrapper-h5"># </h5>
              </th> */}
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
          {employeetaskBoardTableData.map((task) => {
            return (
              <tbody key={task._id} className="task-table-body">
                
                <tr>
                  {/* <td>
                    <input
                      type="checkbox"
                      className="task-table-body-check-box"
                      role="button"
                    />
                  </td> */}
                  <td>
                    <h6 className="task-table-title pt-1">{task?.title}</h6>
                  </td>
                  <td>
                    <div className="d-flex">
                      <img src={task.teamPhoto.teamPhoto1} alt="" />
                      <img src={task.teamPhoto.teamPhoto2} alt="" />
                      <img src={task.teamPhoto.teamPhoto3} alt="" />
                      <img src={task.teamPhoto.teamPhoto4} alt="" />
                      {/* {task?.assignedMembers.slice(0,2).map((img)=>{
                        return(
                          <div key={img?._id}>
                            <div className="task-profile-img">

                            <img src={img?.profileImage} alt=""   />
                            </div>
                          </div>
                        )
                      })} */}
                    </div>
                  </td>
                  <td className="d-flex flex-column">
                    <h6 id="task-table-body-start">
                      Start: {task?.duration.start}
                    </h6>
                    <h6 id="task-table-body-end">End: {task?.duration.end}</h6>
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
                      {task?.action}
                    </p>
                  </td>
                  <div className="d-flex gap-2">

                  <p className="text-success" role="button" >view</p>
                  <p className="text-danger" role="button">delete</p>
                  </div>
                </tr>
              </tbody>
            );
          })}
        </Table>
     </div>
    </main>
    </>
  )
}

export default EmployeeTaskBoard