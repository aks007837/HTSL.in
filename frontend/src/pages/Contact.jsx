import React from "react";
import { Layout } from "../components";
import "./css/contact.css";
import { about, contactus } from "../assets";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Define state to hold the background image URL
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted: ");
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/users/contact",
        { name, email, phone, message },
        { headers: { "Content-Type": "application/json" } }
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      console.log(res);

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

  useEffect(() => {
    setBackgroundImage(`url(${about})`);
  }, []);

  // Define CSS style object with the background image
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "contain",
  };
  return (
    <Layout>
      <div className="mains">
        {/* <div id="mains-contact" className="flex" style={backgroundStyle}> */}
        <div id="mains-contact" className="flex">
          <ToastContainer />
          <div className="outer">
            <div className="top-content text-white">
              <h1 className="text-blue-200 underline" id="contact-heading">
                GET IN TOUCH
              </h1>
              <p>
                Thank you for your interest in HTSL. We're here to assist you.
                Please feel free to reach out using the contact details below or
                by filling out the contact form.
              </p>
              <span>
                Phone:{" "}
                <span className="text-blue-500 hover:underline">
                  +91 7029715392
                </span>
              </span>
              <br />
              <span>
                Email:{" "}
                <span className="text-blue-500 hover:underline">
                  contact@htsl.in
                </span>
              </span>
              <br />
              <span>
                Address: Siliguri , Darjeeling , West Bengal , India ; Pin :
                734009
              </span>
            </div>
            <div className="bottom-content">
              <form onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <input
                    type="Number"
                    placeholder="Your Phone*"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>
                <label>
                  <textarea
                    name="message"
                    className="p-2"
                    placeholder="Your Message*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </label>
                <button className="submit-btn">Submit Here</button>
              </form>
            </div>
          </div>
          <div id="contact-div" className="h-max">
            <img className="contact-img" src={contactus} alt="Contact Us" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
