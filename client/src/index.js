import { lazy } from "react";

const SignIn = lazy(() => import("./auth/SignIn"));
const ForgotPassword = lazy(() => import("./auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./auth/ResetPassword"));
const AdminDashboard = lazy(() => import("./layout/AdminDashboard"));
const AdminSummary = lazy(() => import("./componenets/AdminSummary"));
const Employees = lazy(() => import("./pages/admin-dashboard/Employees"));
const TaskBoard = lazy(() => import("./pages/admin-dashboard/TaskBoard"));
const LeaveBoard = lazy(() => import("./pages/admin-dashboard/LeaveBoard"));
const PayRoll = lazy(() => import("./pages/admin-dashboard/PayRoll"));
const Settings = lazy(() => import("./pages/admin-dashboard/Settings"));
const Error = lazy(() => import("./pages/Error"));
const AllEmployees = lazy(() => import("./pages/admin-dashboard/AllEmployees"));
const Teams = lazy(() => import("./pages/admin-dashboard/Teams"));
const NewEmployee = lazy(() => import("./pages/admin-dashboard/NewEmployee"));
const PersonalInfo = lazy(() => import("./pages/admin-dashboard/PersonalInfo"));
const Salary = lazy(() => import("./pages/admin-dashboard/Salary"));
const Professional = lazy(() => import("./pages/admin-dashboard/Professional"));
const UserAccount = lazy(() => import("./pages/admin-dashboard/UserAccount"));
const NewTeam = lazy(() => import("./pages/admin-dashboard/NewTeam"));
const EditTeam = lazy(() => import("./pages/admin-dashboard/EditTeam"));
const EmployeeDashboard = lazy(() => import("./layout/EmployeeDashboard"));
const EmployeeTaskBoard = lazy(() => import("./pages/employee-dashboard/EmployeeTaskBoard"));
const EmployeeLeaveBoard = lazy(() => import("./pages/employee-dashboard/EmployeeLeaveBoard"));
const EmployeeSettings = lazy(() => import("./pages/employee-dashboard/EmployeeSettings"));
const EmployeeSummary = lazy(() => import("./componenets/employee-component/EmployeeSummary"));



export {
    SignIn,
    ForgotPassword,
    ResetPassword,
    AdminDashboard,
    AdminSummary,
    Employees,
    TaskBoard,
    LeaveBoard,
    PayRoll,
    Settings,
    Error,
    AllEmployees,
    Teams,
    NewEmployee,
    PersonalInfo,
    Salary,
    Professional,
    UserAccount,
    NewTeam,
    EditTeam,
    EmployeeDashboard,
    EmployeeTaskBoard,
    EmployeeLeaveBoard,
    EmployeeSettings,
    EmployeeSummary
  };