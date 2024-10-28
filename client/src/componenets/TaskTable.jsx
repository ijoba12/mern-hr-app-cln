import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { taskBoardTableData } from "../db";
import "../styles/TaskTable.css";
import axios from "axios";
import { Loader } from "../utils/Loader";

const TaskTable = () => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("hr-token");

  const getTasks = async()=>{
    try {
      setIsLoading(true)
      setError(null); 

      const req = await axios.get("https://mern-hr-app.onrender.com/api/task",{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(req.data.tasks);
      setData(req.data.tasks)
    } catch (error) {
      setError('Error fetching tasks');
      console.error(error);
    }finally{
      setIsLoading(false)
    }
  }
  useEffect(()=>{
    getTasks()
  },[])
  if (isLoading) {
    return <div className="vh-100 d-flex justify-content-center"> <Loader/> </div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  return (
    <main className="my-5 task-table-wrapper task-table-container">
      <h1 className="pb-4">Taskboard</h1>
      <div className="task-table">
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
          {data.map((task) => {
            return (
              <tbody key={task._id} className="task-table-body">
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="task-table-body-check-box"
                      role="button"
                    />
                  </td>
                  <td>
                    <h6 className="task-table-title pt-1">{task?.title}</h6>
                  </td>
                  <td>
                    <div className="d-flex">
                      {/* <img src={task.teamPhoto.teamPhoto1} alt="" />
                      <img src={task.teamPhoto.teamPhoto2} alt="" />
                      <img src={task.teamPhoto.teamPhoto3} alt="" />
                      <img src={task.teamPhoto.teamPhoto4} alt="" /> */}
                      {task?.assignedMembers.map((img)=>{
                        return(
                          <div key={img?._id}>

                            <img src={img?.profileImage} alt=""  className="task-profile-img" />
                          </div>
                        )
                      })}
                    </div>
                  </td>
                  <td className="d-flex flex-column">
                    <h6 id="task-table-body-start">
                      Start: {task?.startDate.slice(0,10)}
                    </h6>
                    <h6 id="task-table-body-end">End: {task?.endDate.slice(0,10)}</h6>
                  </td>
                  <td>
                    <p
                      className={`${
                        task.status === "Planned"
                          ? "task-table-ation-orange"
                          : task.status === "Completed"
                          ? "task-table-ation-green"
                          : "task-table-ation-blue"
                      }`}
                    >
                      {task?.status}
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
