import React from "react";
import "../../styles/LeaveBoard.css";
import { leaveLenght } from "../../db";
import LeaveTable from "../../componenets/LeaveTable";

const LeaveBoard = () => {
  return (
    <>
      <main className="pt-5 leave-board-wrapper">
        <section className="leave-board-section-1 pt-1">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2 className="task-board-section-1-header">Leaveboard</h2>
              <h5>Dashboard/Leaveboard</h5>
            </div>
          </div>
          <div className="leave-board-section-1-div  pt-5">
            {leaveLenght.map((leave) => {
              const { id, title, count } = leave;

              return (
                <div className="leave-board-wrapper" key={id}>
                  <div className="leave-board-wrapper-inner d-flex justify-content-center">
                    <div className="text-center">

                    <h5>{title} </h5>
                    <h1> {count} </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <LeaveTable/>
        </section>
      </main>
    </>
  );
};

export default LeaveBoard;
