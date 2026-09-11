import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FilePlus,
  FileText,
  RefreshCcw,
  ArrowLeftRight,
  CheckCircle,
  Zap,
  ChevronDown,
  Gauge,
  LogOut,
} from "lucide-react";

const ConnectionNavbar = () => {

  const navigate = useNavigate();

  // Which dropdown is currently open
  const [openMenu, setOpenMenu] = useState(null);

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );


  // Open / close dropdown
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  // Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setOpenMenu(null);
    navigate("/login");
  };


  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">


          {/* =====================================================
              CIS LOGO
          ====================================================== */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >

            <div className="bg-blue-600 p-2.5 rounded-lg">
              <Zap
                className="text-white"
                size={24}
              />
            </div>

            <div>

              <h1 className="text-xl font-bold text-gray-800 leading-none">
                CIS
              </h1>

              <p className="text-xs text-gray-500 mt-1">
                Customer Information System
              </p>

            </div>

          </NavLink>



          {/* =====================================================
              CONNECTION NAVIGATION
          ====================================================== */}

          <div className="flex items-center gap-2">


            {/* =================================================
                NEW CONNECTION
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => toggleMenu("new")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >

                <FilePlus size={17} />

                <span>
                  New Connection
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "new"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {/* New Connection Dropdown */}

              {openMenu === "new" && (

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">

                  <NavLink
                    to="/connection/new/lt"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Gauge size={16} />

                    <span>
                      LT Connection
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/new/ht"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Gauge size={16} />

                    <span>
                      HT Connection
                    </span>

                  </NavLink>

                </div>

              )}

            </div>



            {/* =================================================
                APPLICATIONS
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => toggleMenu("applications")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >

                <FileText size={17} />

                <span>
                  Applications
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "applications"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {/* Applications Dropdown */}

              {openMenu === "applications" && (

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">

                  <NavLink
                    to="/connection/applications/lt"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Gauge size={16} />

                    <span>
                      LT Applications
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/applications/ht"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Gauge size={16} />

                    <span>
                      HT Applications
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/applications/status"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <FileText size={16} />

                    <span>
                      Application Status
                    </span>

                  </NavLink>

                </div>

              )}

            </div>



            {/* =================================================
                CHANGE
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => toggleMenu("change")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >

                <RefreshCcw size={17} />

                <span>
                  Change
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "change"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {/* Change Dropdown */}

              {openMenu === "change" && (

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">

                  <NavLink
                    to="/connection/change/load"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <RefreshCcw size={16} />

                    <span>
                      Load Change
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/change/name"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <FileText size={16} />

                    <span>
                      Name Change
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/change/address"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <FileText size={16} />

                    <span>
                      Address Change
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/change/tariff"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <FileText size={16} />

                    <span>
                      Tariff Change
                    </span>

                  </NavLink>

                </div>

              )}

            </div>



            {/* =================================================
                TRANSFER
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => toggleMenu("transfer")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >

                <ArrowLeftRight size={17} />

                <span>
                  Transfer
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "transfer"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {/* Transfer Dropdown */}

              {openMenu === "transfer" && (

                <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">

                  <NavLink
                    to="/connection/transfer/ownership"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <ArrowLeftRight size={16} />

                    <span>
                      Ownership Transfer
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/transfer/location"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <ArrowLeftRight size={16} />

                    <span>
                      Connection Transfer
                    </span>

                  </NavLink>

                </div>

              )}

            </div>



            {/* =================================================
                APPROVAL
            ================================================== */}

            <div className="relative">

              <button
                onClick={() => toggleMenu("approval")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >

                <CheckCircle size={17} />

                <span>
                  Approval
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "approval"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {/* Approval Dropdown */}

              {openMenu === "approval" && (

                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">

                  <NavLink
                    to="/connection/approval/new"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <CheckCircle size={16} />

                    <span>
                      Connection Approval
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/approval/change"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <CheckCircle size={16} />

                    <span>
                      Change Approval
                    </span>

                  </NavLink>

                </div>

              )}

            </div>



            {/* =================================================
                LOGOUT
            ================================================== */}

            {isLoggedIn && (

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 ml-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
              >

                <LogOut size={17} />

                <span>
                  Logout
                </span>

              </button>

            )}

          </div>

        </div>

      </div>

    </nav>
  );
};

export default ConnectionNavbar;