import React from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom";
import Nav from "../../layout/Nav";

const PersonalInfo = () => {
  const match = useMatch("/admin-dashboard/employees/personal-info");

  return (
    <>
      {match ? (
        
         <div>
      <Nav/>
      <h2>Lorem ipsum dolor sit.</h2>
         </div>
      
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
