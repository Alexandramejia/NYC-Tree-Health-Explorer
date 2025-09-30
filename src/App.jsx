import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Analysis from "./components/Analysis";
import Map from "./components/Map";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="fixed top-0 left-0 w-full bg-[#4b9451] text-gray-200 shadow-md z-50">
          <div className="max-w-7xl mx-auto px-4 py-5 flex items-center space-x-8">
            <Link to="/" className="hover:text-white font-semibold text-lg"> Home </Link>
            <Link to="/analysis" className="hover:text-white font-semibold text-lg"> Analysis </Link>
            <Link to="/map" className="hover:text-white font-semibold text-lg"> Map </Link>
            <Link to="/about" className="hover:text-white font-semibold text-lg"> About </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/analysis" element={<Analysis />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
