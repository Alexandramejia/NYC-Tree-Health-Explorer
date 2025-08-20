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
        <div>
          <Link to="/"> Home </Link>
          <Link to="/analysis"> Analysis </Link>
          <Link to="/map"> Map </Link>
          <Link to="/about"> About </Link>
        </div>
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
