import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./utils/Loader";
import {SignIn,
  ForgotPassword,
  ResetPassword,
  AdminDashboard, AdminSummary,
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
  EmployeeSummary} from "./index"
// import SignIn from "./auth/SignIn";
// import ForgotPassword from "./auth/ForgotPassword";
// import ResetPassword from "./auth/ResetPassword";
// import AdminDashboard from "./layout/AdminDashboard";
// import AdminSummary from "./componenets/AdminSummary";
// import Employees from "./pages/admin-dashboard/Employees";
// import TaskBoard from "./pages/admin-dashboard/TaskBoard";
// import LeaveBoard from "./pages/admin-dashboard/LeaveBoard";
// import PayRoll from "./pages/admin-dashboard/PayRoll";
// import Settings from "./pages/admin-dashboard/Settings";
// import Error from "./pages/Error";
// import AllEmployees from "./pages/admin-dashboard/AllEmployees";
// import Teams from "./pages/admin-dashboard/Teams";
// import NewEmployee from "./pages/admin-dashboard/NewEmployee";
// import PersonalInfo from "./pages/admin-dashboard/PersonalInfo";
// import Salary from "./pages/admin-dashboard/Salary";
// import Professional from "./pages/admin-dashboard/Professional";
// import UserAccount from "./pages/admin-dashboard/UserAccount";
// import NewTeam from "./pages/admin-dashboard/NewTeam";
// import EditTeam from "./pages/admin-dashboard/EditTeam";
// import EmployeeDashboard from "./layout/EmployeeDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import { Toaster } from "react-hot-toast";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
// import EmployeeTaskBoard from "./pages/employee-dashboard/EmployeeTaskBoard";
// import EmployeeLeaveBoard from "./pages/employee-dashboard/EmployeeLeaveBoard";
// import EmployeeSettings from "./pages/employee-dashboard/EmployeeSettings";
// import EmployeeSummary from "./componenets/employee-component/EmployeeSummary";

function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={ <div className="d-flex justify-content-center align-items-center vh-100"><Loader/></div>  }>

        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="auth/sign-in" element={<SignIn />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
          <Route
            path="auth/reset-password/:resetToken"
            element={<ResetPassword />}
          />
          <Route
            path="admin-dashboard"
            element={
              <PrivateRoute>
                <RoleBasedRoutes requiredRole={["admin", "super-admin"]}>
                  <AdminDashboard />
                </RoleBasedRoutes>
              </PrivateRoute>
            }
          >
            <Route index element={<AdminSummary />} />
            {/* employees */}
            <Route path="employees" element={<Employees />}>
              <Route index element={<Navigate to="allemployees" />} />
              <Route path="allemployees" element={<AllEmployees />} />
              <Route path="teams" element={<Teams />} />
              <Route path="new-team" element={<NewTeam />} />
              <Route path="edit-team" element={<EditTeam />} />
            </Route>
            {/* ======= */}
            <Route
              path="/admin-dashboard/employees/personal-info"
              element={<PersonalInfo />}
            >
              <Route index element={<Navigate to="/personal-info" />} />
              <Route path="salary" element={<Salary />} />
              <Route path="professional" element={<Professional />} />
              <Route path="user-account" element={<UserAccount />} />
            </Route>
            <Route path="taskboard" element={<TaskBoard />} />
            <Route path="leaveboard" element={<LeaveBoard />} />
            <Route path="payroll" element={<PayRoll />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* below for employee */}

          <Route
            path="/employee-dashboard"
            element={
              <PrivateRoute>
                <RoleBasedRoutes
                  requiredRole={["employee", "admin", "super-admin"]}
                >
                  <EmployeeDashboard />
                </RoleBasedRoutes>
              </PrivateRoute>
            }
          >
            <Route index element={<EmployeeSummary/>}/>
            <Route path="taskboard" element={<EmployeeTaskBoard />} />
            <Route path="leaveboard" element={<EmployeeLeaveBoard />} />
            <Route path="settings" element={<EmployeeSettings />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
