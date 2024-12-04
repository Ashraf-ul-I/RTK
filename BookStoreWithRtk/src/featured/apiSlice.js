import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),

    tagTypes:['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            keepUnusedDataFor:500,
            providesTags:['Books']
        }),
        getBookById:builder.query({
            query: (id) => `/books/${id}`,
            
        }),
        addBooks:builder.mutation({
            query:(data)=>({
                url:'/books',
                method:'POST',
                body:data
            }),
            invalidatesTags:['Books']
        }),
        deleteBooks:builder.mutation({
            query:(id)=>({
                url:`/books/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['Books']
        }),
        editBooks:builder.mutation({
            query:({id,data})=>({
                url:`/books/${id}`,
                method:'PATCH',
                body:data
            }),
            invalidatesTags:['Books']
        })
    }),
});

export const{useGetBooksQuery,useGetBookByIdQuery,useAddBooksMutation,useDeleteBooksMutation,useEditBooksMutation}= apiSlice;
