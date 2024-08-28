import axios from "axios";

export const getAlltUser = async (keyword, page, limit) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/users", data);
    return response;
  } catch (error) {
    return error;
  }
};
export const updateUserApi = async (editForm) => {
  try {
    const responseApi = await axios.patch(
      `http://localhost:3000/users/${editForm.id}`,
      editForm
    );
    return responseApi;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (params) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/users/${params}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
