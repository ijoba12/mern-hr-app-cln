import React from "react";
import { Link, Outlet, NavLink, useMatch ,useLocation} from "react-router-dom";
import "../../styles/Employees.css";
import plusSign from "../../assets/plus-sign-new-task.svg"

const Employees = () => {
  const location = useLocation();
    const isTeamsRoute = location.pathname.includes("/admin-dashboard/employees/teams");
    console.log(location.pathname); 

  return (
    <>
    
        <main className="pt-5 admin-employees-wrapper">
          <section className="pb-4 admin-employees-section">
            <h2>Employee</h2>
            <h5>Dashboard/Employee</h5>
          </section>
          <nav>
            <ul className="d-flex justify-content-between align-items-center list-unstyled">
              <div className="d-flex gap-4">
                <NavLink to="allemployees" end className="admin-employees-nav-link">
                  {({ isActive }) => (
                    <h6
                      className={`pt-3 nav-link-header d-flex align-items-center gap-2 mb-3 ${
                        isActive ? "is-active" : ""
                      } pb-3`}
                    >
                      All Employees
                    </h6>
                  )}
                </NavLink>{" "}
                <NavLink to="teams" end className="admin-employees-nav-link">
                  {({ isActive }) => (
                    <h6
                      className={`pt-3 nav-link-header d-flex align-items-center gap-2 mb-3 ${
                        isActive ? "is-active" : ""
                      } pb-3`}
                    >
                      Teams
                    </h6>
                  )}
                </NavLink>
              </div>

                <button className="new-employee-btn d-flex gap-2 justify-content-center align-items-center">
                  <img src={plusSign} alt="" />
                <Link className="new-employee-link" to={isTeamsRoute ? "/admin-dashboard/employees/new-team" : "/admin-dashboard/employees/personal-info"}>
                {isTeamsRoute ? "New Team" : "New Employee"}
              </Link>
                </button>
            </ul>
          </nav>
        </main>

        <Outlet />
    
    </>
  );
};

export default Employees;
