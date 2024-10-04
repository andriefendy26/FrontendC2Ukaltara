import axios from "axios";
import API_URL from "./Api";

let token =
  "EAAH3uufuMrwBO6NVZBuu5GWio1sScqn08ZBx7UakuiA3C5alSXo3yqokO5s1AZBZCfZAV2BzoQvj5qtqBvYhgQOGE6rQ7eLgCzwSkIvonKzExUSOLdQWQwBb8CxZCcopDGhbAltQrLZBWWggJ1Ysdc4Xgac0PtKZBP6aYuXeZB6QeHJZB6Nt7KfZCcrihsw";

export const getFeed = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/media`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/profile`);
    return response.data;
  } catch (error) {
    return error;
  }
};
