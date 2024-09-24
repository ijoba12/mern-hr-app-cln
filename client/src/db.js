import dashboardImg from "./assets/dashboardimg.svg";
import employeesImg from "./assets/employeesimg.svg";
import taskboardImg from './assets/taskboardimg.svg';
import leaveboardImg from "./assets/leaveboardimg.svg";
import payrollImg from "./assets/payrollimg.svg";
import settingsImg from "./assets/settingsimg.svg";

export const sidebarLinks = [
  {
    id: 1,
    Icon: dashboardImg,
    name: "Dashboard",
    path: "",
  },
  {
    id: 2,
    Icon: employeesImg,
    name: "Employees",
    path: "/admin-dashboard/employees",
  },
  {
    id: 3,
    Icon: taskboardImg,
    name: "Taskboard",
    path: "/admin-dashboard/taskboard",
  },
  {
    id: 4,
    Icon: leaveboardImg,
    name: "Leaveboard",
    path: "/admin-dashboard/leaveboard",
  },
  {
    id: 5,
    Icon: payrollImg,
    name: "Payroll",
    path: "/admin-dashboard/payroll",
  },
  {
    id: 6,
    Icon: settingsImg,
    name: "Settings",
    path: "/admin-dashboard/settings",
  },
];
