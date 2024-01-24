import axios from "axios";
import { useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit/${post.id}`);
  };
  const handleDelete = async () => {
    try {
      if (post.id) {
        const res = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`
        );
        if (res.status === 200) {
          alert("Post deleted");
        }
      }
    } catch (err) {
      console.log("Cannot delete the posts");
    }
  };
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <div className="post-btns">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
