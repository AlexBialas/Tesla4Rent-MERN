# 🚗 Tesla4Rent – Fullstack MERN Car Rental App

Tesla4Rent is a modern web application that allows users to book Tesla vehicles with a clean and responsive interface. It includes authentication, dashboards, and admin control – built with the MERN stack.

---

## ✨ Features

### 👥 Authentication

- Register & Login (JWT)
- Persistent login via localStorage
- Role-based access (User / Admin)

### 🚘 Car Booking

- Browse Tesla fleet (Model S, 3, X, Y)
- Book cars by date range
- Cancel booking (up to 24h before)

### 📊 Dashboards

- **User Dashboard** – see & manage your bookings
- **Admin Dashboard** – manage users, bookings, cars

### 📬 Contact Form

- Responsive form (Email sending – WIP)

---

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, Bcrypt
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (frontend) + Render (backend)

---

## 🧑‍💻 Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/alex.biala/tesla4rent-mern.git
cd tesla4rent-mern
```

### 2. Setup Backend

```bash
cd backend
npm install
```

#### Create `.env` in /backend:

```
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

#### Create `.env` in /frontend:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

```bash
npm run dev
```

---

## 🌍 Live Demo

Frontend: https://tesla4rent.vercel.app  
Backend: https://tesla4rent-api.onrender.com/api

---

## 👩‍💻 Author

**Aleksandra Bialas**  
Web Developer
**Christoph Klemtz**
Web Developer

---

## 📄 License

This project is licensed under the MIT License.
