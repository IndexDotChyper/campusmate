# CampusMate

CampusMate is an AI-powered college assistant that helps students instantly get answers about **syllabus, timetables, notes, and academic queries** using preloaded PDFs and uploaded documents.

---

## Features

* **AI Chat Assistant** – Ask questions in natural language
* **PDF Upload & Parsing** – Upload notes, syllabus, timetables
* **Preloaded PDFs** – Common college documents available without upload
* **Dark Mode** – Clean UI for day & night use
* **Responsive UI** – Works on mobile and desktop
* **Secure API Keys** – Environment-variable based

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* Multer (file uploads)
* PDF-Parse (PDF text extraction)
* Groq / OpenAI compatible LLM API

### Deployment

* Frontend: **Vercel**
* Backend: **Render / Railway**

---

## Project Structure

```
campusmate/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Chat.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.css
│   └── .env
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── chat.js
│   │   │   └── upload.js
│   │   ├── services/
│   │   │   └── preloadPdfService.js
│   │   ├── index.js
│   │   └── config.js
│   ├── preloaded_pdfs/
│   └── .env
│
└── README.md
```

---

## Environment Variables

### Backend (`backend/.env`)

```
PORT=5000
GROQ_API_KEY=your_api_key_here
```

### Frontend (`frontend/.env`)

```
VITE_API_URL=https://your-backend-url
```

---

## Running Locally

### 1️ Backend

```
cd backend
npm install
npm start
```

Server runs on:

```
http://localhost:5000
```

---

### 2️ Frontend

```
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## Live Demo

* **Frontend:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
* **Backend:** [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## Use Cases

* Students checking syllabus instantly
* Quick access to class timetables
* Asking questions from uploaded notes
* College-wide AI helpdesk

---

## Team

* **Debanjan**
* **Ritik**
* **Anirban**
* **Samadrita**

---

 If you like CampusMate, give it a star on GitHub!
