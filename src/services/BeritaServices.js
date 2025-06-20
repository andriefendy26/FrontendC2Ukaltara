import axios from "axios";
import API_URL from "./Api";

export const getDataByid = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/berita/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDataUpdate = async () => {
  try {
    const response = await axios.get(`${API_URL}/berita/update`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllData = async (page, limit, kelurahan_id) => {
  try {
    const response = await axios.get(
      `${API_URL}/berita?page=${page}&limit=${limit}&kelurahan_id=${kelurahan_id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTotalBerita = async () => {
  try {
    const response = await axios.get(`${API_URL}/berita/total`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getJenisBerita = async (jenis) => {
  try {
    const response = await axios.get(`${API_URL}/berita/jenis?jenis=${jenis}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBerita = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/berita`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateBerita = async (id, data) => {
  try {
    const response = await axios.patch(`${API_URL}/berita/${id}`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteBerita = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/berita/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
