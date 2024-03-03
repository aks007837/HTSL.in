import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  Error404,
  Login,
  Register,
  About,
  Contact,
  TestimonialForm,
  DelTestimonial,
  UpdateTestimonial,
  TestimonialList,
  UserPanel,
  AddVideo,
  ShowVideos,
} from "./pages";
import PrivateRoute from "./components/Routes/Private.jsx";
import Admin from "./pages/Admin.jsx";
import Testimonials from "./pages/Testimonials.jsx";

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorBorder = document.querySelector("[data-cursor-border]");
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorBorder.style.left = `${posX}px`;
      cursorBorder.style.top = `${posY}px`;
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-border" data-cursor-border></div>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Admin-only */}
        <Route path="/loggedin-admin/admin-panel" element={<PrivateRoute />}>
          <Route path="" element={<Admin />} />
          <Route path="add-testimonials" element={<TestimonialForm />} />
          <Route path="del-testimonials" element={<DelTestimonial />} />
          <Route path="update-testimonials" element={<UpdateTestimonial />} />
          <Route path="get-testimonials" element={<TestimonialList />} />
          <Route path="show-users" element={<UserPanel />} />
          <Route path="add-video" element={<AddVideo />} />
          <Route path="get-video" element={<ShowVideos />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* login Page for Admin */}
        <Route path="/login-admin" element={<Login />} />
        {/* Register Page for Admin */}
        <Route path="/register-admin" element={<Register />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
