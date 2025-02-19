import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Home from "./Pages/home";
import Favorites from "./Pages/favorites";
import Details from "./Pages/details";
function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-1g">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
