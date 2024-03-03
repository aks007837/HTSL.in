import React from "react";
import { Layout } from "../components";
import AdminPanel from "../components/AdminPanel";
import axios from "axios";
import "./css/Testimonial.css";
import { useState } from "react";
const AddVideo = () => {
  const [type, setType] = useState("");
  const [links, setLinks] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/add-video",
        { type, links, message }
      );

      console.log(res.data);
      alert(`${res.data.message}`);
      setType("");
      setLinks("");
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
            <h2>Add Videos</h2>
            <form className="add-testimonials" onSubmit={handleSubmit}>
              <label>
                Video Type:
                <input
                  type="text"
                  name="type"
                  list="types"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
                <datalist id="types">
                  <option value="Reels Content"></option>
                  <option value="Manhwa Videos"></option>
                  <option value="Documentary"></option>
                  <option value="Product Animation"></option>
                  <option value="Tech Videos"></option>
                  <option value="2D Animation"></option>
                </datalist>
              </label>
              <label>
                Video Link:
                <input
                  type="text"
                  name="link"
                  value={links}
                  onChange={(e) => setLinks(e.target.value)}
                />
              </label>
              <label>
                Video Message:
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button className="rate" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddVideo;
