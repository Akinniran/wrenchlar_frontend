import { useState } from "react";
import { Home, Calendar, FileText, Building2, Wrench, User } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: Home },
  ];

  const apps = [
    { name: "Vehicles", icon: Calendar },
    { name: "Appointments", icon: Calendar },
    { name: "Job Cards", icon: FileText, badge: "New" },
    { name: "Workshop", icon: Building2 },
    { name: "Services", icon: Wrench },
  ];

  const userMenu = [{ name: "Profile", icon: User }];

  return (
    <aside className="w-64 bg-white h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center space-x-3 px-4 py-6">
        <img
          src="/assets/company-logo.png"
          alt="Company Logo"
          className="w-16 h-12 rounded-full"
        />
        <div className="pl-2 space-y-2">
          <h2 className="font-semibold text-gray-900">Coscharis Motors</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="text-[#8fd32a] font-medium">● Verified</span>
            <span className="pl-2">⭐ 4.8</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-400 mb-2">MENU</p>
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center w-full px-3 py-2 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a]"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon size={18} className="mr-3" />
            {name}
          </button>
        ))}

        <p className="text-xs font-semibold text-gray-400 mt-9 mb-2">APPS</p>
        {apps.map(({ name, icon: Icon, badge }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center justify-between w-full px-3 py-4 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a]"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="flex items-center">
              <Icon size={18} className="mr-3" />
              {name}
            </span>
            {badge && (
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-500 text-white">
                {badge}
              </span>
            )}
          </button>
        ))}

        <p className="text-xs font-semibold text-gray-400 mt-6 mb-2">USER</p>
        {userMenu.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center w-full px-3 py-2 mb-1 text-sm font-medium rounded-lg transition ${
              active === name
                ? "text-[#8fd32a]"
                : "text-gray-600 hover:bg-gray-100"
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
