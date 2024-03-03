import React, { useState } from "react";
import axios from "axios";
import "./css/Testimonial.css";
import AdminPanel from "../components/AdminPanel";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom";

const DelTestimonial = () => {
  const navigate = useNavigate();
  const [custid, setCustid] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/del-testimonials",
        { custid },
        { headers: { "Content-Type": "application/json" } }
      );
      alert(`${res.data.message}`);
      setCustid("");
      const timeoutId = setTimeout(() => {
        navigate("/loggedin-admin/admin-panel/get-testimonials");
      }, 1000);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right-panel" id="bgimg">
          <div className="testimonial-form-container">
            <h2>Delete Testimonial</h2>
            <form className="add-testimonials" onSubmit={handleSubmit}>
              <label>
                Customer ID:
                <input
                  type="number"
                  name="custid"
                  value={custid}
                  onChange={(e) => setCustid(e.target.value)}
                />
              </label>
              <button className="rate" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DelTestimonial;
