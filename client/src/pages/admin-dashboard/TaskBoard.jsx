import React from "react";
import { taskLenght } from "../../db";
import "../../styles/TaskBoard.css";
import plusSign from "../../assets/plus.svg";
import TaskTable from "../../componenets/TaskTable";

const TaskBoard = () => {
  return (
    <>
      <main className="pt-5 task-board-wrapper">
        <section className="task-board-section-1 pt-1 ">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2 className="task-board-section-1-header">Taskboard</h2>
              <h5>Dashboard/Taskboard</h5>
            </div>
            <div>
              <button className="">
                <img src={plusSign} alt="plus-sign-logo" />
                <span className="ps-1">New Task</span>
              </button>
            </div>
          </div>
          <div className="task-board-section-1-div  pt-5">
            {taskLenght.map((task) => {
              const { id, title, count, img } = task;

              return  (
                <div className="task-board-wrapper" key={id}>
                  <div className="task-board-wrapper-inner d-flex justify-content-between align-items-center">
                    <div className="">
                      <h5> {title} </h5>
                      <h1> {count} </h1>
                    </div>
                    <div>
                      <img src={img} alt="task-img" loading="lazy" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <TaskTable/>
        </section>
      </main>
    </>
  );
};

export default TaskBoard;
