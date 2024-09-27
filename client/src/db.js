import dashboardImg from "./assets/dashboardimg.svg";
import employeesImg from "./assets/employeesimg.svg";
import taskboardImg from './assets/taskboardimg.svg';
import leaveboardImg from "./assets/leaveboardimg.svg";
import payrollImg from "./assets/payrollimg.svg";
import settingsImg from "./assets/settingsimg.svg";
import totalEmployeesImg from "./assets/allEmployees.svg";
import totalTasksImg from "./assets/allTasks.svg";
import totalLeaves from "./assets/allLeaves.svg";

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


export const eventLenght = [
  {
    id:1,
    title:"Total Employees",
    count:24,
    img:totalEmployeesImg
  },
  {
    id:2,
    title:"Total Tasks",
    count:107,
    img:totalTasksImg
  },
  {
    id:3,
    title:"Current Leaves",
    count:15,
    img:totalLeaves
  },
]
