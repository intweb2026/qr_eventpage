// Shared between EventMobileMenu, LoginPageMobile, and RegisteredDelegatesMobile
// so every screen uses the exact same background video, poster image, and
// header logo lockup. Change any of these once here and every screen picks
// it up.
//
// NOTE: heroPoster and headerLogo are Figma asset URLs and expire after
// about 7 days — move them into your own /public or /assets folder before
// this ships.
export const heroVideoSrc = "/videos/scanner_video_home.mp4";
export const backButtonBlack = "/images/5db0687702c36b358fbe28945225f47e373f5a09.png";
export const backButtonBlue = "/images/88f7592be7af54d35cecf006c117213a1e58d06e.png";
export const heroPoster = "https://www.figma.com/api/mcp/asset/631f6327-9791-49ff-82d4-b7ee2d0ce0cd.png";
export const headerLogo = "https://www.figma.com/api/mcp/asset/7750f772-4c8d-42aa-8936-cd8e8eed8aed.svg";

// Same lockup, black instead of white, for the delegates page's white
// background — the white headerLogo above would be invisible there.
export const headerLogoDark = "https://www.figma.com/api/mcp/asset/7d0c59af-f099-4c6f-9fbc-5c4928247ca2.svg";