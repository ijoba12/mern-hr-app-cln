import React from "react";
import { sidebarLinks } from "../../db";
import appLogo from "../../assets/nav-logo.png";
import arrowUp from "../../assets/arrow-up-logo.svg";
import arrowDown from "../../assets/arrow-down-logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/AdminDashboard.css"
import Navbar from "../../layout/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <main className="container-fluid admin-dashoard">
        {/* main-section */}
        <section className="admin-dashoard-main">
          {/* section-1 */}
          <section className="admin-dashboard-section-1">
            <div>
              <div>
                <img src={appLogo} alt="app-logo" />
              </div>
              <div>
                <h1>HR Manager</h1>
                <p>hrmanager@yahoo.com</p>
              </div>
              <div>
                <div>
                  <img src={arrowUp} alt="arrow-up-logo" />
                </div>
                <div>
                  <img src={arrowDown} alt="arrow-down-logo" />
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div>
              <h3>MAIN MENU</h3>
              <div>
                {sidebarLinks.map((sidebarLinks) => {
                  const { id, path, Icon, name } = sidebarLinks;
                  return (
                    
                      <section key={id} className="">
                        <NavLink
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          }
                          to={path}
                          end
                        >

                          <img src={Icon} alt={name} />
                          <h6>{name}</h6>
                        </NavLink>
                      </section>
                  
                  );
                })}
              </div>
            </div>
          </section>
          {/* section-2 */}
          <section className="admin-dashboard-section-2">
            <Navbar/>
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
