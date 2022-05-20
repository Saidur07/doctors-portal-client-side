import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./pages/Shared/Navbar";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { Suspense } from "react";
import Loading from "./pages/Shared/Loading";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointsments from "./pages/Dashboard/MyAppointsments";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistroy from "./pages/Dashboard/MyHistroy";
const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {
  AOS.init({
    delay: 300,
    duration: 300,
    easing: "ease-in-out",
  });
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
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
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route
                index
                element={<MyAppointsments></MyAppointsments>}
              ></Route>
              <Route path="review" element={<MyReview></MyReview>}></Route>
              <Route path="history" element={<MyHistroy></MyHistroy>}></Route>
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>

          <ToastContainer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
