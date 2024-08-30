import axios from "axios";
import API_URL from "./Api";

export const getAllKelurahan = async () => {
  try {
    const response = await axios.get(`${API_URL}/kelurahan`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const createKelurahan = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/kelurahan`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
