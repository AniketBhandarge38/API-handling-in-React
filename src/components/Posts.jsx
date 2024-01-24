import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div style={{ margin: "1rem" }}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
