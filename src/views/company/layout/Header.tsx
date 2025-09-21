import React from "react";
import { FiSearch, FiBell, FiGrid, FiMaximize2, FiChevronDown, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../../contexts/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">

      {/* Center - Logo */}
      <div className="hidden md:flex items-center">
        <img src="/assets/wrenchlar-logo.png" alt="Wrenchlar" className="h-6" />
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
          renchlar
        </span>
      </div>

      {/* Middle - Search */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right - Icons & Profile */}
      <div className="flex items-center space-x-10">
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <FiGrid />
        </button>
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <FiMaximize2 />
        </button>
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
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
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Henry</span>
          <FiChevronDown className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
