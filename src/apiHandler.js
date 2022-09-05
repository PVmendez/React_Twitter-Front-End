import axios from "axios";

const url = "http://localhost:8000/";

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


