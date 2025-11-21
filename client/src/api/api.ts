import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Add token to all requests if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUserAPI = async (userData: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  const res = await API.post("/auth/register", userData);
  return res.data;
};

export const loginUserAPI = async (credentials: {
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/login", credentials);
  return res.data;
};

// Verify token validity
export const verifyTokenAPI = async () => {
  const res = await API.get("/auth/verify");
  return res.data;
};

// Submit internship application
export const submitApplicationAPI = async (applicationData: {
  internshipId: string;
  fullName: string;
  email: string;
  resume?: File;
  portfolioUrl?: string;
  coverLetter?: string;
  expectedStipend?: string;
  availableFrom: string;
}) => {
  const formData = new FormData();
  Object.entries(applicationData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const res = await API.post("/applications/submit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
