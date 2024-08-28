import axios from "axios";

export const getAllData = async (
  tanggal_start,
  tanggal_end,
  kelurahan_id,
  page,
  limit
) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/data?tanggal_start=${tanggal_start}&tanggal_end=${tanggal_end}&kelurahan_id=${kelurahan_id}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/data", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateData = async (data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/data/${data.id}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/data/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
