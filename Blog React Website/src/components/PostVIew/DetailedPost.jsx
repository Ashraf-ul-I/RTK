import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { updateDataThunk } from '../../feature/DetailedPost/detailedPostSlice';
import { useDispatch } from 'react-redux';
const DetailedPost = ({ post }) => {
  const [save,setSave]=useState(post.isSaved);
  const dispatch=useDispatch();
  const [likes, setLikes] = useState(post.likes);
  const [shouldScroll, setShouldScroll] = useState(false);

  const handleFiltering = (e) => {
    e.preventDefault();
    const updateSave = !save;
    const updatedLikes = likes + 1; // Increment likes on click
    setLikes(updatedLikes);
    setSave(updateSave);
    setShouldScroll(true); // Trigger scroll after update
    
    dispatch(
      updateDataThunk({
        id: post.id,
        data: {
          ...post,
          isSaved: updateSave,
          likes: updatedLikes,
        },
      })
    );
  };
  
  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo(0, document.body.scrollHeight);
      setShouldScroll(false); // Reset scroll trigger
    }
  }, [shouldScroll]);
  
  
  return (
    <main className="post bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt="post visual"
          className="w-full h-120 object-cover"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-6 space-x-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 py-1 px-2 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mb-6">
          <button
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
            onClick={handleFiltering}
          >
            <i className="fa-regular fa-thumbs-up"></i>
            <span>{post.likes}</span>
          </button>
          <button
            onClick={handleFiltering}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg transition ${
               post.isSaved 
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <i className="fa-regular fa-bookmark"></i>
            <span> {post.isSaved ? 'Unsave' : 'Save'}</span>
          </button>
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p>{post.description}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPost;
