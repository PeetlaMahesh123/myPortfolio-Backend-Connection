const express = require("express");
const cors = require("cors");

const app = express();

/* ===============================
   ✅ CORS CONFIGURATION (FIXED)
================================ */
const corsOptions = {
  origin: "https://peetlamahesh123.github.io", // your frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight

app.use(express.json());

/* ===============================
   ✅ HEALTH CHECK ROUTE
================================ */
app.get("/", (req, res) => {
  res.send("Mahesh AI Assistant Backend is Running 🚀");
});

/* ===============================
   🤖 FREE SMART AI ASSISTANT
================================ */
app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      reply: "Please ask something about Mahesh."
    });
  }

  const msg = message.toLowerCase();

  // About
  if (msg.includes("about") || msg.includes("who are you") || msg.includes("introduce")) {
    return res.json({
      reply:
        "Hi 👋 I'm Peetla Mahesh, an aspiring Software Developer skilled in Full-Stack Development, Java, Python, React.js, Spring Boot, MySQL, and MongoDB."
    });
  }

  // Skills
  if (msg.includes("skill") || msg.includes("technology") || msg.includes("tech stack")) {
    return res.json({
      reply:
        "My skills include Java, Python, C, JavaScript, React.js, Spring Boot, Node.js (Basics), MySQL, MongoDB, REST APIs, and Data Structures."
    });
  }

  // Projects
  if (msg.includes("project")) {
    return res.json({
      reply:
        "Projects: Student Management System, Hospital Management System, Shop Management System, React Todo App, Online Quiz App, Guess Word Game, AI College Chatbot."
    });
  }

  // Education
  if (msg.includes("education") || msg.includes("degree") || msg.includes("college")) {
    return res.json({
      reply:
        "I am pursuing B.E in Computer Science (2021-2025) with CGPA 8.24 at Akshaya College of Engineering and Technology."
    });
  }

  // Certifications
  if (msg.includes("certificate") || msg.includes("achievement")) {
    return res.json({
      reply:
        "Certifications include Dr. Kalam Young Achiever Award, JPMorgan Simulation, Cisco Network Essentials, MongoDB Atlas, ServiceNow Admin, UiPath Automation."
    });
  }

  // Internship
  if (msg.includes("internship") || msg.includes("experience")) {
    return res.json({
      reply:
        "I completed a Java Internship at Compad Systems, Hyderabad with real-world backend experience."
    });
  }

  // Location
  if (msg.includes("location") || msg.includes("where")) {
    return res.json({
      reply:
        "I am from Tirupati, Andhra Pradesh, India."
    });
  }

  // Contact
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
    return res.json({
      reply:
        "Contact me at 📧 peetlamahesh81@gmail.com or 📱 +91 9182353829."
    });
  }

  // Availability
  if (msg.includes("job") || msg.includes("available") || msg.includes("opportunity")) {
    return res.json({
      reply:
        "I am available for Software Developer roles in Bangalore, Hyderabad, and Chennai."
    });
  }

  // Default response
  return res.json({
    reply:
      "Ask about my skills, projects, education, internship, or contact details 😊"
  });
});

/* ===============================
   🚀 PORT CONFIGURATION
================================ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
