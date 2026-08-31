# Water Leakage Summit 2026, mobile screens

Standalone Create React App project containing three components built from the Figma file, Frame 6082, Login Page - Mobile, and Registered Delegates - Mobile.

## Run it

Unzip the folder, open a terminal inside it, then run.

```
npm install
npm start
```

The app opens at http://localhost:3000, and `src/index.js` stacks all three screens on that one page so you can see them together. Swap in whichever single component you actually need per route.

## Files that matter

- `src/EventMobileMenu.jsx` and `.css`, the link-list menu screen
- `src/LoginPageMobile.jsx` and `.css`, the verify form
- `src/RegisteredDelegatesMobile.jsx` and `.css`, the delegates table
- `src/index.js`, mounts all three for preview

## Before this goes live

The image and icon URLs at the top of each component point at Figma's asset host, which expires links after about seven days. Download those files and move them into `public`, then swap the constants for local paths, for example `/logo-mark.svg`.

The `href` values in `EventMobileMenu.jsx`'s `MENU_ITEMS` array are placeholders. Point them at your real routes once the event data is in.

`RegisteredDelegatesMobile.jsx` ships with one clean set of 22 delegates. The Figma mock-up repeated that same set three times over to fill the scroll length, which isn't real content, so it's collapsed here; pass your own `delegates` array once real registration data is wired up.

`LoginPageMobile.jsx` calls an `onSubmit` prop with `{ email, password }` on submit; wire that up to your real auth call.
