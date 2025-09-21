import React from "react";
import Layout from "../layout/Layout";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";

const JobExtraDetail: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          Job Cards
        </h2>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <FiMoreHorizontal className="text-gray-600" />
        </button>
      </div>
      <div className="min-h-screen flex">
        {/* Left Panel */}
        <div className="w-4/7 pr-4">
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            {/* Job Details Form */}
            <div className="space-y-5">
              {/* Job Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job number
                </label>
                <div className="text-lg font-semibold text-gray-900 font-mono">
                  JEWD002
                </div>
              </div>

              {/* Customer */}
              <div>
                <label className="block font-medium text-gray-600 mb-1">
                  Customer
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/user-avatar.jpg"
                    alt="Customer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-2 font-semibold text-gray-600">
                    Joshphen Adrewson
                  </div>
                  <span className="ml-auto bg-[#e6f7cb] text-[#8fd32a] px-3 py-1 rounded font-semibold text-xs">
                    Customer
                  </span>
                </div>
              </div>

              {/* Vehicle */}
              <div>
                <label className="block font-medium text-gray-600 mb-1">
                  Customer
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/user-avatar.jpg"
                    alt="Customer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-2 font-semibold text-gray-600">
                    Joshphen Adrewson
                  </div>
                  <span className="ml-auto bg-[#e6f7cb] text-[#8fd32a] px-3 py-1 rounded font-semibold text-xs">
                    Customer
                  </span>
                </div>
              </div>

              {/* Divider */}

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-base font-semibold text-gray-500 mb-4">
                  Details
                </h3>

                {/* Issued Date */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Issued Date</div>
                  <div className="font-semibold text-gray-900">
                    June 03, 2025 2:30AM
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Scheduled Start Date */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Scheduled Start Date
                  </div>
                  <div className="font-semibold text-gray-900">
                    August 28th, 2025 2:30AM
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Actual Start Date */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Actual Start Date
                  </div>
                  <div className="text-gray-300 font-semibold">
                    Date Job Started
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Completion Date */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Completion Date
                  </div>
                  <div className="text-gray-300 font-semibold">
                    Date Job was completed
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Issued By */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">Issues By</div>
                  <div className="flex items-center">
                    <img
                      src="/images/user-avatar.jpg"
                      alt="Issued By"
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <span className="font-semibold text-gray-800">
                      Joshphen Adrewson
                    </span>
                    <FiChevronDown className="ml-auto text-gray-400" />
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Assign To */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">Assign To</div>
                  <div className="flex items-center">
                    <img
                      src="/images/user-avatar.jpg"
                      alt="Assign To"
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <span className="font-semibold text-gray-800">
                      Joshphen Adrewson
                    </span>
                    <FiChevronDown className="ml-auto text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full bg-[#8fd32a] hover:bg-[#7bb022] text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (placeholder for future content) */}
        <div className="w-3/7">
          <div className="rounded-lg shadow-sm border border-gray-200 flex flex-col min-h-[700px] ">
            {/* Issues Section */}
            <div className="bg-white p-4 pb-20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-semibold text-gray-700">
                  Issues
                </span>
                <button className="flex items-center text-[#8fd32a] text-sm font-semibold">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="#8fd32a"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  Add Issues
                </button>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-[#f6f7fa] px-2 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-800 text-base font-medium">
                    Brake Pad Replacements
                  </span>
                  <span className="text-gray-400 text-2xl font-bold">—</span>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-[#f6f7fa] px-2 py-2 rounded-lg cursor-pointer">
                  <span className="text-gray-800 text-base font-medium">
                    Brake Pad Replacements
                  </span>
                  <span className="text-gray-400 text-2xl font-bold">—</span>
                </div>
              </div>
            </div>

            {/* Task Section */}
            <div className="bg-white mt-4 p-4">
              <div className="flex flex-1 ">
                {/* Vertical Tabs */}
                <div className="flex flex-col space-y-2 pr-2 border-r border-gray-100 min-w-[130px]">
                  <button className="flex items-center py-2 px-2 text-base font-semibold text-gray-400 hover:text-[#8fd32a] transition group">
                    <svg
                      className="w-6 h-6 mr-2 text-gray-400 group-hover:text-[#8fd32a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                    </svg>
                    <span className="flex items-center">
                      Services
                      <span className="ml-2 bg-gray-100 text-gray-500 rounded-full py-0.5 text-xs font-bold">
                        3
                      </span>
                    </span>
                  </button>
                  <button className="flex items-center py-2 px-2 text-base font-semibold text-[#8fd32a] border-l-4 border-[#8fd32a] bg-[#f6f7fa]">
                    <svg
                      className="w-6 h-6 mr-2 text-[#8fd32a]"
                      fill="none"
                      stroke="#8fd32a"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 17v-6h6v6m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m-6 0h6" />
                    </svg>
                    <span className="flex items-center">
                      Labor
                      <span className="ml-2 bg-[#e6f7cb] text-[#8fd32a] rounded-full py-0.5 text-xs font-bold">
                        1
                      </span>
                    </span>
                  </button>
                  <button className="flex items-center py-2 px-2 text-base font-semibold text-gray-400 hover:text-[#8fd32a] transition group">
                    <svg
                      className="w-6 h-6 mr-2 text-gray-400 group-hover:text-[#8fd32a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    <span className="flex items-center">
                      Parts
                      <span className="ml-2 bg-gray-100 text-gray-500 rounded-full py-0.5 text-xs font-bold">
                        0
                      </span>
                    </span>
                  </button>
                </div>

                {/* Task List and Edit */}
                <div className="flex-1 pl-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-400">
                      Task
                    </span>
                    <button className="flex items-center text-[#8fd32a] text-base font-semibold">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="#8fd32a"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                      Edit Task
                    </button>
                  </div>
                  <div className="space-y-0">
                    {[1, 2, 3].map((_, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-4 border-b last:border-b-0"
                      >
                        <div className="flex items-center">
                          <img
                            src="/images/user-avatar.jpg"
                            alt="Labor"
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <div className="font-semibold text-gray-800 text-base flex items-center">
                              <svg
                                className="w-5 h-5 mr-1 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v4l3 3" />
                              </svg>
                              Joshphen Adrewson
                            </div>
                            <div className="text-sm text-gray-400 truncate flex items-center">
                              <svg
                                className="w-4 h-4 mr-1 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v4l3 3" />
                              </svg>
                              A/C Accumulator Repl...
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold text-gray-800">
                            $46.08
                          </div>
                          <div className="text-sm text-gray-400">
                            1.5 hr @ $24.26/hr
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Add Labor Button */}
                </div>
              </div>
              <button className="mt-14 w-full border-2 border-dashed border-[#8fd32a] rounded-lg py-2 flex items-center justify-center text-[#8fd32a] font-bold text-lg bg-[#f6f7fa] hover:bg-[#e6f7cb] transition">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="#8fd32a"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4v16m8-8H4" />
                </svg>
                Add Labor
              </button>
            </div>

            {/* Cost Summary */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <div className="text-lg font-semibold text-gray-500 mb-6">
                Cost Summary
              </div>

              {/* Subtotal */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">
                      Subtotal
                    </div>
                    <div className="text-sm text-gray-400">
                      Automatically Calculated
                    </div>
                  </div>
                  <div className="font-bold text-gray-500 text-lg">$490.90</div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Parts */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">
                      Parts
                    </div>
                    <div className="text-sm text-gray-400">Total Parts</div>
                  </div>
                  <div className="font-bold text-gray-500 text-lg">$250.00</div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Labour Markup */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">
                      Labour Markup
                    </div>
                    <div className="text-sm text-gray-400">Addition Charge</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex bg-gray-100 rounded overflow-hidden mr-2">
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200">
                        $
                      </button>
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500">
                        %
                      </button>
                    </div>
                    <input
                      type="text"
                      value="0"
                      className="w-16 text-right border border-gray-200 rounded px-2 py-1 text-gray-700 font-semibold bg-white"
                      readOnly
                    />
                  </div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Parts Markup */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">
                      Parts Markup
                    </div>
                    <div className="text-sm text-gray-400">Addition Charge</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex bg-gray-100 rounded overflow-hidden mr-2">
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200">
                        $
                      </button>
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500">
                        %
                      </button>
                    </div>
                    <input
                      type="text"
                      value="$20.67"
                      className="w-16 text-right border border-gray-200 rounded px-2 py-1 text-gray-700 font-semibold bg-white"
                      readOnly
                    />
                  </div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Discount */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">
                      Discount
                    </div>
                    <div className="text-sm text-gray-400">Total Discount</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex bg-gray-100 rounded overflow-hidden mr-2">
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200">
                        $
                      </button>
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500">
                        %
                      </button>
                    </div>
                    <input
                      type="text"
                      value="-14%"
                      className="w-16 text-right border border-gray-200 rounded px-2 py-1 text-gray-700 font-semibold bg-white"
                      readOnly
                    />
                  </div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Tax */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-gray-700 text-base">Tax</div>
                    <div className="text-sm text-gray-400">Total Tax</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex bg-gray-100 rounded overflow-hidden mr-2">
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200">
                        $
                      </button>
                      <button className="px-2 py-1 text-xs font-semibold text-gray-500">
                        %
                      </button>
                    </div>
                    <input
                      type="text"
                      value="0"
                      className="w-16 text-right border border-gray-200 rounded px-2 py-1 text-gray-700 font-semibold bg-white"
                      readOnly
                    />
                  </div>
                </div>
                <div className="border-b border-gray-100 mt-4" />
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-6">
                <div className="font-bold text-gray-700 text-xl">Total</div>
                <div className="font-bold text-gray-500 text-xl">$704.79</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobExtraDetail;
