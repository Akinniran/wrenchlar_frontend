import React from "react";
import Layout from "../layout/Layout";
import {
  FiCalendar,
  FiHash,
  FiChevronDown,
  FiUser,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const JobCardDetail: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        {/* ...header code as before... */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">#JSEPR009</span>
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          </div>
          <div className="text-gray-500 font-medium text-base mt-1">
            L460 Autobiography <span className="mx-2">•</span> EKY-678-00B
          </div>
          <div className="flex items-center text-xs text-gray-400 mt-1 space-x-4">
            <span className="flex items-center">
              <FiCalendar className="mr-1" />
              22 - 05 -2025 2:00PM
            </span>
            <span className="flex items-center">
              <FiHash className="mr-1" />
              ICA7895FA5994FJRS
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end mt-4 md:mt-0 space-y-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center bg-[#fff7e6] text-[#f5a623] px-2 py-1 rounded text-xs font-semibold">
              <span className="w-2 h-2 bg-[#f5a623] rounded-full mr-1"></span>
              Pending
            </span>
            <span className="text-2xl font-bold text-gray-700">
              ₦350,680.00
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center bg-[#e6f7cb] text-[#8fd32a] px-3 py-1 rounded font-semibold text-sm border border-[#8fd32a]">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#8fd32a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit Vehicle
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200">
              <FiChevronDown className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-4">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Vehicle Card */}
            <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
              <img
                src="/images/landrover.png"
                alt="Land Rover"
                className="w-20 h-20 rounded object-contain"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-2xl text-gray-600">
                    Land Rover
                  </span>
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                </div>
                <div className="text-gray-500">
                  L460 Autobiography <span className="mx-1">•</span> EKY-678-00B
                </div>
                <div className="flex items-center text-xs text-gray-400 mt-1 space-x-4">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    22 - 05 -2025 2:00PM
                  </span>
                  <span className="flex items-center">
                    <FiHash className="mr-1" />
                    ICA7895FA5994FJRS
                  </span>
                </div>
              </div>
            </div>
            {/* Customer Card */}
            <div className="flex items-center space-x-4 p-4 border-b border-gray-100">
              <img
                src="/images/user-avatar.jpg"
                alt="Customer"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-600">
                  Joshphen Adrewson
                </div>
                <div className="text-sm font-medium text-gray-400">
                  jonsonadrew@gmail.com
                </div>
              </div>
              <span className="ml-auto bg-[#e6f7cb] text-[#8fd32a] px-3 py-1 rounded font-semibold text-xs">
                Customer
              </span>
            </div>
            {/* Workshop Card */}
            <div className="flex items-center space-x-4 p-4">
              <img
                src="/images/company-avatar.png"
                alt="Workshop"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-600">
                  Coscharis Motors
                </div>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <span className="font-medium flex items-center text-green-600 mr-2">
                    <FiCheckCircle className="mr-1" /> Verified
                  </span>
                  <span className="flex items-center text-yellow-500">
                    <svg
                      className="w-4 h-4 mr-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    4.8
                  </span>
                </div>
              </div>
              <span className="ml-auto bg-[#e6f0fa] text-[#4e6e1f] px-3 py-1 rounded font-semibold text-xs">
                Workshop
              </span>
            </div>
          </div>
          {/* Cost Summary */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Cost Summary
            </h2>

            <div className="mb-3 border-b border-gray-200 pb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-600">
                  Subtotal
                </span>
                <span className="text-sm text-gray-900 font-semibold">
                  $490.90
                </span>
              </div>
              <div className="text-xs text-gray-500 italic">
                Automatically Calculated
              </div>
            </div>

            <div className="mb-3 border-b border-gray-200 pb-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Parts
              </h3>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Parts</span>
                <span className="text-sm text-gray-900 font-medium">
                  $250.00
                </span>
              </div>
            </div>

            <div className="mb-3 border-b border-gray-200 pb-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Discount
              </h3>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Discount</span>
                <span className="text-sm text-red-600 font-medium">-14%</span>
              </div>
            </div>

            <div className="mb-3 pb-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Tax</h3>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Tax</span>
                <span className="text-sm text-gray-900 font-medium">0</span>
              </div>
            </div>

            <div className="border-t border-gray-200 my-3 pt-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Total
              </h3>
              <div className="flex justify-between">
                <span className="text-base text-gray-600 font-medium">
                  Grand Total
                </span>
                <span className="text-lg text-gray-900 font-bold">$704.79</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (spans 2 columns on desktop) */}
        <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">
          {/* Job Processes */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Job Processes
            </h2>

            {/* Vehicle Inspection */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-600 mb-1 text-lg">
                    Vehicle Inspection
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <FiClock className="mr-1" />
                    Last Update: 22 - 05 -2025 2:00PM
                  </div>
                </div>
                <div className="items-center space-y-2">
                  <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full font-medium flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Pending</span>
                  </span>
                  <span className="ml-4 text-gray-500">Level: 30%</span>
                </div>
              </div>
            </div>

            {/* Scheduled Diagnosis */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-600 mb-1 text-lg">
                    {" "}
                    Scheduled Diagnosis
                  </h3>
                  <div className="text-xs text-gray-500">
                    18th Aug. 2025 3:00pm
                  </div>
                </div>
                <span className="bg-green-100 text-amber-800 px-4 py-1 rounded-full font-medium flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Done</span>
                </span>
              </div>
            </div>

            {/* Issues Section */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-600 mb-1 text-lg">
                Issues
              </h3>
              <div className="space-y-2">
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <button className="w-full flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Brake Pads Replacement
                    </span>
                    <FiChevronDown className="text-gray-400" />
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <button className="w-full flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Auto Fuel Pump Cleansing
                    </span>
                    <FiChevronDown className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Service Estimate */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Service Estimate
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <FiClock className="mr-1" />
                    Last Update: 22 - 05 -2025 2:00PM
                  </div>
                </div>
                <div className="items-center space-y-4">
                  <span className="bg-[#e6f7cb] text-white px-3 py-2 rounded-full text-xs font-medium flex items-center">
                    <span className="w-2 h-2 bg-[#8fd32a] rounded-full mr-1"></span>
                    <span className="text-[#8fd32a]">Awaiting Approval</span>
                  </span>
                  <button className="bg-[#8fd32a] hover:bg-[#8fd32a] text-white px-3 py-1 rounded font-medium transition-colors">
                    + Resend Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Services Analysis */}
          <div className="bg-white rounded-lg p-4">
            <div className="font-semibold text-gray-600 mb-2">
              Services Analysis
            </div>
            <div className="space-y-3 mt-4">
              {/* Service 1 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-600">
                    A/C Accumulator Replacement
                  </div>
                  <div className="font-semibold text-gray-700">₦456.98</div>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <FiCalendar className="mr-1" />
                  Last Update: 22 - 05 -2025 2:00PM
                </div>
                <div className="rounded p-2 flex flex-col space-y-1">
                  <div className="bg-[#e6f7cb] flex items-center justify-between p-2">
                    <span className="flex items-center text-[#8fd32a] text-xs">
                      <FiUser className="mr-1" /> Andy Miller
                    </span>
                    <span className="text-xs text-gray-400">
                      1 @ $200.20/hr
                    </span>
                    <span className="font-semibold text-[#8fd32a] text-sm">
                      ₦200.20
                    </span>
                  </div>
                  <div className="bg-[#e6f7cb] flex items-center justify-between p-2">
                    <span className="flex items-center text-[#8fd32a] text-xs">
                      <FiCheckCircle className="mr-1" /> Oil Filter 2.0
                    </span>
                    <span className="text-xs text-gray-400">
                      1 @ $256.78/pi
                    </span>
                    <span className="font-semibold text-[#8fd32a] text-sm">
                      ₦256.78
                    </span>
                  </div>
                </div>
              </div>
              {/* Service 2 */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">
                    A/C Compressor Replacement
                  </div>
                  <div className="font-semibold text-gray-700">₦------</div>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <FiCalendar className="mr-1" />
                  Last Update: 22 - 05 -2025 2:00PM
                </div>
              </div>
              {/* Service 3 */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-800">
                    Oil Filter Replacement
                  </div>
                  <div className="font-semibold text-gray-700">₦35,080.00</div>
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-1">
                  <FiCalendar className="mr-1" />
                  Last Update: 22 - 05 -2025 2:00PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobCardDetail;
