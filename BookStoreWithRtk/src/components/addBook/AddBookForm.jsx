import React, { useState } from 'react'
import { useAddBooksMutation } from '../../featured/apiSlice'
import { useNavigate } from 'react-router-dom';
import Sucess from '../../ui/Sucess';

const AddBookForm = () => {
    const [addBook,{data:books,isLoading,isError,isSuccess}]=useAddBooksMutation();
    const navigate=useNavigate();
    const [bookName,setBookName]=useState();
    const [authorName,setAuthorName]=useState();
    const [thumbnail,setThumbnail]=useState();
    const [price,setPrice]=useState();
    const [rating,setRating]=useState();
    const [featured,setFeatured]=useState(false);
    
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
       addBook({
        name:bookName,
        author:authorName,
        thumbnail,
        price,
        rating,
        featured,
       }),
       resetForm();
       navigate('/')
    }

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
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

                    <button type="submit" className="submit" id="lws-submit">Add Book</button>
                </form>
                {isSuccess && <Sucess message={"Books Added Succesfully"}/>}
            </div>
  )
}

export default AddBookForm