import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SinglePost = ({ post }) => {

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/detailedPost/${post.id}`}>
        <img
          src={post.image || "./images/default.webp"}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-500">{post.createdAt}</p>
          <p className="text-sm text-gray-500 flex items-center">
            <i className="fa-regular fa-thumbs-up mr-1"></i>
            {post.likes}
          </p>
        </div>
        <Link
          to={`/detailedPost/${post.id}`}
          className="block text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2"
        >
          {post.title}
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-600 py-1 px-2 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
        {post.isSaved && (
          <div>
            <span className="text-xs bg-green-100 text-green-600 py-1 px-2 rounded">
              Saved
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
