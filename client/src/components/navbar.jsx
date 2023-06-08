import React from "react";

const Navbar = () => {
  return (
      <ul className="w-full py-2 bg-gray-200 text-gray-600 flex justify-around items-center">
        <li className="hover:text-gray-900 hover:cursor-pointer">
          Tus actividades
        </li> 
        <li className="hover:text-gray-900 hover:cursor-pointer">
          Usuario
        </li>
      </ul>
  )
}

export default Navbar;
