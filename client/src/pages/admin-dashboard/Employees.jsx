import React from "react";
import { Link, Outlet, NavLink, useMatch ,useLocation} from "react-router-dom";
import "../../styles/Employees.css";

const Employees = () => {
  const location = useLocation();
    const isTeamsRoute = location.pathname.includes("/admin-dashboard/employees/teams");
    console.log(location.pathname); 

  return (
    <>
    
        <main className="pt-5 admin-employees-wrapper">
          <section>
            <h2>Employees</h2>
            <h5>Dashboard/Employee</h5>
          </section>
          <nav>
            <ul className="d-flex justify-content-between align-items-center list-unstyled">
              <div className="d-flex gap-4">
                <NavLink to="allemployees" end>
                  {({ isActive }) => (
                    <h6
                      className={`pt-2 nav-link-header d-flex align-items-center gap-2 mb-3 ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      All Employees
                    </h6>
                  )}
                </NavLink>{" "}
                <NavLink to="teams" end>
                  {({ isActive }) => (
                    <h6
                      className={`pt-2 nav-link-header d-flex align-items-center gap-2 mb-3 ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      Teams
                    </h6>
                  )}
                </NavLink>
              </div>

                <button className="newEmployeebtn">
                <Link to={isTeamsRoute ? "/admin-dashboard/employees/new-team" : "/admin-dashboard/employees/personal-info"}>
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
