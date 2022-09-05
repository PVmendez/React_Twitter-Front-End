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

export const patchApi = async (endpoint) => {
  const response = await axios.patch(url + endpoint);
  return response.data;
};

export const CallBackEnd = async (endpoint, token) => {
  const response = await axios({
    method: "GET",
    url: url + endpoint,
    headers: {
      'Authorization': `Bearer ${token}`,
    } 
  },);
  return response.data;
};