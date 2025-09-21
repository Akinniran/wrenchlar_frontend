import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="min-h-screen flex flex-col bg-gray-100">
          <main className="flex-1 overflow-y-auto py-6 pl-3 pr-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
