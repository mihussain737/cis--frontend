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
  Menu,
  X,
} from "lucide-react";

const MeteringNavbar = () => {
  const navigate = useNavigate();

  // Stores the currently opened dropdown
  const [openMenu, setOpenMenu] = useState(null);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token")),
  );

  // Open or close a dropdown
  const toggleMenu = (menuName) => {
    setOpenMenu((previousMenu) =>
      previousMenu === menuName ? null : menuName,
    );
  };

  // Close all menus
  const closeMenus = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    closeMenus();
    navigate("/login");
  };

  return (
    <nav className="relative z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between">
          {/* =====================================================
              CIS LOGO
          ====================================================== */}
          <NavLink
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-3"
          >
            <div className="rounded-lg bg-blue-600 p-2.5">
              <Zap className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold leading-none text-gray-800">
                CIS
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                Customer Information System
              </p>
            </div>
          </NavLink>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* =================================================
                METER STOCK AND INDENTS
            ================================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("meter")}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <FilePlus size={17} />

                <span>Meter stock and indents</span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "meter" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "meter" && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <NavLink
                    to="/metering/meter/stock"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Gauge size={16} />
                    <span>Meter Stock</span>
                  </NavLink>

                  <NavLink
                    to="/metering/meter/assgin-new"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Gauge size={16} />
                    <span>Assign New Meter</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* =================================================
                READINGS
            ================================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("reading")}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <FileText size={17} />

                <span>Readings</span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "reading" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "reading" && (
                <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">

                  <NavLink
                    to="/metering/meter/reading"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Gauge size={16} />
                    <span>Meter Readings and Modification</span>
                  </NavLink>

                  <NavLink
                    to="/metering/reading/reading-cancel"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <RefreshCcw size={16} />
                    <span>Reading Cancellation</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* =================================================
                CHANGE
            ================================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("change")}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <RefreshCcw size={17} />

                <span>Change</span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "change" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "change" && (
                <div className="absolute left-0 top-full z-50 mt-2 w-60 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <NavLink
                    to="/metering/change/meter"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <RefreshCcw size={16} />
                    <span>Meter Change</span>
                  </NavLink>

                  <NavLink
                    to="/metering/change/mf"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FileText size={16} />
                    <span>MF Change</span>
                  </NavLink>

                  <NavLink
                    to="/metering/change/address"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FileText size={16} />
                    <span>Address Change</span>
                  </NavLink>

                  <NavLink
                    to="/metering/change/tariff"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FileText size={16} />
                    <span>Meter Attribute Change</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* =================================================
                TRANSFER
            ================================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("transfer")}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <ArrowLeftRight size={17} />

                <span>Transfer</span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "transfer" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "transfer" && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <NavLink
                    to="/metering/transfer/ownership"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <ArrowLeftRight size={16} />
                    <span>Ownership Transfer</span>
                  </NavLink>

                  <NavLink
                    to="/metering/transfer/location"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <ArrowLeftRight size={16} />
                    <span>Connection Transfer</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* =================================================
                APPROVAL
            ================================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMenu("approval")}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <CheckCircle size={17} />

                <span>Approval</span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "approval" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "approval" && (
                <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <NavLink
                    to="/connection/approval/new"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <CheckCircle size={16} />
                    <span>Connection Approval</span>
                  </NavLink>

                  <NavLink
                    to="/connection/approval/change"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <CheckCircle size={16} />
                    <span>Change Approval</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* =================================================
                LOGOUT
            ================================================== */}
            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="ml-2 flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={17} />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previousState) => !previousState)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/metering"
                onClick={closeMenus}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Metering Home
              </NavLink>

              {/* Mobile Meter Stock */}
              <button
                type="button"
                onClick={() => toggleMenu("mobileMeter")}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-2">
                  <FilePlus size={17} />
                  Meter Stock and Indents
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "mobileMeter" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobileMeter" && (
                <div className="ml-6 flex flex-col gap-1">
                  <NavLink
                    to="/metering/meter/stock"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Meter Stock
                  </NavLink>

                  <NavLink
                    to="/metering/meter/assgin-new"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Assign New Meter
                  </NavLink>
                </div>
              )}

              {/* Mobile Readings */}
              <button
                type="button"
                onClick={() => toggleMenu("mobileReading")}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-2">
                  <FileText size={17} />
                  Readings
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "mobileReading" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobileReading" && (
                <div className="ml-6 flex flex-col gap-1">
                  <NavLink
                    to="/metering/reading/reading-screen"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Reading Screen
                  </NavLink>

                  <NavLink
                    to="/metering/meter/reading"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Meter Readings and Modification
                  </NavLink>

                  <NavLink
                    to="/metering/reading/reading-cancel"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Reading Cancellation
                  </NavLink>
                </div>
              )}

              {/* Mobile Change */}
              <button
                type="button"
                onClick={() => toggleMenu("mobileChange")}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-2">
                  <RefreshCcw size={17} />
                  Change
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "mobileChange" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobileChange" && (
                <div className="ml-6 flex flex-col gap-1">
                  <NavLink
                    to="/metering/change/meter"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Meter Change
                  </NavLink>

                  <NavLink
                    to="/metering/change/mf"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    MF Change
                  </NavLink>

                  <NavLink
                    to="/metering/change/address"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Address Change
                  </NavLink>

                  <NavLink
                    to="/metering/change/tariff"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Meter Attribute Change
                  </NavLink>
                </div>
              )}

              {/* Mobile Transfer */}
              <button
                type="button"
                onClick={() => toggleMenu("mobileTransfer")}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-2">
                  <ArrowLeftRight size={17} />
                  Transfer
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "mobileTransfer" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobileTransfer" && (
                <div className="ml-6 flex flex-col gap-1">
                  <NavLink
                    to="/metering/transfer/ownership"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Ownership Transfer
                  </NavLink>

                  <NavLink
                    to="/metering/transfer/location"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Connection Transfer
                  </NavLink>
                </div>
              )}

              {/* Mobile Approval */}
              <button
                type="button"
                onClick={() => toggleMenu("mobileApproval")}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle size={17} />
                  Approval
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    openMenu === "mobileApproval" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobileApproval" && (
                <div className="ml-6 flex flex-col gap-1">
                  <NavLink
                    to="/connection/approval/new"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Connection Approval
                  </NavLink>

                  <NavLink
                    to="/connection/approval/change"
                    onClick={closeMenus}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    Change Approval
                  </NavLink>
                </div>
              )}

              {/* Mobile Logout */}
              {isLoggedIn && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 flex items-center gap-2 rounded-lg px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut size={17} />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MeteringNavbar;
