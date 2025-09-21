import React from "react";
import Layout from "../layout/Layout";

const AppointmentDetails: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
          Appointment
        </h2>
      </div>

      <div className="p-2 min-h-screen flex">
        <div className="w-4/7 pr-4">
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            {/* Job Details Form */}
            <div className="space-y-5">
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
              <div className="border-t border-gray-300 pt-6">
                <label className="block font-medium text-gray-600 mb-1">
                  Vehicle
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
                  <div className="text-sm text-gray-400 mb-1">Concerns</div>
                  <div className="font-semibold text-gray-600">
                    ryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd vndbvhdbv dvhdbvj
                    dvjdbvmd vryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd vndbvhdbv
                    dvhdbvj dvjdbvmd vryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd
                    vndbvhdbv dvhdbvj dvjdbvmd vryueyrueyrueybfhdbudvbd
                    vndvjdbvdbvjdvjd vndbvhdbv dvhdbvj dvjdbvmd
                    vryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd vndbvhdbv dvhdbvj
                    dvjdbvmd vryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd vndbvhdbv
                    dvhdbvj dvjdbvmd vryueyrueyrueybfhdbudvbd vndvjdbvdbvjdvjd
                    vndbvhdbv dvhdbvj dvjdbvmd vryueyrueyrueybfhdbudvbd
                    vndvjdbvdbvjdvjd vndbvhdbv dvhdbvj dvjdbvmd v
                  </div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Actual Start Date */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Scheduled Date
                  </div>
                  <div className="text-gray-700 font-semibold">August 2025</div>
                </div>
                <div className="border-t border-gray-300" />

                {/* Completion Date */}
                <div className="my-4">
                  <div className="text-sm text-gray-400 mb-1">
                    Address (Optional)
                  </div>
                  <div className="text-gray-300 font-semibold">
                    Enter Address
                  </div>
                </div>
                <div className="border-t border-gray-300" />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button className="w-full bg-[#8fd32a] hover:bg-[#7bb022] text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentDetails;
