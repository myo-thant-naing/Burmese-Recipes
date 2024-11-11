import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto  p-3">
        <Outlet />
      </div>
    </>
  );
}
