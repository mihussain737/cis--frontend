import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Zap,
  Home,
  Info,
  Settings,
  LogIn,
  UserPlus,
  LayoutDashboard,
  Cable,
  Gauge,
  Receipt,
  CreditCard,
  MessageSquareWarning,
  User,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate=useNavigate();

  const [isLoggedIn,setIsLoggedIn]=useState(!!localStorage.getItem("token"));

  const handleLogout=()=>{
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/login'); 
  }

  useEffect(()=>{
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  },[]);

  const publicNavItems = [
    {
      name: "Home",
      path: "/home",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
    {
      name: "Services",
      path: "/services",
      icon: Settings,
    },
    {
      name: "Login",
      path: "/login",
      icon: LogIn,
    },
    {
      name: "Sign Up",
      path: "/signup",
      icon: UserPlus,
    },
  ];

  const privateNavItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Connection",
      path: "/connection",
      icon: Cable,
    },
    {
      name: "Metering",
      path: "/metering",
      icon: Gauge,
    },
    {
      name: "Billing",
      path: "/billing",
      icon: Receipt,
    },
    {
      name: "Payments",
      path: "/payments",
      icon: CreditCard,
    },
    {
      name: "Complaints",
      path: "/complaints",
      icon: MessageSquareWarning,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  const navItems = token ? privateNavItems : publicNavItems;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to={token ? "/dashboard" : "/home"}
            className="flex items-center gap-2"
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="text-white" size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-none">
                CIS
              </h1>

              <p className="text-xs text-gray-500">
                Customer Information System
              </p>
            </div>
          </NavLink>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                >
                  <Icon size={17} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

            {/* Logout */}
            {token && (
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
              onClick={handleLogout}>
                <LogOut size={17} />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;