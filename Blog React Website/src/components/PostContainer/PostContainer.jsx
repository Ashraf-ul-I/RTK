import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../feature/postApi/postSlice.js";
import { useParams } from "react-router-dom";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postSlice);
  const { postId } = useParams();
  
  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]); // Include postId to update when it changes

  return (
    <main >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.map((item) => (
          <SinglePost key={item.id} post={item} />
        ))}
      </div>
    </main>
  );
};

export default PostContainer;
