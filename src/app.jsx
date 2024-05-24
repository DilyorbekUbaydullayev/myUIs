import { Route, Routes, Router } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    
    </div>
  );
}

export default App;
