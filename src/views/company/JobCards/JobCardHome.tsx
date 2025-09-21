import React from "react";
import Layout from "../layout/Layout";
import { FiSearch, FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

const jobs = [
  {
    code: "#JWERH005",
    model: "Toyota - Land Cruiser",
    license: "EKY-34R-144",
    year: 2018,
    issue: "A/C Replacements Oil",
    others: 2,
    amount: "₦40,560.98",
    progress: 58,
    status: "Processing",
    date: "24th Aug. 2025 4:30pm",
  },
  {
    code: "#JWERH008",
    model: "Honda - Accord",
    license: "ABC-12K-778",
    year: 2019,
    issue: "Fix Brake Pad Oil",
    others: 0,
    amount: "₦20,560.98",
    progress: 80,
    status: "Completed",
    date: "22nd Aug. 2025 11:00am",
  },
  {
    code: "#JWERH011",
    model: "Mercedes - GLE 450",
    license: "FKJ-98L-221",
    year: 2021,
    issue: "Engine Diagnostics",
    others: 3,
    amount: "₦85,200.00",
    progress: 35,
    status: "Pending",
    date: "20th Aug. 2025 9:15am",
  },
  {
    code: "#JWERH015",
    model: "Lexus - RX 350",
    license: "LAG-55T-990",
    year: 2020,
    issue: "Transmission Fluid Leak",
    others: 1,
    amount: "₦65,430.75",
    progress: 10,
    status: "Critical",
    date: "18th Aug. 2025 2:45pm",
  },
  {
    code: "#JWERH018",
    model: "Ford - Explorer",
    license: "ABJ-67U-556",
    year: 2017,
    issue: "Suspension Replacement",
    others: 2,
    amount: "₦120,000.00",
    progress: 95,
    status: "Completed",
    date: "15th Aug. 2025 12:00pm",
  },
];

const JobCardHome: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          Job Cards
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 font-medium">
            Learn
          </span>
        </h2>
        <button className="bg-[#8fd32a] hover:bg-[#7bb022] text-white px-5 py-1.5 rounded-md font-semibold text-sm transition">
          + Create Job Card
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-[#8fd32a] rounded-full mr-2" />{" "}
            Job Cards
          </span>
          <span className="text-2xl font-bold text-gray-900">20</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2" />{" "}
            Pending
          </span>
          <span className="text-2xl font-bold text-gray-900">20</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" />{" "}
            Completed
          </span>
          <span className="text-2xl font-bold text-gray-900">4</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2" />{" "}
            Failed
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
              <th className="py-3 px-4 text-left font-semibold">
                License Plate
              </th>
              <th className="py-3 px-4 text-left font-semibold">Year</th>
              <th className="py-3 px-4 text-left font-semibold">Issues</th>
              <th className="py-3 px-4 text-left font-semibold">Amount</th>
              <th className="py-3 px-4 text-left font-semibold">Progress</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <div className="font-semibold text-gray-900">{job.code}</div>
                  <div className="text-xs text-gray-400">{job.model}</div>
                </td>
                <td className="py-3 px-4">{job.license}</td>
                <td className="py-3 px-4">{job.year}</td>
                <td className="py-3 px-4">
                  <div className="text-gray-700">{job.issue}</div>
                  <div className="text-xs text-gray-400">
                    +{job.others} others
                  </div>
                </td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {job.amount}
                </td>
                <td className="py-3 px-4">
                  <div className="w-28 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#8fd32a] rounded-full"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {job.progress}%
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{job.date}</td>
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
    </Layout>
  );
};

export default JobCardHome;
