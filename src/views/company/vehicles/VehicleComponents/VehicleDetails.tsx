import React from "react";
import { FiCalendar, FiHash, FiCreditCard, FiCircle } from "react-icons/fi";
import { FaBook, FaGasPump, FaCar } from "react-icons/fa6";

const VehicleDetails: React.FC = () => {
  return (
    <div className="col-span-4 bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 mb-4">Details</h3>

      <dl className="space-y-8 divide-y divide-gray-200">
        {/* License */}
        <div className="flex items-center py-3">
          <FiCreditCard className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">License</dt>
            <dd className="text-sm font-medium text-gray-800">EKY-678-00B</dd>
          </div>
        </div>

        {/* Model */}
        <div className="flex items-center py-3">
          <FaCar className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">Model</dt>
            <dd className="text-sm font-medium text-gray-800">
              L460 Autobiography
            </dd>
          </div>
        </div>

        {/* Year */}
        <div className="flex items-center py-3">
          <FiCalendar className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">Year</dt>
            <dd className="text-sm font-medium text-gray-800">2019</dd>
          </div>
        </div>

        {/* VIN/SN */}
        <div className="flex items-center py-3">
          <FiHash className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">VIN/SN</dt>
            <dd className="text-sm font-medium text-gray-800">
              1CA7895FA5994FJRS
            </dd>
          </div>
        </div>

        {/* Color */}
        <div className="flex items-center py-3">
          <FiCircle className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">Color</dt>
            <dd className="text-sm font-medium text-gray-800">Dark Green</dd>
          </div>
        </div>

        {/* Body Type */}
        <div className="flex items-center py-3">
          <FaBook className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">Body Type</dt>
            <dd className="text-sm font-medium text-gray-800">Dark Green</dd>
          </div>
        </div>

        {/* Fuel Type */}
        <div className="flex items-center py-3">
          <FaGasPump className="w-5 h-5 text-gray-400 mr-3" />
          <div>
            <dt className="text-xs text-gray-400">Fuel Type</dt>
            <dd className="text-sm font-medium text-gray-800">PMS</dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default VehicleDetails;
