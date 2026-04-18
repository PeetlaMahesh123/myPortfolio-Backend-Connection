
# 🚀 MyPortfolio – AI Assistant Backend 

An AI-powered backend service deployed on Railway that powers my portfolio chatbot.  
This assistant answers questions about my skills, projects, experience, and career journey in real time.


---
## Screenshots
<img width="1923" height="879" alt="Screenshot 2026-03-22 183406" src="https://github.com/user-attachments/assets/eba7e5b7-f614-4728-882a-012ea4c8e801" />

<img width="1536" height="870" alt="image" src="https://github.com/user-attachments/assets/aa62f8bf-6c89-443f-b608-0be4745b4b69" />

---

## 🧠 Project Overview



The backend is deployed using Railway and auto-deploys from GitHub.

---

## 🏗️ Project Structure

```

backend/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── node_modules/

```

---
## ⚙️ Tech Stack

- Node.js
- Express.js
- OpenAI API
- Railway
- dotenv
- CORS


---

## 🔥 Railway Deployment Configuration
### 1️⃣ Deploy from GitHub

1. Go to Railway Dashboard  
2. Click **New Project**  
3. Choose **Deploy from GitHub**  
4. Select this repository  

Railway automatically detects Node.js.


---

### 2️⃣ Environment Variables (Railway → Variables)

Add the following:

```

OPENAI_API_KEY=your_openai_api_key
PORT=5000

````

⚠️ Important:
- Do NOT upload `.env` to GitHub
- Always store secrets in Railway variables

---

## 🛠️ Important: Railway Port Configuration

Railway assigns a dynamic port automatically.

Make sure your `server.js` contains:

```javascript
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
````

This fixes the Railway port issue.

---

## 🤖 API Endpoint

### POST `/api/chat`

### Request Example

```json
{
  "message": "Tell me about Mahesh Peetla"
}
```

### Response Example

```json
{
  "reply": "Mahesh Peetla is a frontend developer..."
}
```

---

## 🌐 Frontend Integration Example

```javascript
async function sendMessage(message) {
  const response = await fetch(
    "https://your-project-name.up.railway.app/api/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    }
  );

  const data = await response.json();
  return data.reply;
}
```

---

## 🔐 Security Best Practices

* Store API keys in Railway variables
* Enable CORS only for your portfolio domain
* Add rate limiting (recommended)
* Add request validation
* Handle errors properly

---

## 🔄 Auto Deployment

Railway automatically redeploys when:

* You push updates to GitHub
* You change environment variables

---

## 🚀 Future Improvements

* Add MongoDB for conversation history
* Add memory-based assistant
* Add admin dashboard
* Add streaming responses
* Add custom domain
* Add analytics tracking

---

## 👨‍💻 Author

Mahesh Peetla
Frontend Developer | Full Stack Learner | AI Enthusiast

GitHub: [https://github.com/PeetlaMahesh123](https://github.com/PeetlaMahesh123)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!



