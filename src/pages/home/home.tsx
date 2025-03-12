import React from "react";
import KonvaCanvas from "@/components/KonvaCanvas/KonvaCanvas";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />

      <div className="flex-1 bg-gray-900 relative">
        <KonvaCanvas />
      </div>

      <div className="w-1/6 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Properties</h2>
        <p className="text-sm">Select an object to view properties.</p>
      </div>
    </div>
  );
};

export default Home;
