import React from "react";
import KonvaBoard from "@/components/KonvaBoard/KonvaBoard";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./home.scss";
import { BoardLayoutProvider } from "@/contexts/BoardLayoutContext";
import Properties from "@/components/Properties/Properties";

const Home = () => {
  return (
    <BoardLayoutProvider>
      <div className="home-container">
        <Sidebar />
        <KonvaBoard />
        <Properties />
      </div>
    </BoardLayoutProvider>
  );
};

export default Home;
