import { useState } from "react";
import { Home, Calendar, FileText, Building2, Wrench, User } from "lucide-react";

export default function SidebarDark() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [{ name: "Dashboard", icon: Home }];

  const apps = [
    { name: "Vehicles", icon: Calendar },
    { name: "Appointments", icon: Calendar },
    { name: "Job Cards", icon: FileText, badge: "New" },
    { name: "Workshop", icon: Building2 },
    { name: "Services", icon: Wrench },
  ];

  const userMenu = [{ name: "Profile", icon: User }];

  return (
    <aside className="w-64 bg-[#1a1d1f] text-gray-300 h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 px-4 py-6">
        <img
          src="/assets/company-logo.png"
          alt="Company Logo"
          className="w-12 h-12 rounded-full"
        />
        <div className="pl-2 space-y-2">
          <h2 className="font-semibold text-white">Coscharis Motors</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span className="text-[#8fd32a] font-medium">● Verified</span>
            <span className="pl-2">⭐ 4.8</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-500 mb-2">MENU</p>
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center w-full px-3 py-2 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a] bg-[#2a2e31]"
                : "text-gray-400 hover:bg-[#2a2e31] hover:text-white"
            }`}
          >
            <Icon size={18} className="mr-3" />
            {name}
          </button>
        ))}

        <p className="text-xs font-semibold text-gray-500 mt-9 mb-2">APPS</p>
        {apps.map(({ name, icon: Icon, badge }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center justify-between w-full px-3 py-3 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a] bg-[#2a2e31]"
                : "text-gray-400 hover:bg-[#2a2e31] hover:text-white"
            }`}
          >
            <span className="flex items-center">
              <Icon size={18} className="mr-3" />
              {name}
            </span>
            {badge && (
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#8fd32a] text-black font-semibold">
                {badge}
              </span>
            )}
          </button>
        ))}

        <p className="text-xs font-semibold text-gray-500 mt-6 mb-2">USER</p>
        {userMenu.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center w-full px-3 py-2 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a] bg-[#2a2e31]"
                : "text-gray-400 hover:bg-[#2a2e31] hover:text-white"
            }`}
          >
            <Icon size={18} className="mr-3" />
            {name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
