const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
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
        "Hi 👋 I'm Peetla Mahesh, an aspiring Software Developer skilled in Full-Stack Development, Java, Python, React.js, Spring Boot, MySQL, and MongoDB. I enjoy building scalable real-world applications and writing clean, maintainable code."
    });
  }

  // Skills
  if (msg.includes("skill") || msg.includes("technology") || msg.includes("tech stack")) {
    return res.json({
      reply:
        "My technical skills include Java, Python, C, JavaScript, React.js, Spring Boot, Hibernate, Node.js (Basics), MySQL, MongoDB, REST APIs, Data Structures & Algorithms, and OOP."
    });
  }

  // Projects
  if (msg.includes("project")) {
    return res.json({
      reply:
        "I have built several projects including Student Management System (JDBC), Hospital Management System, Shop Management System (Hibernate), React Todo App, Online Quiz Application, Guess Word Game, and AI-powered College Chatbot."
    });
  }

  // Education
  if (msg.includes("education") || msg.includes("degree") || msg.includes("college")) {
    return res.json({
      reply:
        "I am pursuing B.E in Computer Science and Engineering (2021-2025) at Akshaya College of Engineering and Technology with CGPA 8.24."
    });
  }

  // Certifications
  if (msg.includes("certificate") || msg.includes("achievement")) {
    return res.json({
      reply:
        "I have earned certifications including Dr. Kalam Young Achiever Award, JPMorgan Chase Job Simulation, Cisco Network Essentials, MongoDB Atlas, ServiceNow Administrator, UiPath Automation, and AI Tools & ChatGPT Workshop."
    });
  }

  // Internship
  if (msg.includes("internship") || msg.includes("experience")) {
    return res.json({
      reply:
        "I completed a Java Internship at Compad Systems, Hyderabad, where I gained hands-on experience in backend development and real-world software concepts."
    });
  }

  // Location
  if (msg.includes("location") || msg.includes("address") || msg.includes("where")) {
    return res.json({
      reply:
        "I am from Tirupati, Andhra Pradesh, India."
    });
  }

  // Contact
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
    return res.json({
      reply:
        "You can contact me at 📧 peetlamahesh81@gmail.com or 📱 +91 9182353829."
    });
  }

  // Availability
  if (msg.includes("status") || msg.includes("available") || msg.includes("job") || msg.includes("opportunity")) {
    return res.json({
      reply:
        "I am currently available for Software Development and Full Stack Development opportunities. Preferred locations: Bangalore, Hyderabad, Chennai. Available immediately."
    });
  }

  // Default response
  return res.json({
    reply:
      "Please ask about my skills, projects, education, certifications, internship, availability, or contact details."
  });
});

/* ===============================
   🚀 PORT CONFIGURATION
================================ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
