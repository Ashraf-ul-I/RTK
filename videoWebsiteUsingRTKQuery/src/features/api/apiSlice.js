import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:9000',

    }),
    //post,patch,delete is called mutation in rtk query server e data poriborton kore dete 
    //jeta server theke shudhu data anbe etake bole query
    endpoints: (builder)=>({
        getVideos: builder.query({
            query:()=>'/videos',
            keepUnusedDataFor:600 //if we didnot comeback to homepage wihtin 60 sec then homepage will refetch again .
        }),
        getVideo:builder.query({
            query:(videoId)=>`/videos/${videoId}`
        }),
        getRelatedVideos:builder.query({
            query:({title,id})=>{
                
                const tags=title.split(" ");
                const likes=tags.map(item=>`title_like=${item}`)
                const queryString=`/videos?${likes.join("&")}&_limit=4`;
                return queryString
            }
        })
    })
});

export const {useGetVideosQuery,useGetVideoQuery,useGetRelatedVideosQuery}=apiSlice