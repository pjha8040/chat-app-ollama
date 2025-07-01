import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">Promptica</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Experience the power of local AI with cutting-edge models like{" "}
          <strong className="text-blue-600 dark:text-blue-400">qwen3:4b</strong>{" "}
          and{" "}
          <strong className="text-blue-600 dark:text-blue-400">gemma3</strong>,
          right from your browser.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/chat"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Start Chatting
          </Link>
          <Link
            to="/history"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            View History
          </Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          Explore more features using the navigation bar above.
        </p>
      </div>
    </div>
  );
}
