import React from "react";
import { FiSearch, FiBell, FiGrid, FiMaximize2, FiChevronDown } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">

      {/* Center - Logo */}
      <div className="hidden md:flex items-center">
        <img src="/assets/wrenchlar-logo.png" alt="Wrenchlar" className="h-6" />
        <span className="text-2xl font-bold text-gray-600">
          renchlar
        </span>
      </div>

      {/* Middle - Search */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-sm"
          />
        </div>
      </div>

      {/* Right - Icons & Profile */}
      <div className="flex items-center space-x-10">
        <button className="text-gray-500 hover:text-gray-700">
          <FiGrid />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <FiMaximize2 />
        </button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <FiBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/assets/user-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Henry</span>
          <FiChevronDown className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
