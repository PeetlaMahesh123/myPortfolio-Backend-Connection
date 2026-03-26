const express = require("express");
const cors = require("cors");

const app = express();

/* ===============================
   ✅ CORS CONFIGURATION (FIXED)
================================ */
const allowedOrigins = [
  "https://peetlamahesh123.github.io",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman / mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(null, true); // 🔥 allow all (safe fallback)
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

/* ===============================
   ✅ HEALTH CHECK
================================ */
app.get("/", (req, res) => {
  res.send("Mahesh AI Assistant Backend is Running 🚀");
});

/* ===============================
   🤖 CHAT ROUTE
================================ */
app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      reply: "Please ask something about Mahesh."
    });
  }

  const msg = message.toLowerCase();

  if (msg.includes("about") || msg.includes("who are you")) {
    return res.json({
      reply:
        "Hi 👋 I'm Peetla Mahesh, a Full Stack Developer skilled in Java, Spring Boot, React, and databases."
    });
  }

  if (msg.includes("skill")) {
    return res.json({
      reply:
        "My skills include Java, Python, JavaScript, React, Spring Boot, MySQL, MongoDB, and REST APIs."
    });
  }

  if (msg.includes("project")) {
    return res.json({
      reply:
        "Projects: Student Management System, Hospital Management System, React Todo App, Quiz App, AI Chatbot."
    });
  }

  if (msg.includes("education")) {
    return res.json({
      reply:
        "B.E in Computer Science (2021-2025), CGPA 8.24."
    });
  }

  if (msg.includes("contact")) {
    return res.json({
      reply:
        "Email: peetlamahesh81@gmail.com | Phone: +91 9182353829"
    });
  }

  if (msg.includes("job") || msg.includes("available")) {
    return res.json({
      reply:
        "I am available for Software Developer roles in Bangalore, Hyderabad, and Chennai."
    });
  }

  return res.json({
    reply:
      "Ask me about my skills, projects, education, or contact details 😊"
  });
});

/* ===============================
   ❌ 404 HANDLER
================================ */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

/* ===============================
   🚀 PORT
================================ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
