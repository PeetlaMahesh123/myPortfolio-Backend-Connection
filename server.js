require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route (important for testing)
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// OpenAI Setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Portfolio Data
const portfolioData = `
Peetla Mahesh is an Aspiring Software Developer from Tirupati, Andhra Pradesh.

Skills:
Java, Python, C, JavaScript, HTML, CSS, React.js, Spring Boot, Hibernate, MySQL, MongoDB.

Projects:
Student Database Management System,
Hospital Management System,
Shop Management System using Hibernate.

Education:
B.E CSE (2021-2025) CGPA 8.24

Status:
Available for Software Developer roles.
Preferred locations: Bangalore, Hyderabad, Chennai.
Available immediately.
`;

// Chat Route
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required." });
    }

    console.log("Incoming message:", message);
    console.log("API Key exists:", !!process.env.OPENAI_API_KEY);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are Mahesh's AI assistant.
Answer ONLY using this information:
${portfolioData}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error);
    res.status(500).json({
      reply: error.message || "OpenAI API failed",
    });
  }
});

// Port Configuration (Railway safe)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
