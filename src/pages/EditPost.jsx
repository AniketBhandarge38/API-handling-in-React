import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setLoading(false);
      setTitle(res.data.title);
      setContent(res.data.body);
      setUserId(res.data.userId);
    } catch (err) {
      console.log("Cannot fetch the post wih Id", id);
    }
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleContentChange = (event) => {
    const content = event.target.value;
    setContent(content);
  };

  const handleUserIdChange = (event) => {
    const id = event.target.value;
    setUserId(id);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const isValid = title.trim() && content.trim() && userId;

    if (!isValid) return;

    const data = {
      id: id,
      title: title,
      body: content,
      userId: userId,
    };
    setLoading(true);
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      data
    );
    setLoading(false);
    console.log(res);
  };
  return (
    <div className="create-post">
      <h2>Edit Post</h2>
      {!loading && (
        <form className="posts-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleTitleChange}
            value={title}
          />
          <label htmlFor="body">Content</label>
          <textarea
            type="text"
            placeholder="Content"
            name="body"
            onChange={handleContentChange}
            value={content}
            cols="40"
            rows="5"
          />
          <label htmlFor="userId">User Id</label>
          <input
            type="number"
            placeholder="userId"
            min={1}
            value={userId}
            onChange={handleUserIdChange}
          />

          <button onClick={(event) => handleClick(event)}>Edit Post</button>
        </form>
      )}

      {loading && <div class="loader"></div>}
    </div>
  );
};

export default EditPost;
