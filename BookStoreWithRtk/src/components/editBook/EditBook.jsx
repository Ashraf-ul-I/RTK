import React, { useState } from 'react'
import { useEditBooksMutation, useGetBookByIdQuery } from '../../featured/apiSlice'
import { useNavigate, useParams } from 'react-router-dom';
import Sucess from '../../ui/Sucess';

const EditBook = () => {
    const [editBook,{isLoading,isError,isSuccess}]=useEditBooksMutation();
    const {bookId}=useParams()
   const {data:book}=useGetBookByIdQuery(bookId)
    const navigate=useNavigate();
    
    const { id, name = '', author = '', thumbnail: thumbnailD = '', price: initialPrice = '', rating: initialRating = '', featured: initialFeatured = false } = book || {};


    const [bookName,setBookName]=useState(name);
    const [authorName,setAuthorName]=useState(author);
    const [thumbnail,setThumbnail]=useState(thumbnailD);
    const [price,setPrice]=useState(initialPrice);
    const [rating,setRating]=useState(initialRating);
    const [featured,setFeatured]=useState(initialFeatured);
    
    const resetForm=()=>{
        setBookName('');
        setAuthorName('');
        setFeatured(false);
        setPrice('');
        setRating('');
        setThumbnail('')
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       editBook(
        {id,
        book:{
        name:bookName,
        author:authorName,
        thumbnail,
        price,
        rating,
        featured,
       }}),
       resetForm();
       navigate('/')
    }

  return (
    <main className="py-6 2xl:px-6">
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                <form className="book-form" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="lws-bookName">Book Name</label>
                        <input required className="text-input" type="text" id="lws-bookName" name="name" value={bookName}
                        onChange={(e)=>setBookName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-author">Author</label>
                        <input required className="text-input" type="text" id="lws-author" name="author" value={authorName}
                        onChange={(e)=>setAuthorName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-thumbnail">Image Url</label>
                        <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={thumbnail}
                        onChange={(e)=>setThumbnail(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="lws-price">Price</label>
                            <input required className="text-input" type="number" id="lws-price" name="price" value={price} 
                            onChange={(e)=>setPrice(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-rating">Rating</label>
                            <input required className="text-input" type="number" id="lws-rating" name="rating" value={rating} 
                            onChange={(e)=>setRating(e.target.value)} min="1"
                                max="5" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="lws-featured" type="checkbox" name="featured" checked={featured}
                         onChange={(e)=>setFeatured(e.target.checked)} className="w-4 h-4" />
                        <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="lws-submit">Update Book</button>
                </form>
                {isSuccess && <Sucess message={"Books Added Succesfully"}/>}
            </div>
        </div>
    </main>
  )
}

export default EditBook