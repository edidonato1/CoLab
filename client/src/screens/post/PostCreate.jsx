import { useState } from 'react';

export default function PostCreate(props) {

  const { mediumId, createPost, setCreatePost } = props

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreatePost(!createPost);
  }
    
  return (
    
    <form>
      <h1>Create Post</h1>
      <button onSubmit={handleSubmit}>post</button>
  </form>
    )
}