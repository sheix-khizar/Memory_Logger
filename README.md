
# 🧠 Personal Memory Logger (MERN Stack)

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that lets users log personal memories, search them later, and view each memory on a separate detail page.

---

## ✨ Features

- ✅ Add a memory (e.g., “Remember I met Ali on 5th July.”)
- ✅ View all memories (sorted by latest)
- ✅ Search memory by keyword
- ✅ View individual memory on a detail page (`/memory/:id`)
- ✅ Delete memory
- ✅ Environment-based API config using `.env`
- ✅ Modern React UI with Tailwind CSS (Vite setup)
- ✅ Production-ready CORS and security configuration

---

## 🛠 Tech Stack

**Frontend** (Vite + React + Tailwind CSS)
- React Router
- Axios for API calls
- Vite for fast dev and build

**Backend** (Node.js + Express.js + MongoDB)
- Express.js REST API
- Mongoose ODM
- CORS secured via `.env`
- Environment variables for config

---

## 📂 Folder Structure

```
personal-memory-logger/
├── backend/         # Express.js backend
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/        # Vite + React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── index.html
└── README.md
```

---

## ⚙️ Setup Instructions

### ✅ Backend Setup

1. Go to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   MONGO_URI=your_mongodb_atlas_url
   CLIENT_URL=http://localhost:5173
   ```

4. Start the server:
   ```bash
   node server.js
   ```

---

### ✅ Frontend Setup

1. Go to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

---

## 🔐 Environment Variables

| Name               | Location   | Description                     |
|--------------------|------------|---------------------------------|
| `MONGO_URI`        | backend    | MongoDB connection string       |
| `CLIENT_URL`       | backend    | Allowed frontend origin for CORS |
| `VITE_API_BASE_URL`| frontend   | Base API URL for axios calls    |

---

## 🚀 Future Improvements

- 🔒 JWT-based authentication
- 📱 Mobile-friendly responsive design
- 🎙️ Voice input using Speech-to-Text
- 🧠 NLP-based smart memory parser

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sheix Muhammad Khizar**  
BS Software Engineering'26  
_Freelance MERN Developer & WordPress Specialist_  
LinkedIn: [@SheixKhizar](https://www.linkedin.com/in/your-profile)
