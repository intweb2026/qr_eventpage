import React from "react";
import { Link } from "react-router-dom";
import "./EventMobileMenu.css";
import Navbar from "./Navbar";
import { heroVideoSrc, heroPoster } from "./mediaassets";

// NOTE: these Figma asset URLs expire after about 7 days.
// Download the files and move them into your own /public or /assets
// folder before this ships, then swap these constants for local imports.
const titleLockup = "https://www.figma.com/api/mcp/asset/baacb20a-8ad5-42f1-bd2c-eeccbcb1b764.svg";
const forwardIcon = "https://www.figma.com/api/mcp/asset/9f9f43bd-6e44-4b0a-87e5-242f06bf46dd.png";

const iconAgenda = "https://www.figma.com/api/mcp/asset/b57508fb-d6ec-419f-a97f-65ae5cf51f7f.png";
const iconDelegates = "https://www.figma.com/api/mcp/asset/a1bb2a06-cce2-4775-b50d-ca811f461c92.png";
const iconGlobe = "https://www.figma.com/api/mcp/asset/78ef1da4-9d5f-4e23-8333-6be93d1c0b4d.png";
const iconLinkedin = "https://www.figma.com/api/mcp/asset/dabb6268-70aa-4d2b-82a3-8c0746a965e2.png";

// Items with `to` route inside the app (react-router Link). Items with
// `href` are placeholders or real external links, swap in your real URLs
// once the event data is in.
const MENU_ITEMS = [
  { label: "Agenda", icon: iconAgenda, href: "https://www.usa.water-leakage-summit.com/agenda" },
  { label: "Delegate Registration List", icon: iconDelegates, to: "/delegates" },
  { label: "Industry LinkedIn Page", icon: iconLinkedin, href: "https://www.linkedin.com/showcase/water-infra-iq-hub" },
  { label: "IQ Hub LinkedIn", icon: iconLinkedin, href: "https://www.linkedin.com/company/iqhub-conferences" },
  { label: "IQ Hub Website", icon: iconGlobe, href: "https://www.iq-hub.com/" },
];

export default function EventMobileMenu() {
  return (
    <div className="wls-menu">
      <video
        className="wls-menu__video"
        src={heroVideoSrc}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="wls-menu__overlay" aria-hidden="true" />

      <Navbar variant="transparent" />

      <div className="wls-menu__content">

        <div className="wls-menu__card">
          <img src={titleLockup} alt="Water Leakage Summit 2026" className="wls-menu__title" />

          <p className="wls-menu__subtitle">
            {"The premier forum for advancing\nwater loss control and\nnetwork resilience"}
          </p>

          <div className="wls-menu__list">
            {MENU_ITEMS.map((item) => {
              const content = (
                <>
                  <span className="wls-menu__icon">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="wls-menu__divider" aria-hidden="true" />
                  <span className="wls-menu__label">{item.label}</span>
                  <img src={forwardIcon} alt="" className="wls-menu__arrow" />
                </>
              );
              return (
                <div key={item.label} className="wls-menu__item">
                  {item.to ? (
                    <Link to={item.to} className="wls-menu__link">
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="wls-menu__link"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {content}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}