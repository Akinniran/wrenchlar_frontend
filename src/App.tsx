import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import CreateAccount from "./views/auth/CreateAccount";
import LoginAccount from "./views/auth/LoginAccount";
import VehiclesHomePage from "./views/company/vehicles/VehiclesHomePage";
import VehicleOverview from "./views/company/vehicles/VehicleOverview";
import VehicleJobCards from "./views/company/vehicles/VehicleJobCards";
import VehicleIssues from "./views/company/vehicles/VehicleIssues";
import JobCardHome from "./views/company/JobCards/JobCardHome";
import JobCardDetail from "./views/company/JobCards/JobCardDetail";
import JobExtraDetail from "./views/company/JobCards/JobExtraDetail";
import AppointHome from "./views/company/Appointments/AppointHome";
import AppointmentDetails from "./views/company/Appointments/AppointmentDetails";
import Customers from "./views/company/CustomerStaffView/Customers";
import Staffs from "./views/company/CustomerStaffView/Staffs";
import StaffAnalysis from "./views/company/CustomerStaffView/StaffAnalysis";
import RoleView from "./views/company/Roles/RoleView";
import Workshops from "./views/company/Workshops/Workshops";
import WorkshopView from "./views/company/Workshops/WorkshopView";

function App() {
  return (
    <ThemeProvider>
      <Router>
      <Routes>
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/" element={<LoginAccount />} />
        <Route path="/vehicles" element={<VehiclesHomePage />} />
        <Route path="/vehicleoverview" element={<VehicleOverview />} />
        <Route path="/vehiclejob" element={<VehicleJobCards />} />
        <Route path="/vehicleissues" element={<VehicleIssues />} />

        <Route path="/jobcard" element={<JobCardHome />} />
        <Route path="/jobdetail" element={<JobCardDetail />} />
        <Route path="/jobdetails" element={<JobExtraDetail />} />

        <Route path="/appointments" element={<AppointHome />} />
        <Route path="/appointmentdetails" element={<AppointmentDetails />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/staffanalysis" element={<StaffAnalysis />} />

        <Route path="/role" element={<RoleView />} />

        <Route path="/workshop" element={<Workshops />} />
        <Route path="/workshopdetails" element={<WorkshopView />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;