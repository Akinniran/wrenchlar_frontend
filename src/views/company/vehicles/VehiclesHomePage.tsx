import React from "react";
import Layout from "../layout/Layout";
import { FiSearch, FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

const vehicles = [
  {
    name: "Toyota",
    model: "Land Cruiser Prado",
    license: "EKY-34R-144",
    year: 2018,
    millage: "456900 km",
    type: "Sedan",
    fuel: "Fuel",
    status: "Processing",
    date: "24th Aug. 2025 4:30pm",
  },
  {
    name: "Toyota",
    model: "Land Cruiser Prado",
    license: "EKY-34R-144",
    year: 2018,
    millage: "456900 km",
    type: "Sedan",
    fuel: "Fuel",
    status: "Completed",
    date: "24th Aug. 2025 4:30pm",
  },
  {
    name: "Toyota",
    model: "Land Cruiser Prado",
    license: "EKY-34R-144",
    year: 2018,
    millage: "456900 km",
    type: "Sedan",
    fuel: "Fuel",
    status: "Processing",
    date: "24th Aug. 2025 4:30pm",
  },
  {
    name: "Toyota",
    model: "Land Cruiser Prado",
    license: "EKY-34R-144",
    year: 2018,
    millage: "456900 km",
    type: "Sedan",
    fuel: "Fuel",
    status: "Pending",
    date: "24th Aug. 2025 4:30pm",
  },
];

const statusStyles: Record<string, string> = {
  Processing: "bg-blue-50 text-blue-500",
  Completed: "bg-gray-100 text-gray-700",
  Pending: "bg-yellow-50 text-yellow-600",
  Failed: "bg-red-50 text-red-500",
};

const statusDot: Record<string, string> = {
  Processing: "bg-blue-400",
  Completed: "bg-gray-500",
  Pending: "bg-yellow-400",
  Failed: "bg-red-400",
};

const VehiclesHomePage: React.FC = () => {
  return (
    <Layout>    
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          Vehicles
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 font-medium">Learn</span>
        </h2>
        <button className="bg-[#8fd32a] hover:bg-[#7bb022] text-white px-5 py-1.5 rounded-md font-semibold text-sm transition">
          + Add Vehicle
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-[#8fd32a] rounded-full mr-2" /> Vehicles
          </span>
          <span className="text-2xl font-bold text-gray-900">20</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2" /> Pending
          </span>
          <span className="text-2xl font-bold text-gray-900">20</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" /> Completed
          </span>
          <span className="text-2xl font-bold text-gray-900">4</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2" /> Failed
          </span>
          <span className="text-2xl font-bold text-gray-900">0</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg px-4 py-3 flex flex-col md:flex-row md:items-center md:space-x-4 mb-4 shadow-sm">
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
        <div className="flex-1 text-right text-xs text-gray-400 hidden md:block">
          1 - 7 of 7
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b border-gray-300">
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold">License Plate</th>
              <th className="py-3 px-4 text-left font-semibold">Year</th>
              <th className="py-3 px-4 text-left font-semibold">Millage</th>
              <th className="py-3 px-4 text-left font-semibold">Type</th>
              <th className="py-3 px-4 text-left font-semibold">Fuel Type</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center">
                  <span className="inline-block w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center">
                    {/* Placeholder for vehicle image */}
                    <svg width="24" height="24" fill="none" className="text-gray-400">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <rect x="7" y="14" width="10" height="3" rx="1" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900">{v.name}</div>
                    <div className="text-xs text-gray-400">{v.model}</div>
                  </div>
                </td>
                <td className="py-3 px-4">{v.license}</td>
                <td className="py-3 px-4">{v.year}</td>
                <td className="py-3 px-4">{v.millage}</td>
                <td className="py-3 px-4">{v.type}</td>
                <td className="py-3 px-4">{v.fuel}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[v.status]}`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${statusDot[v.status]}`}></span>
                    {v.status}
                  </span>
                </td>
                <td className="py-3 px-4">{v.date}</td>
                <td className="py-3 px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreHorizontal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default VehiclesHomePage;