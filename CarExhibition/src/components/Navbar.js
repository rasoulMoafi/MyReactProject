import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* ===================navlink add active class to active one============ */}
      <NavLink
        className={({ isActive }) => (isActive ? "active link" : "")}
        to="/"
      >
        خانه
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active link" : "")}
        to="/about"
      >
        درباره ما
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active link" : "")}
        to="/products"
      >
        محصولات
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active link" : "")}
        to="/login"
      >
        ورود
      </NavLink>
    </nav>
  );
};

export default Navbar;
