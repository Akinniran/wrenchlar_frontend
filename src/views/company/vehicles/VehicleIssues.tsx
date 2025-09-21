import React from "react";
import Layout from "../layout/Layout";
import VehicleHeader from "./VehicleComponents/VehicleHeader";
import VehicleDetails from "./VehicleComponents/VehicleDetails";
import VehicleTabs from "./VehicleComponents/VehicleTabs";

const VehicleIssues: React.FC = () => {
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
                Issues
              </span>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
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
                    className="bg-white rounded-lg px-4 py-2"
                  >
                    {/* Header row: Title + Status */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">
                          A/C Compressor Replacement
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Need logo design inspiration? We've curated 2100+ of
                          the best logo designs from 72 of the most popular
                          industries, and included design tips for each.
                        </p>
                      </div>
                      <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-md">
                        Critical
                      </span>
                    </div>

                    {/* Last update */}
                    <div className="flex items-center text-xs text-gray-400 mt-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Last Update: 22 - 05 -2025 2:00PM
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

export default VehicleIssues;
