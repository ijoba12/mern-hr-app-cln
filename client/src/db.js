import dashboardImg from "./assets/dashboardimg.svg";
import employeesImg from "./assets/employeesimg.svg";
import taskboardImg from './assets/taskboardimg.svg';
import leaveboardImg from "./assets/leaveboardimg.svg";
import payrollImg from "./assets/payrollimg.svg";
import settingsImg from "./assets/settingsimg.svg";
import totalEmployeesImg from "./assets/allEmployees.svg";
import totalTasksImg from "./assets/allTasks.svg";
import totalLeaves from "./assets/allLeaves.svg";
import photo1 from "./assets/taskTeamPhoto.svg";
import photo2 from "./assets/taskTeamPhotoMale.svg";
import photo3 from "./assets/taskTeamPhotoLady.svg";
import photo4 from "./assets/taskTeamPhotoLadyAfro.svg"

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
    path: "employees",
  },
  {
    id: 3,
    Icon: taskboardImg,
    name: "Taskboard",
    path: "taskboard",
  },
  {
    id: 4,
    Icon: leaveboardImg,
    name: "Leaveboard",
    path: "leaveboard",
  },
  {
    id: 5,
    Icon: payrollImg,
    name: "Payroll",
    path: "payroll",
  },
  {
    id: 6,
    Icon: settingsImg,
    name: "Settings",
    path: "settings",
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
export const taskBoardTableData = [
  {
    id:1,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  },
  {
    id:2,
    title:"Productize Beta Testing",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Completed"
  },
  {
    id:3,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"In progress"
  },
  {
    id:4,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  },
  {
    id:5,
    title:"Productize Beta Testing",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Completed"
  },
  {
    id:6,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"In progress"
  },
  {
    id:7,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  }
]


export const allEmployeesList = [
  {
    id:1,
    name:"Raheem Sterling",
    img:photo1,
    email:"raheem@tmt.com",
    team:"Product",
    supervisor:"Eric Ten-Hagg",
    status:"Remote"
  },
  {
    id:2,
    name:"Eggys Eggys",
    img:photo2,
    email:"eggys@tmt.com",
    team:"Product",
    supervisor:"Joshua Zirkzee",
    status:"On-Site"
  },
  {
    id:3,
    name:"Chukwudi Tobiloba",
    img:photo3,
    email:"chtobiloba@tmt.com",
    team:"Marketing",
    supervisor:"Bukayo Saka",
    status:"On-Site"
  },
  {
    id:4,
    name:"Olawole Anita",
    img:photo4,
    email:"olawo999@tmt.com",
    team:"Adminstration",
    supervisor:"Joshua Zirkzee",
    status:"Hybrid"
  },
]
