import React from "react";
import Layout from "../layout/Layout";
import VehicleHeader from "./VehicleComponents/VehicleHeader";
import VehicleDetails from "./VehicleComponents/VehicleDetails";
import VehicleTabs from "./VehicleComponents/VehicleTabs";

const VehicleJobCards: React.FC = () => {
  return (
    <Layout>
      {/* Vehicle Header */}
      <VehicleHeader />
      {/* Main Content */}
      <div className="py-6 space-y-6">
        {/* Tabs */}
        <VehicleTabs />

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Vehicle Details */}
          <VehicleDetails />

          {/* Right Column */}
          <div className="col-span-8 bg-white px-3 py-3 flex flex-col h-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-base text-gray-800">
                Job Cards
              </span>
              <button className="bg-[#8fd32a] hover:bg-[#7bb022] text-white px-4 py-2 rounded-md font-semibold text-sm flex items-center">
                + Create Job Card
              </button>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md bg-white text-sm w-56"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-500 text-sm font-medium">
                Vehicle Type
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-500 text-sm font-medium">
                Vehicle Status
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="flex items-center px-4 py-2 rounded-md bg-[#e6f7cb] text-[#8fd32a] font-semibold text-sm border border-[#8fd32a]">
                <span className="mr-1">🟢</span> Filter
              </button>
            </div>
            {/* Job Card List & Pagination */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {[1, 2].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg px-4 flex flex-col md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-bold text-[#8fd32a] text-lg">
                          #J330926
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400 mb-1">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Last Update: 22 - 05 -2025 2:00PM
                      </div>
                      <div className="text-xs text-gray-400">
                        A/C Accumulator Replace... +2 more
                      </div>
                    </div>
                    <div className="flex flex-col items-end mt-3 md:mt-0 min-w-[180px]">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="flex items-center text-xs text-[#8fd32a]">
                          <span className="w-2 h-2 bg-[#8fd32a] rounded-full mr-1"></span>
                          Open
                        </span>
                      </div>
                      <div className="font-bold text-gray-700 text-lg">
                        ₦456.98
                      </div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full mt-2 mb-1">
                        <div
                          className="h-2 bg-[#8fd32a] rounded-full"
                          style={{ width: "58%" }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400">58%</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination at the bottom */}
              <div className="flex items-center justify-between mt-6 text-xs text-gray-500">
                <span>
                  1 <strong>- 7 of 7</strong>
                </span>
                <div className="flex items-center space-x-2">
                  <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-100">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M15 19l-7-7 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-100">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M9 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleJobCards;
