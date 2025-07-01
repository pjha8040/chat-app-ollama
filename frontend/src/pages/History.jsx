import React, { useEffect, useState } from "react";
import axios from "axios";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get("http://localhost:5000/api/history");
      setHistory(res.data);
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Chat History
        </h2>
        <div className="space-y-6">
          {history.length > 0 ? (
            history.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm"
              >
                <p className="font-semibold text-gray-800 dark:text-white mb-2">
                  <span className="text-blue-600 dark:text-blue-400">Q:</span>{" "}
                  {item.question}
                </p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  <span className="text-green-600 dark:text-green-400">A:</span>{" "}
                  {item.answer}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
              No chat history available. Start a conversation in the Chat
              section!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
