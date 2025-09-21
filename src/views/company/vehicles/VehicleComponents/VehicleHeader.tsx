import React from "react";
import { FiCalendar, FiHash } from "react-icons/fi";

const VehicleHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-start space-x-8">
        {/* Vehicle Logo */}
        <img
          src="/assets/landrover-logo.png"
          alt="Land Rover"
          className="w-16 h-16 rounded-lg object-contain"
        />

        {/* Vehicle Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            Land Rover{" "}
            <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
          </h2>
          <p className="text-sm text-gray-500 tracking-wide space-x-2">
            L460 Autobiography • EKY-678-00B
          </p>

          <div className="flex items-center text-sm text-gray-400 mt-2 space-x-4">
            <span className="flex items-center space-x-2">
              <FiCalendar /> <span>22 • 05 • 2025 2:00PM</span>
            </span>
            <span className="flex items-center space-x-1">
              <FiHash /> <span>1CA7895FA8594FJRS</span>
            </span>
          </div>

          <p className="text-sm text-gray-700 font-medium mt-4">
            <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
              J
            </span>{" "}
            Joshphen Adrewson
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end space-y-3">
        {/* Status */}
        <span className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>{" "}
          Available
        </span>

        {/* Edit Button */}
        <button className="flex items-center space-x-2 px-3 py-1 bg-lime-100 text-lime-700 rounded-md text-sm font-medium hover:bg-lime-200">
          <span>Edit Vehicle</span>
        </button>

        {/* Dealer Info */}
        <div className="flex items-center space-x-2 mt-2">
          <img
            src="/assets/dealer-avatar.jpg"
            alt="Dealer"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Coscharis Motors
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="text-green-600 font-medium">✔ Verified</span>
              <span className="text-yellow-500">⭐ 4.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleHeader;
