import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components";
import { Link } from "react-router-dom";
import AdminPanel from "../components/AdminPanel";
const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials"
        );
        console.log(response.data);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right-panel" id="bgimg">
          {testimonials.length == 0 ? (
            <>
              <h1>No Data Available, please </h1>
              <br />
              <Link to="/loggedin-admin/admin-panel/add-testimonials">
                <h3>Add Here</h3>
              </Link>
            </>
          ) : (
            <div className="tables">
              <div className="heads">
                <Link to="/loggedin-admin/admin-panel/update-testimonials">
                  <button className="test-btn">Update Testimonial</button>
                </Link>
                <h1>All Testimonials</h1>
                <Link to="/loggedin-admin/admin-panel/del-testimonials">
                  <button className="test-btn">Delete Testimonial</button>
                </Link>
              </div>
              <table>
                <thead className="th">
                  <tr className="trow">
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Project Intro</th>
                    <th>Explaination</th>
                    <th>Rating</th>
                    <th>Show on Homepage</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial._id} className="trow">
                      <td className="tdata">{testimonial.custid}</td>
                      <td className="tdata">{testimonial.custname}</td>
                      <td className="tdata">{testimonial.smallintro}</td>
                      <td className="tdata">{testimonial.explaination}</td>
                      <td className="tdata">{testimonial.rating}</td>
                      <td className="tdata">{testimonial.homepage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialList;
