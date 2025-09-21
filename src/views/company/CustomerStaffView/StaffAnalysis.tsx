import React from "react";
import Layout from "../layout/Layout";
import { FiCalendar, FiCreditCard } from "react-icons/fi";
import { FaCar } from "react-icons/fa6";

const StaffAnalysis: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-4 ">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Vehicle Card */}
            <div className="flex items-center space-x-4 px-4 pt-4 pb-8 border-b border-gray-200">
              <img
                src="/images/landrover.png"
                alt="Land Rover"
                className="w-20 h-20 rounded object-contain"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-2xl text-gray-600">
                    Joseph Andrew
                  </span>
                </div>
                <div className="text-gray-500">mail1@mail.com</div>
                <div className="flex items-center text-xs text-gray-400 mt-1 space-x-4">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    22 - 05 -2025 2:00PM
                  </span>
                  <span className="ml-2 bg-[#e6f7cb] text-[#8fd32a] px-3 py-1 rounded font-semibold text-xs">
                    Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Cost Summary */}
          <div className="col-span-4 bg-white rounded-xl border border-gray-200 px-6 pt-6 pb-60 space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
              Details
            </h3>

            <dl className="space-y-8 divide-y divide-gray-200">
              {/* Name */}
              <div className="flex items-center py-3">
                <FiCreditCard className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <dt className="text-xs text-gray-400 pb-2">Name</dt>
                  <dd className="text-sm font-medium text-gray-800">
                    EKY-678-00B
                  </dd>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center py-3">
                <FaCar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <dt className="text-xs text-gray-400 pb-2">Email</dt>
                  <dd className="text-sm font-medium text-gray-800">
                    mail1@mail.com
                  </dd>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center py-3">
                <FiCalendar className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <dt className="text-xs text-gray-400 pb-2">Phone</dt>
                  <dd className="text-sm font-medium text-gray-800">
                    08103310714
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Column (spans 2 columns on desktop) */}
        <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
              Services History
            </h3>

            <div className="divide-y divide-gray-200">
              <div className="flex justify-between py-3">
                <div>
                  <p className="font-medium text-gray-800">
                    A/C Accumulator Replacement
                  </p>
                  <p className="text-xs text-gray-400">
                    Last Update: 22 - 05 - 2025 2:00PM
                  </p>
                  <p className="text-sm text-lime-700 mt-1">
                    Andy Miller • ₦200.20
                  </p>
                </div>
                <p className="font-semibold text-gray-700">₦456.98</p>
              </div>

              <div className="flex justify-between py-3">
                <div>
                  <p className="font-medium text-gray-800">
                    A/C Compressor Replacement
                  </p>
                  <p className="text-xs text-gray-400">
                    Last Update: 22 - 05 - 2025 2:00PM
                  </p>
                </div>
                <p className="font-semibold text-gray-700">—</p>
              </div>

              <div className="flex justify-between py-3">
                <div>
                  <p className="font-medium text-gray-800">
                    Oil Filter Replacement
                  </p>
                  <p className="text-xs text-gray-400">
                    Last Update: 22 - 05 - 2025 2:00PM
                  </p>
                </div>
                <p className="font-semibold text-gray-700">₦35,080.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffAnalysis;
