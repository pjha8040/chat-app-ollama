import React, { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [model, setModel] = useState("qwen3:4b");
  const models = ["qwen3:4b", "gemma3"];

  const handleSubmit = async () => {
    if (!question.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        question,
        model,
      });

      const raw = res.data.answer;
      const clean = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();

      setAnswer(clean);
      setQuestion("");
    } catch {
      setAnswer("Error getting response.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Chat with AI
        </h2>

        <div className="mb-6">
          <label
            htmlFor="model-select"
            className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
          >
            Select Model:
          </label>
          <select
            id="model-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          >
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={6}
          placeholder="Type your question here..."
          className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 resize-none"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Get Answer
        </button>

        {answer && (
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Answer:
            </h3>
            <p className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
