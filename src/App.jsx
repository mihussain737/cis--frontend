import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Footer from "./components/Footer";
import ConnectionNavbar from "./components/ConnectionNavbar";
import LtApplication from "./connection/LtApplication";
import ConnectionHome from "./connection/ConnectionHome";
import Dashboard from "./components/Dashboard";
import ConnectionApproval from "./connection/ConnectionApproval";
import ApplicationStatus from "./connection/ApplicationStatus";
import MeteringHome from "./metering/MeteringHome";
import MeteringNavbar from "./components/MeteringNavbar";
import MeterStock from "./metering/MeterStock";
import AssignNewMeter from "./metering/AssignNewMeter";
import MeterReading from "./metering/MeterReading";
import MeterReadingScreen from "./metering/MeterReadingScreen";
import BillingHome from "./billing/BillingHome";
import BillingNavbar from "./billing/BillingNavbar";
import BillProcessForm from "./billing/BillProcessForm";
const AppContent = () => {
  const location = useLocation();
  const isConnectionPage = location.pathname.startsWith("/connection");
  const isMeteringPage = location.pathname.startsWith("/metering");
  const isBillingPage = location.pathname.startsWith("/billing");
  return (
    <>
      {" "}
      {isBillingPage ? (
        <BillingNavbar />
      ) : isMeteringPage ? (
        <MeteringNavbar />
      ) : isConnectionPage ? (
        <ConnectionNavbar />
      ) : (
        <Navbar />
      )}{" "}
      <Routes>
        {" "}
        {/* Public pages */} <Route path="/home" element={<Home />} />{" "}
        {/* Public pages */} <Route path="/" element={<Home />} />{" "}
        {/* Only for users who are NOT logged in */}{" "}
        <Route element={<PublicRoute />}>
          {" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
        </Route>{" "}
        {/* Only for logged-in users */}{" "}
        <Route element={<ProtectedRoute />}>
          {" "}
          <Route path="/connection" element={<ConnectionHome />} />{" "}
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />{" "}
          <Route path="/connection/new" element={<LtApplication />} />{" "}
          <Route path="/connection/new/lt" element={<LtApplication />} />{" "}
          <Route
            path="/connection/approval/new"
            element={<ConnectionApproval />}
          />{" "}
          <Route
            path="/connection/applications/status"
            element={<ApplicationStatus />}
          />{" "}
          <Route path="/metering" element={<MeteringHome />} />{" "}
          <Route path="/metering/meter/stock" element={<MeterStock />} />{" "}
          <Route
            path="/metering/meter/assgin-new"
            element={<AssignNewMeter />}
          />{" "}
          <Route path="/metering/meter/reading" element={<MeterReading />} />{" "}
          <Route
            path="/metering/meter/reading/readingScreen"
            element={<MeterReadingScreen />}
          />{" "}
          <Route path="/billing" element={<BillingHome />} />{" "}
          <Route path="/billing/billingProcess" element={<BillProcessForm />} />{" "}
        </Route>{" "}
      </Routes>{" "}
      <Footer />{" "}
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <AppContent />{" "}
    </BrowserRouter>
  );
};
export default App;
