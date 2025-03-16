import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-7xl min-h-screen mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
