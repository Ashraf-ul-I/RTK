import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:9000',

    }),
    //post,patch,delete is called mutation in rtk query server e data poriborton kore dete 
    //jeta server theke shudhu data anbe etake bole query
    tagTypes:["Videos","Video","RelatedVideo"],
    endpoints: (builder)=>({
        getVideos: builder.query({
            query:()=>'/videos',
            keepUnusedDataFor:600, //if we didnot comeback to homepage wihtin 60 sec then homepage will refetch again .
            providesTags:(result,error,arg)=>[
                "Videos",
                {type:"Video",id:arg},//for single video different different tag are made3
                {type:"RelatedVideo",id:arg} 
            ]
        }),
        getVideo:builder.query({
            query:(videoId)=>`/videos/${videoId}`,
            providesTags:(result,error,arg)=>[
                {type:"Video",id:arg.id},//for single video different different tag are madee
            ]
        }),
        getRelatedVideos: builder.query({
            query: ({ title, id }) => {
                const tags = title.split(" "); // Handle undefined title
                const likes = tags.map((item) => `title_like=${item}`);
                const queryString = `/videos?${likes.join("&")}&_limit=4`;
                return queryString;
            },
            providesTags:(result,error,arg)=>[
                {type:"RelatedVideo",id:arg} 
            ]
            
        }),
        
        addVideo:builder.mutation({
            query:(data)=>({
                url:`/videos`,
                method:'POST',
                body:data
            }),
            invalidatesTags:["Videos"]
        }),
        editVideo:builder.mutation({
            query:({id,data})=>({
                url:`/videos/${id}`,
                method:'PATCH',
                body:data
            }),
            invalidatesTags:(result,error,arg)=>[
                "Videos",
                //for single video different different tag are made3
                console.log(result,arg.id),
                {type:"Video",id:arg.id},
                {type:"RelatedVideo",id:arg.id} 
            ]
        }),
        deleteVideo:builder.mutation({
            query:(id)=>({
                url:`/videos/${id}`,
                method:'DELETE',
                
            }),
            invalidatesTags:[
                "Videos",
            ]
        })
    })
});

export const {useGetVideosQuery,useGetVideoQuery,useGetRelatedVideosQuery,useAddVideoMutation,useEditVideoMutation,useDeleteVideoMutation}=apiSlice