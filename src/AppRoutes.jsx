import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar for navigation
import StreamList from "./pages/StreamList"; // The StreamList page
import Movies from "./pages/Movies"; // The Movies page
import Cart from "./pages/Cart"; // The Cart page
import About from "./pages/About"; // The About page

function AppRoutes() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        <Route path="/" element={<StreamList />} /> {/* Default route */}
        <Route path="/movies" element={<Movies />} /> {/* Movies page */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
