// Header/nav for EventMobileMenu, shares the project's own logo and menu
// links so it does not depend on a separate route or a different app's
// asset paths.

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { headerLogo, headerLogoDark } from "./mediaassets";

// All real site paths live on the main site, not on wherever this small
// menu app itself is hosted, so every path below is built off this one
// base URL rather than a relative in-app route.
const SITE_BASE_URL = "https://www.usa.water-leakage-summit.com";

// ---- Nav data, edit this array for your project ----
// `dropdown`, an array of {name, href}, turns an item into a group label,
// desktop shows its children on hover and still links its own href on
// click, mobile drills into them on tap with a back arrow to return, and
// the label itself is a link to the same href inside that drilled view.
const NAV_ITEMS = [
  {
    name: "Event Details",
    href: `${SITE_BASE_URL}/agenda-page`,
    dropdown: [
      { name: "Register & Book Now", href: `${SITE_BASE_URL}/booking` },
      { name: "Program 2026", href: `${SITE_BASE_URL}/agenda` },
      { name: "Who Should Attend", href: `${SITE_BASE_URL}/who-should-attend` },
    ],
  },
  {
    name: "Speakers",
    href: `${SITE_BASE_URL}/speakers`,
    dropdown: [
      { name: "Call For Presentations", href: `${SITE_BASE_URL}/speakers` },
      { name: "Featured Speakers", href: `${SITE_BASE_URL}/featured-speakers` },
    ],
  },
  { name: "Sponsors", href: `${SITE_BASE_URL}/sponsors` },
  { name: "Venue", href: `${SITE_BASE_URL}/venue` },
  {
    name: "Resources",
    href: `${SITE_BASE_URL}/news`,
    dropdown: [
      { name: "Latest News", href: `${SITE_BASE_URL}/news` },
      { name: "Media Partners", href: `${SITE_BASE_URL}/media-partners` },
      { name: "FAQ", href: `${SITE_BASE_URL}/faq` },
    ],
  },
  { name: "Contact Us", href: `${SITE_BASE_URL}/contact-us` },
];

// A link only opens in a new tab when it actually leaves the site, every
// path above shares SITE_BASE_URL, so this only fires for a genuinely
// different domain, kept for whenever a real third-party link is added.
const isExternalHref = (href) => href.startsWith("http") && !href.startsWith(SITE_BASE_URL);

const REGISTER_URL = `${SITE_BASE_URL}/booking`;

// `variant`, "transparent" keeps the header see-through with white text over
// a hero image or video regardless of scroll position, "white" keeps it on
// a solid white bar with dark text, leaving it unset falls back to the
// original scroll-driven behaviour for a standard homepage.
const Navbar = ({ disableScrollEffect = false, forceScrolled = false, variant }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsHomePage(window.location.pathname === "/");
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const less1024 = windowWidth < 1025;

  const showWhiteNavbar =
    variant === "transparent"
      ? false
      : variant === "white"
      ? true
      : isHomePage
      ? less1024
        ? false
        : forceScrolled || (!disableScrollEffect && scrolled)
      : true;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentPath = window.location.pathname;
    const index = NAV_ITEMS.findIndex((item) => {
      if (item.href === currentPath) return true;
      if (currentPath === "/" && item.href === "/") return true;
      if (item.href !== "/" && currentPath.startsWith(item.href)) return true;
      return false;
    });
    setActiveNavItem(
      index !== -1 && !NAV_ITEMS[index]?.dropdown ? index : null
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setScrolled(window.scrollY > 40);
    if (disableScrollEffect || forceScrolled || less1024 || variant) {
      setScrolled(false);
      return;
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableScrollEffect, forceScrolled, less1024, variant]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const goToRegister = () => {
    window.location.href = REGISTER_URL;
  };

  return (
    <header
      className={
        showWhiteNavbar ? "NewNavbar_wholeContainerWhite__QY0eF" : "NewNavbar_wholeContainer__z2zti"
      }
      style={{
        backgroundColor:
          isMobileMenuOpen && less1024
            ? "#000000cc"
            : showWhiteNavbar
            ? "#fff"
            : "transparent",
      }}
    >
      <div className="NewNavbar_container__dGANs">
        <div className="NewNavbar_logo__D1qkF">
          <a href="/">
            <img
              src={showWhiteNavbar ? headerLogoDark : headerLogo}
              alt="Water Leakage Summit 2026"
              height={50}
              loading="lazy"
            />
          </a>
        </div>

        <div
          className={
            "NewNavbar_navLinksContainer__s15t3" +
            (less1024 && !isMobileMenuOpen ? " NewNavbar_hide__g8Glm" : "")
          }
        >
          <div className="NewNavbar_linksContainer__tbm-r">
            <ul>
              {NAV_ITEMS.map((item, index) => {
                const hasDropdown = !!item.dropdown;
                const isActive = activeMobileDropdown === index;
                const isExternal = isExternalHref(item.href);

                if (less1024) {
                  if (isDropdownOpen) {
                    if (!isActive) return null;
                    return (
                      <li key={index}>
                        <a
                          href="/"
                          className="navbar-back"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsDropdownOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M8 1 3 6l5 5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </a>
                        {/* a plain div, not an anchor, both the label link and
                            the sub links below are real anchors, and nesting
                            an <a> inside another <a> is invalid HTML that
                            breaks click targets */}
                        <div className="navbar-active-label">
                          <a href={item.href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                            {item.name}
                          </a>
                          <div className="NewNavbar_resExpansionMenu__5GuSM">
                            {item.dropdown.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.href}
                                {...(isExternalHref(sub.href)
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        onClick={(e) => {
                          if (hasDropdown) {
                            e.preventDefault();
                            setActiveMobileDropdown(index);
                            setIsDropdownOpen(true);
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      if (activeNavItem !== index) setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      if (activeNavItem !== index) setHoveredIndex(null);
                    }}
                    onClick={() => {
                      if (!hasDropdown) setActiveNavItem(index);
                    }}
                  >
                    <a
                      href={item.href}
                      className={activeNavItem === index ? "navbar-active-no-hover" : ""}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.name}
                    </a>
                    {hasDropdown && (
                      <div
                        className="NewNavbar_expansionMenuOuter__wKpka"
                        style={{
                          visibility: hoveredIndex === index ? "visible" : "hidden",
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                      >
                        <div className="NewNavbar_expansionMenu__KBWXI">
                          {item.dropdown.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.href}
                              {...(isExternalHref(sub.href)
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              style={{
                display: activeMobileDropdown !== null && isDropdownOpen ? "none" : "",
              }}
              onClick={goToRegister}
            >
              Register
            </button>
          </div>
        </div>

        <div className="NewNavbar_register__UET28">
          <button onClick={goToRegister}>Register</button>
          {less1024 && !isMobileMenuOpen && (
            <svg
              width="33"
              height="28"
              viewBox="0 0 33 28"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <rect width="33" height="6" fill="var(--primary-color)"></rect>
              <rect y="11" width="33" height="6" fill="var(--primary-color)"></rect>
              <rect y="22" width="33" height="6" fill="var(--primary-color)"></rect>
            </svg>
          )}
          {less1024 && isMobileMenuOpen && (
            <svg
              className="NewNavbar_close__YvNRt"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <rect x="-1" y="9" width="24" height="4" transform="rotate(45 11 11)" fill="var(--primary-color)" />
              <rect x="-1" y="9" width="24" height="4" transform="rotate(-45 11 11)" fill="var(--primary-color)" />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
