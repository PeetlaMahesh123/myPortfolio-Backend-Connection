require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

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
    console.error("OpenAI Error:", error.message);
    res.status(500).json({
      reply: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
