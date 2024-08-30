import axios from "axios";
import API_URL from "./Api";

export const getAllRole = async () => {
  try {
    const response = await axios.get(`${API_URL}/roles`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const createRole = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/roles`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
