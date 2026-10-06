import { ArrowLeftRight, CheckCircle, ChevronDown, FileDown, FilePlus, FileText, Gauge, LogOut, RefreshCcw, Trash, Zap } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const BillingNavbar = () => {

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
                  Bill Process And Cancellation
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
                    to="/billing/billingProcess"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Gauge size={16} />

                    <span>
                      Bill Process
                    </span>

                  </NavLink>


                  <NavLink
                    to="/connection/new/ht"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <Trash size={16} />

                    <span>
                      Bill Cancellation
                    </span>

                  </NavLink>

                  <NavLink
                    to="/connection/new/ht"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >

                    <FileDown size={16} />

                    <span>
                      Bill Generation
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
  )
}

export default BillingNavbar