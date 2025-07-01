import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow">
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        Promptica
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/chat"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Chat
        </Link>
        <Link
          to="/history"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          History
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Contact
        </Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
