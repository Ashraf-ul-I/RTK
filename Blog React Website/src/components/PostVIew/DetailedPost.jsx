import React, { useState } from 'react';

const DetailedPost = () => {
  const [saved, setSaved] = useState(false);

  const toggleSave = () => setSaved(!saved);

  return (
    <main className="post bg-white p-6 rounded-lg shadow-md">
      <img
        src="./images/mern.webp"
        alt="githum"
        className="w-full rounded-md object-cover"
        id="lws-megaThumb"
      />
      <div>
        <h1
          className="mt-6 text-2xl font-bold post-title text-gray-800"
          id="lws-singleTitle"
        >
          MERN stack for Web Development
        </h1>
        <div className="tags text-sm text-gray-600 mt-2" id="lws-singleTags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <div className="btn-group flex gap-4 mt-4">
          <button
            className="like-btn bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> 100
          </button>
          <button
            onClick={toggleSave}
            className={`save-btn ${
              saved ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } hover:bg-blue-600 py-2 px-4 rounded-lg transition`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i> {saved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>
            A MERN stack comprises a collection of four frameworks (MongoDB,
            ExpressJs, ReactJs and NodeJs) used to develop full-stack
            javascript solutions for rapid, scalable, and secure applications.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPost;
