import React from "react";
import { departments } from "../../db";
import "../../styles/Teams.css"

const Teams = () => {
  console.log(departments);

  return (
    <>
      <main className="teams-wrapper">
        <div className="container-fluid teams-wrapper-div">
          <div className="row justify-content-between gap-5">
            {departments.map((dept) => {
              return (
                <div className="col-lg-5  border p-3 teams-wrapper-map" >
                  <div className="d-flex justify-content-between align-items-center border-bottom border-1">
                    <div>
                      <h4> {dept.name} Department </h4>
                      <p> {dept.employees.length} members</p>
                    </div>
                    <p>view all</p>
                  </div>
                  <div>
                    <div>
                      {dept.employees.map((employee) => {
                        return (
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-2 my-2">
                              <div>
                                <img src={employee.img} alt="" className="img-fluid"  />
                              </div>
                              <div className="d-flex flex-column">
                                <span> {employee.name}</span>
                                <span> {employee.position} </span>
                              </div>
                            </div>
                            <p> {'>'} </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Teams;
