import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EventMobileMenu from "./EventMobileMenu";
import RegisteredDelegatesMobile from "./RegisteredDelegatesMobile";

// Route map: menu screen at "/", "Delegate Registration List" there goes
// straight to "/delegates" now, no login step in between. LoginPageMobile.jsx
// is still in the project if you want it back, just not wired into a route.
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