import React from "react";
import Layout from "../layout/Layout";
import { FiCalendar } from "react-icons/fi";
import VehicleHeader from "./VehicleComponents/VehicleHeader";
import VehicleDetails from "./VehicleComponents/VehicleDetails";

const VehicleOverview: React.FC = () => {
  return (
    <Layout>
      {/* Vehicle Header */}
      <VehicleHeader />
      {/* Main Content */}
      <div className="py-6 space-y-6">
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200">
          {["Overview", "Job Cards", "Issues"].map((tab, idx) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium ${
                idx === 0
                  ? "text-[#8fd32a] border-b-2 border-[#8fd32a]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Vehicle Details */}
          <VehicleDetails />

          {/* Right Column */}
          <div className="col-span-8 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Jobs</p>
                <p className="text-xl font-bold">4</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Issues</p>
                <p className="text-xl font-bold">30</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">Reminder</p>
                <p className="text-xl font-bold">0</p>
              </div>
            </div>

            {/* Customer Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/customer-avatar.png"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Joshphen Adrewson
                  </h4>
                  <p className="text-sm text-gray-500">jonsonadrew@gmail.com</p>
                  <p className="text-xs text-gray-400 flex items-center space-x-1">
                    <FiCalendar className="w-3 h-3" />{" "}
                    <span>22 - 05 - 2025 2:00PM</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">₦350,680.00</p>
                <p className="text-xs text-gray-400">Total Spent</p>
                <span className="inline-block mt-1 px-2 py-1 bg-lime-100 text-lime-700 rounded text-xs font-medium">
                  Customer
                </span>
              </div>
            </div>

            {/* Services Analysis */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-4">
                Services Analysis
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
      </div>
    </Layout>
  );
};

export default VehicleOverview;
