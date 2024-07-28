/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(null);

    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setToken(null);
    navigate("/");
  };

  const value = {
    token,
    isAuthenticated,
    loginAuth: handleLogin,
    logoutAuth: handleLogout,
    email: localStorage.getItem("email"),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
