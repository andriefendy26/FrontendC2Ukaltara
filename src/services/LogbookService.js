import axios from "axios";

export const getAllLogbook = async () => {
  try {
    const response = await axios.get("http://localhost:3000/logbook");
    return response.data.data;
  } catch (error) {
    return error;
  }
};

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
      `http://localhost:3000/logbook/kelurahan/${id}?page=${page}&limit=${limit}&tanggal_start=${tanggal_start}&tanggal_end=${tanggal_end}&search_query=${search_query}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createLogbook = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/logbook", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
