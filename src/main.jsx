import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/products" element={<div>products Page</div>}></Route>
        <Route path="/card" element={<div>Card Page</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
