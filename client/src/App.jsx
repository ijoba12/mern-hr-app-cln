import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import AdminDashboard from "./layout/AdminDashboard";
import AdminSummary from "./componenets/AdminSummary";
import Employees from "./pages/admin-dashboard/Employees";
import TaskBoard from "./pages/admin-dashboard/TaskBoard";
import LeaveBoard from "./pages/admin-dashboard/LeaveBoard";
import PayRoll from "./pages/admin-dashboard/PayRoll";
import Settings from "./pages/admin-dashboard/Settings";
import Error from "./pages/Error";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navigate to="/admin-dashboard" />}/>
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/auth/reset-password" element={<ResetPassword/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}>
            <Route path=""  element={<AdminSummary/>}/>
            <Route path="/admin-dashboard/employees" element={<Employees/>}/>
            <Route path="/admin-dashboard/taskboard" element={<TaskBoard/>} />
            <Route path="/admin-dashboard/leaveboard" element={<LeaveBoard/>}/>
            <Route path="/admin-dashboard/payroll" element={<PayRoll/>}/>
            <Route path="/admin-dashboard/settings" element={<Settings/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
