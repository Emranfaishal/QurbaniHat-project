# 🐄 QurbaniHat – Livestock Booking Platform

A modern livestock marketplace built for Qurbani season where users can browse animals (cow, goat, etc.), view detailed information, and book animals after authentication.

---

## 🚀 Live Demo
👉 https://your-live-site-link.vercel.app

---

## 📌 Project Purpose
This project is built as an assignment to demonstrate:
- Authentication system (Login/Register + Google login)
- CRUD-like UI experience (without DB save)
- Responsive UI design
- JSON-based animal data handling
- Booking system with form validation
- Protected routes

---

## ✨ Key Features

### 🏠 Home Page
- Hero banner section with CTA button
- Featured animals (4 items)
- Extra sections:
  - Qurbani Tips
  - Top Breeds

### 🐮 All Animals Page
- Display all animals from JSON
- Animal cards with "Details" button

### 📄 Animal Details Page (Private)
- Full animal information
- Booking form:
  - Name
  - Email
  - Phone
  - Address
- Login required to access
- Success toast message on booking
- Form resets after submission (no DB save)

### 🔐 Authentication
- Email & Password Login
- Register system:
  - Name, Email, Photo URL, Password
- Google Login (Social Auth)
- Redirect after login/register

### 👤 My Profile (Private)
- Shows user:
  - Name
  - Email
  - Photo
- Update feature:
  - Update Name & Image
  - Uses `better-auth` update user system

### ⚙️ Extra Features
- Toast notifications
- Loading spinner during data fetch
- 404 Not Found page
- Responsive design (mobile/tablet/desktop)

---

## 🧾 Animal JSON Sample

```json
[
  {
    "id": 1,
    "name": "Deshi Shahi Cow",
    "type": "Cow",
    "breed": "Local Deshi",
    "price": 120000,
    "weight": 280,
    "age": 3,
    "location": "Bogura",
    "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural food.",
    "image": "https://i.postimg.cc/example-cow1.jpg",
    "category": "Large Animal"
  }
]