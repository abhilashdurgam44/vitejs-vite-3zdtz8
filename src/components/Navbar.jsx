import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between font-semibold align-middle p-4 shadow-md">
      <Link to='/' className="text-2xl font-bold">SHOP</Link>
      <ul className="flex justify-between align-middle gap-4">
        <Link className="hover:text-red-500" to="/">
          Home
        </Link>
        <Link className="hover:text-red-500" to="/products">
          Coins
        </Link>
        <Link className="hover:text-red-500" to="/services">
          Services
        </Link>
        <div>
          <Link
            to="/cart"
            className="border-2 border-blue-400 rounded px-5 py-1 bg-[#B3CDD1] text-white text-center py-0 text-1xl"
          >
            Cart:{0}
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
