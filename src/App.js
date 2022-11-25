import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";
import { Footer } from "react-day-picker";
import Services from "./pages/Home/Services";

function App() {
  return (
    <div className=" px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
