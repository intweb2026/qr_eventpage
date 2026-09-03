import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EventMobileMenu from "./EventMobileMenu";
import RegisteredDelegatesMobile from "./RegisteredDelegatesMobile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<EventMobileMenu />} />
      <Route path="/delegates" element={<RegisteredDelegatesMobile />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);