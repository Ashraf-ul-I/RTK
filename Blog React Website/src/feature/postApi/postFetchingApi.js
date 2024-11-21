import axios from "../../utils/axios"
export const postFetchingApi = async () => {
    try {
      const response = await axios.get(`/blogs`);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };
  