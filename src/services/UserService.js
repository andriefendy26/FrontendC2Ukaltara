import axios from "axios";
import API_URL from "./Api";

export const getAlltUser = async (keyword, page, limit, kelurahan) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?search_query=${keyword}&page=${page}&limit=${limit}&kelurahan=${kelurahan}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTotalUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/total`);
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
export const updateUserProfile = async (id, form) => {
  try {
    const responseApi = await axios.patch(
      `${API_URL}/users/profile/${id}`,
      form
    );
    return responseApi;
  } catch (error) {
    return error;
  }
};

export const deleteUserProfile = async (params) => {
  try {
    const response = await axios.delete(`${API_URL}/users/profile/${params}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const Accessible = async (id, request) => {
  try {
    const responseApi = await axios.patch(`${API_URL}/users/acc/${id}`, {
      request,
    });
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

