import React from "react";
import "../../styles/EMployeeSummary.css";
import plusSign from "../../assets/plus.svg";
import { Link } from "react-router-dom";
import { employeeSummaryLenght } from "../../db";
const EmployeeSummary = () => {
  return (
    <>
      <main className="pt-5 employee-summary-wrapper">
        <section className="employee-summary-section-1 pt-1 ">
          <div className="d-flex justify-content-between flex-wrap align-items-center">

          <h1 className="employee-summary-section-1-header">Dashboard</h1>
          <button className="request-leave-btn d-flex gap-2 justify-content-center align-items-center">
            <img src={plusSign} alt="" />
            <Link  className="request-leave-link">
              Request Leave
            </Link>
          </button>
          </div>
          <div className="employee-summary-section-1-div justify-content-between align-items-center pt-5">
            {employeeSummaryLenght?.map((event) => {
              const {id,title,count,img} = event
              return (
                <div className="employee-summary-event-wrapper" key={id}>
                  <div className="employee-summary-event-wrapper-inner d-flex justify-content-between align-items-center">
                    <div className="">
                      <h5> {title} </h5>
                      <h1> {count} </h1>
                    </div>
                    <div>
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default EmployeeSummary;
