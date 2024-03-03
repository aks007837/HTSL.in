import React, { useState } from "react";
import axios from "axios";
import "./css/Testimonial.css";
import AdminPanel from "../components/AdminPanel";
import { Layout } from "../components";

const TestimonialForm = () => {
  const [custid, setCustid] = useState();
  const [custname, setCustname] = useState("");
  const [smallintro, setSmallintro] = useState("");
  const [explaination, setExplaination] = useState("");
  const [rating, setRating] = useState();
  // const [video, setVideo] = useState(null);
  // const handleChange = (e) => {
  //   // Update the state with the selected file
  //   setVideo(e.target.files[0]);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    try {
      // const res = await axios.post(
      //   "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials",
      //   { custid, custname, smallintro, explaination, rating, video },
      //   { headers: { "Content-Type": "multipart/form-data" } }
      // );
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials",
        { custid, custname, smallintro, explaination, rating }
      );

      console.log(res.data);
      alert(`${res.data.message}`);
      setCustid("");
      setCustname("");
      setSmallintro("");
      setExplaination("");
      setRating("");
      // setVideo(null);
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
            <h2>Add Testimonial</h2>
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
              {/* <label>
                Video:
                <input
                  type="file"
                  accept="video/*"
                  name="video"
                  onChange={handleChange}
                />
              </label> */}
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

export default TestimonialForm;
