require("dotenv").config(); // Load .env variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const Chat = require("./models/Chat");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.post("/api/chat", async (req, res) => {
  const { question, model } = req.body;
  console.log(model);
  if (!question || !model) {
    return res.status(400).json({ error: "Question and model are required" });
  }

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model, // model from frontend
      prompt: question,
      stream: false,
    });

    const answer = response.data.response;

    const chat = new Chat({ question, answer });
    await chat.save();

    res.json({ answer });
  } catch (err) {
    console.error("Ollama error:", err.message);
    res.status(500).json({ error: "Ollama generation failed" });
  }
});

app.get("/api/history", async (req, res) => {
  try {
    const history = await Chat.find().sort({ createdAt: -1 }).limit(50);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
