import React from "react";
import Layout from "../layout/Layout";
import { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const AppointHome: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          Appointments
          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 font-medium">
            Learn
          </span>
        </h2>
        <button
          className="bg-[#8fd32a] hover:bg-[#7bb022] text-white px-5 py-1.5 rounded-md font-semibold text-sm transition"
          onClick={() => setShowModal(true)}
        >
          + Book Appointments
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm">
          <span className="text-gray-400 text-sm mb-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-[#8fd32a] rounded-full mr-2" />{" "}
            Appointments
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

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto flex-1 flex flex-col">
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
              <th className="py-3 px-4 text-left font-semibold">Vehicle</th>
              <th className="py-3 px-4 text-left font-semibold">Concern</th>
              <th className="py-3 px-4 text-left font-semibold">
                Scheduled Date
              </th>
              <th className="py-3 px-4 text-left font-semibold">Priority</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          {/* Modal Card */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl mx-4 px-8 pt-14 pb-24 flex flex-col md:flex-row gap-8 z-10">
            {/* Left Side */}
            <div className="flex-1 mr-2">
              <div className="flex items-center mb-6">
                <img
                  src="/images/landrover.png"
                  alt="Land Rover"
                  className="w-20 h-20 rounded object-contain mr-6"
                />
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-gray-600">
                      Land Rover
                    </span>
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <div className="text-gray-500 font-medium text-base">
                    L460 Autobiography <span className="mx-2">•</span>{" "}
                    EKY-678-00B
                  </div>
                  <div className="flex items-center text-xs text-gray-400 mt-1 space-x-4">
                    <span>22 - 05 -2025 2:00PM</span>
                    <span>ICA7895FA5994FJRS</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src="/images/company-avatar.png"
                  alt="Workshop"
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-600 mb-1">
                    Coscharis Motors
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="flex items-center text-green-600 mr-2">
                      ✔ Verified
                    </span>
                    <span className="flex items-center text-yellow-500">
                      ★ 4.8
                    </span>
                  </div>
                </div>
                <span className="ml-auto bg-[#e6f0fa] text-[#4e6e1f] px-3 py-1 rounded font-semibold text-xs">
                  Workshop
                </span>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src="/images/company-avatar.png"
                  alt="Workshop"
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-600 mb-1">
                    Coscharis Motors
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="flex items-center text-green-600 mr-2">
                      ✔ Verified
                    </span>
                    <span className="flex items-center text-yellow-500">
                      ★ 4.8
                    </span>
                  </div>
                </div>
                <span className="ml-auto bg-[#e6f0fa] text-[#4e6e1f] px-3 py-1 rounded font-semibold text-xs">
                  Workshop
                </span>
              </div>
              <div className="mt-6 border-t border-gray-300 pt-4">
                <div className="text-sm text-gray-400 font-semibold mb-1">
                  Customer’s Concern
                </div>
                <div className="flex items-start text-gray-600 text-base">
                  <svg
                    className="w-5 h-5 text-[#8fd32a] mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur vel magnam, hic voluptatum amet, veritatis corporis
                  commodi nisi quisquam dignissimos, ducimus doloremque.
                  Repellat sint expedita accusantium iure doloribus animi enim.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur vel magnam, hic voluptatum amet, veritatis corporis
                  commodi nisi quisquam dignissimos, ducimus doloremque.
                  Repellat sint expedita accusantium iure doloribus animi enim.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur vel magnam, hic voluptatum amet, veritatis corporis
                  commodi nisi quisquam dignissimos, ducimus doloremque.
                  Repellat sint expedita accusantium iure doloribus animi enim.
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex flex-col gap-6">
              <button
                className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <div>
                <div className="flex items-center text-gray-500 mb-1">
                  <svg
                    className="w-5 h-5 text-[#8fd32a] mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  Appointment date:
                </div>
                <div className="font-bold text-lg text-gray-800">
                  22nd, June 2025 2:30PM
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-500 mb-1">
                  <svg
                    className="w-5 h-5 text-[#8fd32a] mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                  </svg>
                  Priority
                </div>
                <div className="font-bold text-base text-gray-800 flex items-center">
                  Critical{" "}
                  <span className="w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-500 mb-1">
                  <svg
                    className="w-5 h-5 text-[#8fd32a] mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10.5a8.38 8.38 0 01-1.9.5A8.5 8.5 0 013.5 12c0-4.7 3.8-8.5 8.5-8.5S20.5 7.3 20.5 12c0 1.2-.2 2.3-.5 3.3z" />
                  </svg>
                  Location
                </div>
                <div className="font-bold text-base text-gray-800">
                  No 5, Alein Waltern Street Houston Texas, United Stated
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-500 mb-1">
                  <svg
                    className="w-5 h-5 text-[#8fd32a] mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  Mobility Option
                </div>
                <div className="font-bold text-base text-gray-800">
                  Pick-up Service
                </div>
              </div>
            </div>
            {/* Open Job Card Button */}
            <button className="absolute left-0 right-0 bottom-0 mx-8 mb-6 bg-[#8fd32a] hover:bg-[#7bb022] text-white py-3 rounded-lg font-semibold text-lg transition">
              Open Job Card
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AppointHome;
