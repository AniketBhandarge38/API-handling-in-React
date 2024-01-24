import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo" onClick={() => navigate("/")}>
          <h2>My Blogs</h2>
        </div>
        <div className="links">
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
