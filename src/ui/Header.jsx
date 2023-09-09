import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";
import UserName from "./UserName";

function Header() {
  return (
    <div>
      <header className=" flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-600 sm:px-6">
        <Link to="/" className="tracking-widest font-sans">Fast React Pizza Co.</Link>
 
        <SearchOrder />
        <UserName/>
      </header>
    </div>
  );
}

export default Header;
