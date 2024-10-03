import React from "react";
import "../styles/AdminSummary.css";
import { eventLenght } from "../db";
import TaskTable from "./TaskTable";

const AdminSummary = () => {
  return (
    <>
      <main className="pt-5 admin-summary-wrapper">
        <section className=" admin-summary-section-1 pt-1 ">
          <h1 className="admin-summary-section-1-header">Dashboard</h1>
          <div className="admin-summary-section-1-div justify-content-between align-items-center pt-5">
            {eventLenght.map((event) => {
              const {id,title,count,img} = event
              return (
                <div className="admin-summary-event-wrapper" key={id}>
                  <div className="admin-summary-event-wrapper-inner d-flex justify-content-between align-items-center">
                    <div className="">
                      <h5> {title} </h5>
                      <h1> {count} </h1>
                    </div>
                    <div>
                      <img src={img} alt="event-img" loading="lazy" />
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

export default AdminSummary;
