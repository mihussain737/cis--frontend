import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Gauge,
  Package,
  Activity,
  ClipboardList,
  RefreshCcw,
  Menu,
  X,
} from "lucide-react";

const MeteringNavbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName) => {
    setOpenMenu((previousMenu) =>
      previousMenu === menuName ? null : menuName,
    );
  };

  const closeMenu = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 py-10 text-white shadow-lg sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-lg font-semibold uppercase tracking-wider text-blue-100"></p>
            Metering Portal
          </div>
          <h1>Metering related Portal</h1>
          <p className="mt-4 text-base leading-7 text-blue-50 sm:text-lg">
            Sumit your electricity reading application online quickly and
            conveniently. Track your reads and manage your meter and request form in
            one place
          </p>
          <Link
            to="/billing/billProcess"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow transition hover:bg-blue-50"
          >
            Reading
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MeteringNavbar;
