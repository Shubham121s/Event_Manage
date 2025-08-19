// In your app's tailwind.config.js (e.g., apps/web/tailwind.config.js)
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include shared UI package
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    // Include any other packages that use Tailwind
    "../../packages/*/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
