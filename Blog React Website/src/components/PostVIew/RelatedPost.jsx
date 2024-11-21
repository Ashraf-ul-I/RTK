import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPost = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        <div className="card bg-white rounded-lg shadow-lg p-4 transition hover:shadow-xl">
          <Link to={'/detailedPost'}>
            <img
              src="./images/git.webp"
              className="card-image rounded-md object-cover w-full h-32"
              alt=""
            />
          </Link>
          <div className="p-4">
            <Link
             to='/detailedPost'
              className="text-lg font-bold lws-RelatedPostTitle text-gray-800 hover:text-blue-600"
            >
              Top Github Alternatives
            </Link>
            <div className="mb-0 tags text-sm text-gray-500 mt-2">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p className="text-gray-500 mt-2">2010-03-27</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RelatedPost;
