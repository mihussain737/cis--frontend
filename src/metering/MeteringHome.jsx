import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      previousMenu === menuName ? null : menuName
    );
  };

  const closeMenu = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <div></div>
  );
};

export default MeteringNavbar;