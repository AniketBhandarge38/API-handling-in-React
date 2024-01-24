import { useState } from "react";
import axios from "axios";

const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(1);

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
      title: title,
      body: content,
      userId: userId,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log(res);
  };
  return (
    <div className="create-post">
      <h2>Create Posts</h2>
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
          onChange={handleUserIdChange}
          min={1}
          value={userId}
        />

        <button onClick={(event) => handleClick(event)}>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePosts;
