import axios from "axios";
import API_URL from "./Api";

export const getAlltUser = async (keyword, page, limit) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users`, data);
    return response;
  } catch (error) {
    return error;
  }
};
export const updateUserApi = async (editForm) => {
  try {
    const responseApi = await axios.patch(
      `${API_URL}/users/${editForm.id}`,
      editForm
    );
    return responseApi;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (params) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${params}`);
    return response;
  } catch (error) {
    return error;
  }
};
