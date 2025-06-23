# 📱 Social Media App

This is a basic social media app I made using React and Firebase as part of an SDE assignment.

The main idea was to allow users to sign up, create a simple profile, make text-based posts, and like other posts in a global feed. It’s a simple frontend + Firebase project built in a short time but helped me understand user auth, route protection, and working with Firestore.

---

## 🔗 Live Link

👉 [https://social-media-app-jade-chi.vercel.app](https://social-media-app-jade-chi.vercel.app)

---

## 🔧 Features

- User signup and login using Firebase Auth
- Profile setup after signup (name and bio)
- Create text-only posts
- Global feed shows all posts (latest on top)
- Like button (no limit)
- Logout and protected routes

---

## 🛠 Stack Used

- React (with Vite)
- Firebase Authentication
- Firestore (for users and posts)
- React Router DOM

---

## 💻 How to Run

```bash
git clone https://github.com/jugal-95/social-media-app.git
cd social-media-app
npm install
npm run dev

To make it work, you’ll need your own Firebase config inside src/firebase/config.js.

📂 Folder Structure
src/
├── pages/
├── context/
├── firebase/
├── App.jsx
└── main.jsx

👨‍💻 About
My name is Jugraj Singh, currently a student at Thapar. This was a hands-on project to improve my frontend + Firebase skills.
It’s basic but covers user auth, Firestore usage, and deployment.







