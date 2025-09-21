/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#8fd32a",
        "primary-light": "#e6f7cb",
        "accent-blue": "#e6f0fa",
        "accent-gray": "#f6f7fa",
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
        "danger": "#ef4444",
        "warning": "#f59e42",
        "success": "#22c55e",
        "info": "#3b82f6",
      },
      borderRadius: {
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(16, 30, 54, 0.06)",
        modal: "0 6px 32px 0 rgba(16, 30, 54, 0.12)",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};