import axios from "axios";

const url = "http://localhost:8000/";

export const callBackEnd = async (endpoint) => {
  const response = await axios.get(url + endpoint);
  return response.data;
};
