import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPageMobile.css";
import { heroVideoSrc, heroPoster } from "./mediaassets";

// NOTE: same asset-expiry note as EventMobileMenu — move this to your own
// asset pipeline before this ships.
const logoMark = "https://www.figma.com/api/mcp/asset/7750f772-4c8d-42aa-8936-cd8e8eed8aed.svg";

export default function LoginPageMobile({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // There's no real auth call yet, so VERIFY just moves on to the list.
    // Once you have a real check, only call navigate() after it succeeds.
    onSubmit?.({ email, password });
    navigate("/delegates");
  };

  return (
    <div className="login-mobile">
      <video
        className="login-mobile__video"
        src={heroVideoSrc}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="login-mobile__overlay" aria-hidden="true" />

      <button type="button" className="login-mobile__toggle" aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <img src={logoMark} alt="Water Leakage Summit 2026" className="login-mobile__logo" />

      <form className="login-mobile__card" onSubmit={handleSubmit}>
        <h1 className="login-mobile__title">Access the Delegate Registration List</h1>
        <p className="login-mobile__subtitle">
          Please verify below to access the delegate registration list.
        </p>

        <label className="login-mobile__field">
          <span className="login-mobile__field-label">Email address*</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address*"
            aria-label="Email address"
          />
        </label>

        <label className="login-mobile__field">
          <span className="login-mobile__field-label">Password*</span>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password*"
            aria-label="Password"
          />
        </label>

        <button type="submit" className="login-mobile__verify">
          VERIFY
        </button>

        <p className="login-mobile__help">
          If you do not have these details and would like to gain access please email our
          delegates team at{" "}
          <a href="mailto:delegates@iq-hub.com">delegates@iq-hub.com</a>
        </p>
      </form>
    </div>
  );
}