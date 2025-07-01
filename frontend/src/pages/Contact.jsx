import React from "react";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out through any of the platforms below:
        </p>
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <a
              href="YOUR_GITHUB_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-xl font-medium"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.687-.206.687-.458 0-.225-.007-.975-.011-1.912-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.827-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .254.212.545.69.457C21.133 20.197 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-xl font-medium"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-1.11 0-2-.9-2-2s.89-2 2-2 2 .9 2 2-.89 2-2 2zM19 19h-3v-5.3c0-1.3-.5-2.2-1.7-2.2-1.3 0-2 .9-2 2.2V19h-3V8h3v1.8c.7-.9 1.6-1.8 3-1.8 2.2 0 3.8 1.4 3.8 4.5V19z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="mailto:YOUR_EMAIL_ADDRESS"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-xl font-medium"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M.05 3.555A2 2 0 012 2h20a2 2 0 011.95 1.555L12 12.5 0 3.555zM0 5.2V19a2 2 0 002 2h20a2 2 0 002-2V5.2L12.477 14.8a2 2 0 01-1.954 0L0 5.2z"
                  clipRule="evenodd"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
