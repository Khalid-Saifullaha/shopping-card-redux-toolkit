import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4">Navbar</nav>
      <main className="max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
