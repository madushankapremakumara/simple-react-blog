import { useState, useEffect } from "react";
import { PostContext } from "./PostContext";
import dummyData from "../data/dummy";

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function updatePost(id, updatedPost) {
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  }

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
}
