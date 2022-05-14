import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    delay: 300,
    duration: 300,
    easing: "ease-in-out",
  });
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
