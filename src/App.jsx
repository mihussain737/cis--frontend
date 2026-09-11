import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

const AppContent = () => {
  const location = useLocation();

  const isConnectionPage =
    location.pathname.startsWith("/connection");

  return (
    <>
      {isConnectionPage ? <ConnectionNavbar /> : <Navbar />}

      <Routes>
        {/* Public pages */}
        <Route path="/home" element={<Home />} />

        {/* Only for users who are NOT logged in */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Only for logged-in users */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/connection"
            element={<ConnectionHome />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard></Dashboard>}
          />

          <Route
            path="/connection/new"
            element={<LtApplication />}
          />

          <Route
            path="/connection/new/lt"
            element={<LtApplication />}
          />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;