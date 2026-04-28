/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-green-100', 'text-green-600', 'text-green-700',
    'bg-blue-100', 'text-blue-600', 'text-blue-700',
    'bg-purple-100', 'text-purple-600', 'text-purple-700',
    'bg-pink-600', 'text-pink-600',
    'hover:border-purple-400', 'hover:border-pink-400',
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#333333",
      secondary: "#4ECDC4",
      textColor: "white",
      bgColor: "gray",
      boxColor:" #F5F5F5",
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
      },
      red: { 600: '#dc2626' },
      green: { 100: '#dcfce7', 600: '#16a34a', 700: '#15803d' },
      blue: { 100: '#dbeafe', 600: '#2563eb', 700: '#1d4ed8' },
      purple: { 100: '#f3e8ff', 400: '#c084fc', 600: '#9333ea', 700: '#7e22ce' },
      pink: { 400: '#f472b6', 600: '#db2777' },
    },
  },
  plugins: [],
}