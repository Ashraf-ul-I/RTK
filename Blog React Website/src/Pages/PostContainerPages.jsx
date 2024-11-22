import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { updateDataThunk } from '../feature/DetailedPost/detailedPostSlice';
import { useDispatch, useSelector } from 'react-redux';
import GoHome from '../components/PostVIew/GoHome';
import FullPostView from '../components/PostVIew/FullPostView';
import { fetchDetailedDataThunk } from '../feature/DetailedPost/detailedPostSlice';

const PostContainerPages = () => {
  const dispatch = useDispatch();
  const { post, isLoading, isError, error } = useSelector((state) => state.detailedPostSlice);
  const { postId } = useParams();

  // State to handle content visibility after data fetch
  const [showContent, setShowContent] = useState(false);

  // Fetch post data on component mount
  useEffect(() => {
    dispatch(fetchDetailedDataThunk(postId));
    const timer = setTimeout(() => {
      setShowContent(true); // Show content after a slight delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [dispatch, postId]);

  let content = null;

  if (isLoading) {
    content = (
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-y-6 max-w-4xl w-full px-4">
        {/* Skeleton Title */}
        <div className="w-3/4 h-10 bg-gray-300 animate-pulse rounded-md mx-auto"></div>
    
        {/* Skeleton Image */}
        <div className="w-full h-96 bg-gray-300 animate-pulse rounded-lg mx-auto"></div>
    
        {/* Skeleton Description */}
        <div className="w-5/6 h-6 bg-gray-300 animate-pulse rounded-md mx-auto"></div>
        <div className="w-4/6 h-6 bg-gray-300 animate-pulse rounded-md mx-auto"></div>
    
        {/* Skeleton Buttons */}
        <div className="flex justify-center space-x-4">
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
    
    );
  }

  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && !post?.id) content = <div className="col-span-12">No post found</div>;

  if (!isError && !isLoading && post?.id && showContent) {
    content = (
      <>
        <GoHome key={post.id} post={post} />
        <FullPostView key={post.id} post={post} />
      </>
    );
  }

  return <>{content}</>;
};

export default PostContainerPages;
