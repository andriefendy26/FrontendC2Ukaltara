import axios from "axios";

export const getAllKelurahan = async () => {
  try {
    const response = await axios.get("http://localhost:3000/kelurahan");
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const createKelurahan = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/kelurahan", data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
