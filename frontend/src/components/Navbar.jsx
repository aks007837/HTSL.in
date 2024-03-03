import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import "./css/nav.css";
import { useAuth } from "../context/auth";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    toast.success("Logged Out!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <nav className="nav">
        <div className="logos left">
          <Link to="/">
            <img id="mainlogo" src={logo} alt="HTSL" />
          </Link>
        </div>
        <ToastContainer />
        <div className="right">
          <Link to="/">
            <button id="btn">Home</button>
          </Link>
          <Link to="/testimonials">
            <button id="btn">Testimonials</button>
          </Link>
          <Link to="/aboutus">
            <button id="btn">About Us </button>
          </Link>
          <Link to="/contactus">
            <button id="btn">Contact Us </button>
          </Link>
          {!auth.user ? (
            <></>
          ) : (
            <>
              <Link to="/loggedin-admin/admin-panel">
                <button id="btn">Admin Panel </button>
              </Link>
              <Link to="/">
                <button onClick={handleLogout} id="btn">
                  Logout{" "}
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
