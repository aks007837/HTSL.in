import React, { useState, useEffect } from "react";
import "./css/testimonial.css";
import { vid, cust1, cust2, cust3, cust4, cust5, cust6 } from "../pages/assets";
import axios from "axios";

const Testimonial = () => {
  const [tests, setTests] = useState([]);
  const [videoTest, setVideoTest] = useState(cust2);

  const generateStars = (rating) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index} role="img" aria-label="star">
        ⭐
      </span>
    ));
    return stars;
  };

  const loadFunc = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials"
      );
      console.log(resp.data);
      setTests(resp.data);
    } catch (error) {
      console.log(`Error Found ${error}`);
    }
  };

  const setVideo = async (custid) => {
    switch (custid) {
      case "1001":
        return cust1;
        break;
      case "1002":
        return cust2;
        break;

      case "1003":
        return cust3;
        break;

      case "1004":
        return cust4;
        break;

      default:
        return vid;
        break;
    }
  };

  const handleMouseEnter = (e) => {
    const custid = e.currentTarget.querySelector("#h1").getAttribute("custid");
    console.log(custid);

    if (window.innerWidth > 800) {
      setVideo(custid);
      console.log(videoTest);

      const vids = document.getElementById("vids-background");
      vids.style.display = "block";
    }
  };

  const handleMouseLeave = (e) => {
    console.log(e.target);
    const vids = document.getElementById("vids-background");
    console.log(vids);
    vids.style.display = "none";
  };
  const handleTestimonialClick = async (e) => {
    const custid = e.currentTarget.querySelector("#h1").getAttribute("custid");
    console.log(custid);
    if (window.innerWidth > 800) {
      const path = await setVideo(custid);
      console.log(path);
      setVideoTest(path);
      const vids = document.getElementById("vids-background");
      vids.style.display = "block";
    }
  };

  useEffect(() => {
    loadFunc();
  }, []);

  const filteredTests = tests.filter((usr) => usr.homepage === 1);

  return (
    <>
      {filteredTests.length == 0 ? null : (
        <div className="Test">
          {filteredTests.map((usr) => (
            <div
              key={usr._id}
              className="customer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // onClick={handleTestimonialClick}
            >
              <div className="id">
                <div custid={usr.custid} id="h1">
                  {usr.custname}
                </div>
                <div>{usr.smallintro}</div>
              </div>
              <div className="review">Rating: {generateStars(usr.rating)}</div>
            </div>
          ))}
        </div>
      )}
      <video id="vids-background" autoPlay loop muted controls playsInline>
        {console.log(`Videotest ${videoTest}`)}
        <source src={videoTest} type="video/mp4" />
      </video>
    </>
  );
};

export default Testimonial;
