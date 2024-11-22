import axios from "../../utils/axios";

export const savedDataUpdate= async (id,data)=>{
    const response=await axios.put(`/blogs/${id}`,data);
    return response.data;
}

