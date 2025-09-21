import React from "react";
import Layout from "../layout/Layout";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const Customers: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
            Customers
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 font-medium">
              Learn
            </span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
            <span className="text-gray-400 text-sm mb-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-[#8fd32a] rounded-full mr-2" />{" "}
              Total
            </span>
            <span className="text-2xl font-bold text-gray-900">20</span>
          </div>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
            <span className="text-gray-400 text-sm mb-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2" />{" "}
              Active
            </span>
            <span className="text-2xl font-bold text-gray-900">20</span>
          </div>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
            <span className="text-gray-400 text-sm mb-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" />{" "}
              Inactive
            </span>
            <span className="text-2xl font-bold text-gray-900">4</span>
          </div>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
            <span className="text-gray-400 text-sm mb-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2" />{" "}
              Blocked
            </span>
            <span className="text-2xl font-bold text-gray-900">0</span>
          </div>
        </div>

        {/* Filters and Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto flex-1 flex flex-col">
          {/* Filters inside the table card */}
          <div className="px-4 py-3 flex flex-col md:flex-row md:items-center md:space-x-4 border-b border-gray-200">
            {/* Search */}
            <div className="flex items-center flex-1 mb-2 md:mb-0">
              <div className="relative w-full max-w-xs">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FiSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8fd32a] text-sm"
                />
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex space-x-2 flex-1">
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm font-medium">
                Vehicle Type <FiChevronDown className="ml-2" />
              </button>
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 text-sm font-medium">
                Vehicle Status <FiChevronDown className="ml-2" />
              </button>
              <button className="flex items-center px-4 py-2 bg-[#e6f7cb] text-[#8fd32a] rounded-md font-semibold text-sm border border-[#8fd32a]">
                <span className="mr-1">🟢</span> Filter
              </button>
            </div>

            {/* Count + dropdown */}
            <div className="flex-1 text-right text-xs text-gray-400 hidden md:block">
              1 - 7 of 7
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <FiChevronDown />
              </button>
            </div>
          </div>

          {/* Table below filters */}
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
                <th className="py-3 px-4 text-left font-semibold">Services</th>
                <th className="py-3 px-4 text-left font-semibold">Joined Date</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
