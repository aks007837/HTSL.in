import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Testimonial.css";
import AdminPanel from "../components/AdminPanel";
import { Layout } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateTestimonial = () => {
  const [custid, setCustid] = useState("");
  const [custname, setCustname] = useState("");
  const [smallintro, setSmallintro] = useState("");
  const [explaination, setExplaination] = useState("");
  const [rating, setRating] = useState("");
  const [homepage, setHomepage] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/find-testimonials",
        { custid },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = res.data;
      console.log(data);
      alert(`${res.data.message}`);
      if (
        res.data.message === "Testimonial not found" ||
        res.data.message === "Invalid custid provided"
      ) {
        console.log(`data not found`);
        const sid = document.getElementById("searchid");
        const uid = document.getElementById("updateid");
        sid.style.display = "block";
        uid.style.display = "none";
        setCustid("");
      } else {
        const sid = document.getElementById("searchid");
        const uid = document.getElementById("updateid");
        uid.style.display = "block";
        sid.style.display = "none";
        setCustid(data.custid);
        setCustname(data.custname);
        setSmallintro(data.smallintro);
        setExplaination(data.explaination);
        setRating(data.rating);
        setHomepage(data.homepage);
        console.log(custname);
        // If the testimonial doesn't exist, show the search form
      }
    } catch (error) {
      console.error("Error submitting:", error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/update-testimonials",
        { custid, custname, smallintro, explaination, rating, homepage },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(res.data);
      alert(`${res.data.message}`);
      setCustid("");
      setCustname("");
      setSmallintro("");
      setExplaination("");
      setRating("");
      setHomepage("");
      const timeoutId = setTimeout(() => {
        navigate("/loggedin-admin/admin-panel/get-testimonials");
      }, 500);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  useEffect(() => {
    const sid = document.getElementById("searchid");
    const uid = document.getElementById("updateid");
    sid.style.display = "block";
    uid.style.display = "none";
  }, []);

  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right-panel" id="bgimg">
          <div className="testimonial-form-container" id="searchid">
            <h2>Search Testimonial</h2>
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
          <div className="testimonial-form-container" id="updateid">
            <h2>Update Testimonial</h2>
            <form className="add-testimonials" onSubmit={handleSubmit2}>
              <label>
                Customer ID:
                <input
                  type="number"
                  name="custid"
                  value={custid}
                  onChange={(e) => setCustid(e.target.value)}
                  disabled
                />
              </label>
              <label>
                Customer Name:
                <input
                  type="text"
                  name="custname"
                  value={custname}
                  onChange={(e) => setCustname(e.target.value)}
                />
              </label>
              <label>
                Small Introduction:
                <input
                  type="text"
                  name="smallintro"
                  value={smallintro}
                  onChange={(e) => setSmallintro(e.target.value)}
                />
              </label>
              <label>
                Explanation:
                <input
                  type="text"
                  name="explaination"
                  value={explaination}
                  onChange={(e) => setExplaination(e.target.value)}
                />
              </label>
              <label>
                Rating: 1 to 5 (1:best)
                <input
                  type="number"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </label>
              <label>
                Show on Homepage (0/1)
                <input
                  type="number"
                  name="homepage"
                  value={homepage}
                  onChange={(e) => setHomepage(e.target.value)}
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

export default UpdateTestimonial;
