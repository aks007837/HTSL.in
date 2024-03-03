import React from "react";
import { Layout } from "../components";
import TestimonialForm from "./TestimonialForm";
import TestimonialsList from "./TestimonialsList";
import AdminPanel from "../components/AdminPanel";
import "./css/Admin.css";
import { useEffect } from "react";
import { Admin_bg } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
const Admin = () => {
  const navigate = useNavigate();
  const checkLoggedin = async (req, res) => {
    const resp = await axios.get("http://localhost:8080/api/v1/auth/test");
    if (resp.success == false) {
      const timeoutId = setTimeout(() => {
        navigate("/login-admin");
      }, 1000);
    }
  };
  useEffect(() => {
    // checkLoggedin();
    const item = document.getElementById("bgimg");
    item.style.backgroundImage = `url(${Admin_bg})`;
    item.style.backgroundSize = "cover";
  }, []);
  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right" id="bgimg"></div>
      </div>
    </Layout>
  );
};

export default Admin;
