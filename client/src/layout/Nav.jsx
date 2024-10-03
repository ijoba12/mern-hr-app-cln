import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div>
          <h2>Add New Employee</h2>
          <p>All Employees / Add New Employee</p>
          <nav>
            <ul className="list-unstyled d-flex gap-5">
              <li>
                <NavLink to="/admin-dashboard/employees/personal-info">Personal Information</NavLink>
              </li>
              <li>
                <NavLink to="/admin-dashboard/employees/personal-info/professional">Professional</NavLink>
              </li>
              <li>
                <NavLink to="/admin-dashboard/employees/personal-info/salary">Salary</NavLink>
              </li>
              <li>
                <NavLink to="/admin-dashboard/employees/personal-info/user-account">User Account</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Nav