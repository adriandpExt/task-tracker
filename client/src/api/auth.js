import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const login = async ({ email, password }) => {
  const response = await axios.post(`${baseURL}/login`, {
    email,
    password,
  });

  return response.data;
};

export const register = async ({ fullname, email, password }) => {
  const response = await axios.post(`${baseURL}/register`, {
    fullname,
    email,
    password,
  });

  return response.data;
};
