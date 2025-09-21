import React, { useState } from "react";

const VehicleTabs: React.FC = () => {
  const tabs = ["Overview", "Job Cards", "Issues"];
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <div className="flex space-x-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "text-[#8fd32a] border-b-2 border-[#8fd32a]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Example of showing content based on active tab */}
      <div className="mt-4">
        {activeTab === "Overview"}
        {activeTab === "Job Cards"}
        {activeTab === "Issues"}
      </div>
    </div>
  );
};

export default VehicleTabs;
