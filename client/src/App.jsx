import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminSummary from "./pages/admin-dashboard/AdminSummary";
import Employees from "./pages/admin-dashboard/Employees";
import TaskBoard from "./pages/admin-dashboard/TaskBoard";
import LeaveBoard from "./pages/admin-dashboard/LeaveBoard";
import PayRoll from "./pages/admin-dashboard/PayRoll";
import Settings from "./pages/admin-dashboard/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<AdminDashboard/>}/>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
