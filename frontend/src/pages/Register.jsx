import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import "./css/login.css";
import { login } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted: ");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register-admin",
        { fname, lname, username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      setFname("");
      setLname("");
      setUsername("");
      setPassword("");
      console.log(res);
      localStorage.setItem("auth", JSON.stringify(res.data));

      // Check if login was successful before navigating
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const timeoutId = setTimeout(() => {
          navigate("/login-admin");
        }, 2000);
      } else {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(`Error in passing value`, error);
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Layout>
      <div className="containersLog">
        <ToastContainer />
        <div className="outer">
          <div className="forms">
            <h1 className="font-bold text-blue-900">Register Here</h1>
            <form onSubmit={handleSubmit}>
              <label className="text-white font-bold">
                First Name:{" "}
                <input
                  type="text"
                  className="text-black mt-2 border-2 border-black"
                  value={fname}
                  placeholder="Enter First Name"
                  onChange={(e) => setFname(e.target.value)}
                  name="fname"
                />
              </label>
              <label className="text-white font-bold">
                Last Name:{" "}
                <input
                  type="text"
                  className="text-black mt-2 border-2 border-black"
                  value={lname}
                  placeholder="Enter Last Name"
                  onChange={(e) => setLname(e.target.value)}
                  name="lname"
                />
              </label>
              <label className="text-white font-bold">
                Username:{" "}
                <input
                  type="text"
                  className="text-black mt-2 border-2 border-black"
                  value={username}
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                />
              </label>
              <label className="text-white font-bold">
                Password:{" "}
                <input
                  type="password"
                  className="text-black mt-2 border-2 border-black"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
              </label>
              <label>
                Already have an Account
                <Link to="/login-admin">
                  <span className="text-blue-700 font-semibold hover:underline">
                    Login Here
                  </span>
                </Link>
              </label>
              <label>
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  type="submit"
                >
                  Submit
                </button>
              </label>
            </form>
          </div>
        </div>
        <div className="images">
          <img src={login} alt="Login Here" />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
