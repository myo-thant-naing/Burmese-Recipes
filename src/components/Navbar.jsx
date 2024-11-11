import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Link to={"/Home"}>
      <nav className="bg-primary border-b-2 shadow-lg">
        <ul className="flex  justify-between items-center p-3 max-w-2xl  mx-auto">
          <li className="text-bold  text-2xl text-red-500">
            အမေ့လက်ရာ
            <sub className="text-gray-700 text-sm">
              {" "}
              <i>burmese recipes</i>
            </sub>
          </li>
          {/* <li className="text-bold text-xl text-red-500 mt-2  ">
            <i>BURMESE RECIPES</i>
          </li> */}
        </ul>
      </nav>
    </Link>
  );
}
