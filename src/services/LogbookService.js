import axios from "axios";
import API_URL from "./Api";

// export const getAllLogbook = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/logbook`);
//     return response.data.data;
//   } catch (error) {
//     return error;
//   }
// };

export const getAllLogbookByKelID = async (
  id,
  page,
  limit,
  tanggal_start,
  tanggal_end,
  search_query
) => {
  try {
    const response = await axios.get(
      `${API_URL}/logbook/kelurahan/${id}?page=${page}&limit=${limit}&tanggal_start=${tanggal_start}&tanggal_end=${tanggal_end}&search_query=${search_query}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllLogbook = async (
  id,
  page,
  limit,
  tanggal_start,
  tanggal_end,
  search_query
) => {
  try {
    const response = await axios.get(
      `${API_URL}/logbook?kelurahanID=${id}&page=${page}&limit=${limit}&tanggal_start=${tanggal_start}&tanggal_end=${tanggal_end}&search_query=${search_query}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getTotalLogbook = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/logbook/total`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createLogbook = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/logbook`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteLogbook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/logbook/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
