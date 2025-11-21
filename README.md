# InternHunt 🚀

A modern, full-stack internship platform connecting ambitious students with world-class startups. Built with React, TypeScript, Node.js, Express, and MongoDB.

![InternHunt](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node-18+-green)
![React](https://img.shields.io/badge/React-18+-blue)

## ✨ Features

### For Students
- 🔍 Browse curated internship opportunities
- 📝 Easy application process with resume upload
- 📊 Track application status in personal dashboard
- 🎯 Role-based authentication and protected routes

### For Startups
- 📢 Post internship opportunities
- 👥 Manage applications
- 🎨 Dedicated startup dashboard

### Technical Features
- 🔐 JWT-based authentication
- 🎨 Beautiful glassmorphism UI with purple gradient theme
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🔒 Role-based access control (Student/Startup)
- 🌐 RESTful API architecture
- 💾 MongoDB database with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📦 Project Structure

```
internhunt/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── api/           # API integration
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # Layout components
│   │   ├── pages/         # Page components
│   │   ├── sections/      # Section components
│   │   └── utils/         # Utility functions & protected routes
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # Mongoose models
│   │   └── routes/        # API routes
│   ├── .env.example       # Environment variables template
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sudharsan-T/internhunt.git
   cd internhunt
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

   Create `.env` file in the `server` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_here
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

   Create `.env.local` file in the `client` folder:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the Backend** (from `server` folder)
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend** (from `client` folder)
   ```bash
   npm run dev
   ```
   Client will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Environment Variables

### Server (.env)
```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/internhunt
JWT_SECRET=your_super_secret_jwt_key
```

### Client (.env.local)
```env
VITE_API_URL=http://localhost:5000
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token (protected)

### Applications (Coming Soon)
- `POST /api/applications/submit` - Submit internship application
- `GET /api/applications` - Get user applications

## 🎨 Design System

InternHunt features a modern, minimal design with:
- **Dark theme** with dotted grid background
- **Glassmorphism** effects
- **Purple gradient** accents (#A78BFA to #7A5CFF)
- **Smooth animations** and transitions
- **Responsive** layout for all devices

## 🔐 Authentication Flow

1. User registers with role (Student/Startup)
2. Backend hashes password and generates JWT token
3. Token stored in localStorage
4. Protected routes verify token on each access
5. Role-based redirection and access control

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sudharsan T**
- GitHub: [@Sudharsan-T](https://github.com/Sudharsan-T)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Icons by [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📧 Support

For support, email your-email@example.com or open an issue on GitHub.

---

⭐ Star this repo if you find it helpful!
