import axios from "axios";

const baseurl = "http://localhost:5000/api";
const token = localStorage.getItem("token");

const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const getAllTask = async () => {
  const response = await axios.get(`${baseurl}/tasks`, headers);

  return response.data;
};

export const postTask = async (params) => {
  const response = await axios.post(`${baseurl}/tasks`, params, headers);

  return response.data;
};

export const putTask = async (params) => {
  const response = await axios.put(
    `${baseurl}/tasks/${params.id}`,
    params,
    headers
  );

  return response.data;
};

export const deleteTask = async (params) => {
  const response = await axios.delete(`${baseurl}/tasks/${params.id}`, headers);

  return response.data;
};
