import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreatePosts from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreatePosts />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
