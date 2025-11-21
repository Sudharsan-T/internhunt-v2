import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Internships } from './pages/Internships';
import { InternshipDetails } from './pages/InternshipDetails';
import { ApplyInternshipForm } from './pages/ApplyInternshipForm';
import { ApplicationSuccess } from './pages/ApplicationSuccess';
import { StudentDashboard } from './pages/StudentDashboard';
import { PostInternship } from './pages/PostInternship';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AuthLayout } from './layouts/AuthLayout';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './utils/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />

        {/* Student Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/internships/:id/apply" element={<ApplyInternshipForm />} />
          <Route path="/application-success" element={<ApplicationSuccess />} />
          <Route path="/dashboard/applications" element={<StudentDashboard />} />
        </Route>

        {/* Startup Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={['startup']} />}>
          <Route path="/startup/post" element={<PostInternship />} />
        </Route>

        {/* Auth Routes wrapped in Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;