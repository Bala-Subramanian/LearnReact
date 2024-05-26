import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Blog = () => {
  const { postId } = useParams();

  if (postId == 0) {
    return <div>
      Post id is invalid
      </div>;
  }

  return (
    <div>
      <h1>Blog Post ID: {postId}</h1>
      <div>This is the content for post ID: {postId}</div>
    </div>
  );
};

export default Blog;
