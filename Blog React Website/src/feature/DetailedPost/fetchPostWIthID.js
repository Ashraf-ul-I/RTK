import axios from "../../utils/axios";

export const fetchDataForDetailedPost= async (id)=>{
    const response=await axios.get(`/blogs/${id}`);
    return response.data;
}