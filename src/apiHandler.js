import axios from "axios";

const url = "http://localhost:8000/";

export const getApi = async (endpoint) => {
  const response = await axios.get(url + endpoint);
  return response.data;
};

export const postApi = async (endpoint, item) => {
  const response = await axios.post(url + endpoint, item);
  return response.data;
};
