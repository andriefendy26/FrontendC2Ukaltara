import axios from "axios";
import API_URL from "./Api";

export const getAllData = async (
  tanggal_start,
  tanggal_end,
  kelurahan_id,
  page,
  limit
) => {
  try {
    const response = await axios.get(
      `${API_URL}/data?tanggal_start=${tanggal_start}&tanggal_end=${tanggal_end}&kelurahan_id=${kelurahan_id}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDataLw = async () => {
  try {
    const response = await axios.get(`${API_URL}/datalw`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getTotalDataSampah = async () => {
  try {
    const response = await axios.get(`${API_URL}/datatotal`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getDataTotalByKel = async () => {
  try {
    const response = await axios.get(`${API_URL}/datakel`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/data`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateData = async (data) => {
  try {
    const response = await axios.patch(`${API_URL}/data/${data.id}`, data);
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/data/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
