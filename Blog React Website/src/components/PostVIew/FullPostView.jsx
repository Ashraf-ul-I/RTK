import React from 'react';
import RelatedPost from './RelatedPost';
import GoHome from './GoHome';
import DetailedPost from './DetailedPost';

const FullPostView = () => {
  return (
    <section className="post-page-container flex gap-8 p-6">
      {/* Detailed Post on the left */}
      <div className="flex-1">
        <DetailedPost />
      </div>

      {/* Related Posts on the right (smaller width) */}
      <aside className="w-1/4">
        <RelatedPost />
      </aside>
    </section>
  );
};

export default FullPostView;
