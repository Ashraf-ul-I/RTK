import React, { useEffect } from 'react';
import RelatedPost from './RelatedPost';
import DetailedPost from './DetailedPost';
const FullPostView = ({post}) => {
  
  return (
    <section className="post-page-container flex gap-8 p-6">
      {/* Detailed Post on the left */}
      <div className="flex-1">
        <DetailedPost key={post.id} post={post}/>
      </div>

      {/* Related Posts on the right (smaller width) */}
      <aside className="w-1/4">
        <RelatedPost key={post.id} post={post} />
      </aside>
    </section>
  );
};

export default FullPostView;
