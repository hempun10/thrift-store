import axios from "axios";

export const API_URL = "https://api.thriftstorenepal.com/api/recently-added";

export const fetchProduct = async (PAGINATE_NUM) => {
  try {
    const response = await axios.get(`${API_URL}?paginate=${PAGINATE_NUM}`);
    const data = response.data;
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
