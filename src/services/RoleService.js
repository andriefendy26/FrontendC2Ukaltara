import axios from "axios";

export const getAllRole = async () => {
  try {
    const response = await axios.get("http://localhost:3000/roles");
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const createRole = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/roles", data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
