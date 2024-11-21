import axios from "../../utils/axios"

//http://localhost:9000/video?tags_like=Javascript&tags_like=react&id_ne=2&limit=5
//means we are trying to query that tags which are similiar to javascript and react will be shown
//then we add another condition that id_ne=2 means id not equal=2 means which id we clicked it will not similiar to this
//limit=5 means we want in related videos we maximum get 5 videos only.
//this things we make in the uerystring and added with the axios backend link.

export const getRelatedVideos=async ({tags,id})=>{
    
    const limit=5;
    let queryString= tags?.length >0 ? tags.map(tag=>`tags_like=${tag}`).join('&')+`&id_ne=${id}&_limit=${limit}`:`&id_ne=${id}&_limit=${limit}`
    const response=await axios.get(`/videos?${queryString}`);
   
    return response.data;

}