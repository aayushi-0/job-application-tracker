# 💼 JobTrack

### A full-stack job application tracker with a clean dashboard and application analytics.

JobTrack is a MERN-stack web application I built to make job searching more organized and easier to track.

Instead of keeping applications across spreadsheets, notes, and different websites, JobTrack provides one place to manage applications, update their status, and understand the overall application pipeline.

---

## ✨ What I Built

JobTrack currently supports:

- 📝 Create new job applications
- ✏️ Edit existing applications
- 🗑️ Delete applications
- 🔎 Search applications by company or role
- 🎯 Filter applications by status
- 📊 View application statistics on the dashboard
- 🔄 Track applications through different stages
- 📈 View application status distribution
- 📅 View monthly application trends
- 💾 Store application data in MongoDB
- 🔌 Connect the React frontend with a REST API
- 📮 Test and work with APIs using Postman

---

## 📊 Dashboard

The dashboard gives a quick overview of the job search process.

It currently shows:

| Metric | Purpose |
|---|---|
| Applications | Total number of applications |
| Interviews | Applications that reached the interview stage |
| Offers | Applications that resulted in an offer |
| Response Rate | Percentage of applications that moved beyond the applied stage |

The dashboard also includes:

- Application Pipeline
- Status Distribution
- Monthly Application Trends
- Recent Applications

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- Postman
- Cursor

---

## 🏗️ How It Works

```text
React Frontend
      │
      │ HTTP / REST API
      ▼
Node.js + Express.js
      │
      │ Mongoose
      ▼
MongoDB
```

The frontend handles the user interface and application management.

The Express backend provides REST API endpoints for creating, reading, updating, and deleting applications, along with endpoints for dashboard statistics and application trends.

MongoDB stores the application data so that it remains available between sessions.

---

## 📁 Project Structure

```text
job-application-tracker/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── postman/
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/applications` | Get all applications |
| POST | `/api/applications` | Create an application |
| PUT | `/api/applications/:id` | Update an application |
| DELETE | `/api/applications/:id` | Delete an application |
| GET | `/api/applications/stats` | Get application statistics |
| GET | `/api/applications/trends` | Get monthly application trends |

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/aayushi-0/job-application-tracker.git
cd job-application-tracker
```

### 2. Start the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/jobtrack
PORT=5000
```

Start the server:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🔮 Future Improvements

JobTrack is currently the first version of the project. I plan to expand it beyond simple application tracking and turn it into a more intelligent job-search assistant.

### 📄 Resume & Job Description Matching

Compare a resume with a job description and provide a match score based on relevant skills and keywords.

### 🧩 Skill Gap Analysis

Identify skills mentioned in a job description that are missing or underrepresented in the user's profile.

### 🤖 AI-Powered Interview Preparation

Generate interview questions based on the role and help users prepare for upcoming interviews.

### 📌 Application Intelligence

Analyze application history to identify patterns such as:

- Which types of roles receive more responses
- Which stages have the highest drop-off
- Which skills appear most frequently in successful applications

### 📈 Application Outcome Analysis

Use historical application data to provide insights into what may improve future applications.

---

## 🎯 Project Goal

The long-term goal of JobTrack is to move from being just a **job application tracker** to a **personal job-search intelligence tool**.

The current version focuses on building a reliable full-stack foundation with:

- CRUD operations
- REST APIs
- MongoDB integration
- Dashboard analytics
- Search and filtering
- Application status tracking

Future versions will build intelligent features on top of this foundation, including resume matching, skill-gap analysis, interview preparation, and application outcome insights.

---

## 👩‍💻 Author

**Aayushi**

B.Tech Computer Science & Engineering

KIIT

---

⭐ If you find this project interesting, feel free to explore the repository.
