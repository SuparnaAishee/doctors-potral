import "./App.css";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";
import { Footer } from "react-day-picker";
import Services from "./pages/Home/Services";
import Freecamping from "./pages/Freecampings/Freecamping";
import SignUp from "./pages/Login/SignUp";
import HealthDetails from "./pages/Freecampings/HealthDetails";
import Category from "./pages/Category/Category";
import Dentist from "./pages/Category/Dentist";
import EyeSpecialist from "./pages/Category/EyeSpecialist";
import Neurologist from "./pages/Category/Neurologist";
import Generalsurgeon from "./pages/Category/Generalsurgeon";
import Nephrologist from "./pages/Category/Nephrologist";
import Cardiologist from "./pages/Category/Cardiologist";
import Dermatologist from "./pages/Category/Dermatologist";
import Gynecologist from "./pages/Category/Gynecologist";
import Nutritionist from "./pages/Category/Nutritionist";
import D1details from "./pages/Category/D1details";
import RequireAuth from "./pages/Login/RequireAuth";

function App() {
  return (
    <div className=" px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
        <Route path="freecamping" element={<Freecamping />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="healthdetails" element={<HealthDetails />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }/>
        <Route path="category" element={<Category />} />
        <Route path="dentist" element={<Dentist />} />
        <Route path="eyespecialist" element={<EyeSpecialist />} />
        <Route path="neurologist" element={<Neurologist />} />
        <Route path="generalsurgeons" element={<Generalsurgeon />} />
        <Route path="nephrologist" element={<Nephrologist />} />
        <Route path="cardiologist" element={<Cardiologist />} />
        <Route path="dermatologist" element={<Dermatologist />} />
        <Route path="gynecologist" element={<Gynecologist />} />
        <Route path="nutritionist" element={<Nutritionist />} />
        <Route path="d1details" element={<D1details />} />
      </Routes>
    </div>
  );
}

export default App;
