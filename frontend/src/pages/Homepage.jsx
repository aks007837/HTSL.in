import React, { useState, useEffect } from "react";
import { Layout, Testimonial } from "../components";
import "./css/Home.css";
import { vid } from "./assets";
import { cross, foot, homepge } from "../assets";
import { Link } from "react-router-dom";
import { butt } from "../assets";
import { multimedia } from "../assets";
import axios from "axios";
import WhyUs from "../components/WhyUs";
import { hmp2 } from "../assets";
import { useAuth } from "../context/auth.jsx";
import WhyUs2 from "../components/WhyUs2.jsx";

const Homepage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nameid, setNameid] = useState("");

  const videoss = "https://www.youtube.com/watch?v=ziDP4YSoHgk";

  const handleTabClick = async (e) => {
    e.preventDefault();
    const pid = e.target.id;
    console.log(pid);
    const tabBtns = document.querySelectorAll(".btns"); // Assuming all tab buttons have a common class 'tab-btn'
    console.log(tabBtns);

    tabBtns.forEach((tabBt) => {
      if (tabBt.id === pid) {
        tabBt.style.borderTop = "4px solid blue";
      } else {
        tabBt.style.borderTop = "none";
      }
    });
    const names = e.target.name;
    // const spins = document.getElementById("spin");
    try {
      // const pops = document.getElementById("popsup");
      // pops.style.display = "block";
      // setLoading(true);
      // spins.style.display = "block";
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/videos/get-videos"
      );

      // console.log(res.data);
      const newdata = res.data;
      setData(res.data);

      // Filter data based on the clicked button name
      const filtered = newdata.filter((vid) => vid.type == names);
      // console.log(filtered);
      setFilteredData(filtered);
    } catch (error) {
      console.log(`Error in fetching data ${error}`);
    }
  };
  const setimage = () => {
    const rightcontent = document.getElementById("rightcontent");
    // rightcontent.style.backgroundImage = `url(${foot})`;
    // rightcontent.style.backgroundImage = `linear-gradient(to right, orange, white, green)`;
    // rightcontent.style.backgroundColor = `white`;
    rightcontent.style.backgroundColor = `black`;
    // rightcontent.style.backgroundImage = `url(${butt})`;
    rightcontent.style.color = "transparent";
    rightcontent.style.backgroundClip = "text";
  };

  // Show the button when the user scrolls down 20px from the top of the document
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     document.getElementById("swipeup").style.display = "block";
  //   } else {
  //     document.getElementById("swipeup").style.display = "none";
  //   }
  // }

  // When the user clicks on the button, scroll to the top of the document
  // document.getElementById("swipeup").addEventListener("click", function () {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // });

  useEffect(() => {
    setimage();
    const content = document.getElementById("video-background").play();
    const mainb = document.getElementById("main-bg");
    const sec = document.getElementById("sec-main");

    sec.style.backgroundImage = `url(${homepge})`;
    sec.style.backgroundPosition = "center -400px";
    mainb.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    mainb.style.boxShadow = "inset 0 10px 10px 5px rgba(0, 0, 0, 0.5)";
    // mainb.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // mainb.style.opacity = "0.5";
    // mainb.style.backgroundColor = `rgb(166, 228, 250)`;
    sec.style.backgroundSize = "cover";
    const footr = document.getElementById("btsbacks");
    // footr.style.backgroundImage = `url(${butt})`;
    footr.style.background = "transparent";
    footr.style.backgroundSize = "cover";

    const bestVideoBtn = document.getElementById("btn0");
    if (bestVideoBtn) {
      bestVideoBtn.click();
    }
  }, []);
  return (
    <Layout>
      <div className="main">
        {/* main body */}
        <div className="sec" id="sec-main">
          <div className="topbody" id="main-bg">
            <video id="video-background" autoPlay loop muted playsInline>
              <source src={vid} type="video/mp4" />
            </video>
            <div className="rightbody typewriter" id="rightcontent">
              <h1>TRUST US WITH </h1>
              <h1>OUR WORK</h1>
            </div>
          </div>
        </div>
        {/* tabbed buttons */}
        <div className="bottombody" id="btsbacks">
          <div className="tabbed">
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn0" name="Reels Content">
                Best Video
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn1" name="Reels Content">
                Reels Content
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn2" name="Documentary">
                Documentary
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn3" name="Tech Videos">
                Tech Videos
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn4" name="Reels Content">
                Script Writing
              </button>
            </Link>
            {/* <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn5" name="Manhwa Videos">
                Manhwa Videos
              </button>
            </Link>
            <Link className="btn" id="btn6" onClick={handleTabClick}>
              <button className="btns" id="btn6" name="Product Animation">
                Product Animation
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn7" name="2D Animation">
                2D Animation
              </button>
            </Link>
            <Link className="btn" onClick={handleTabClick}>
              <button className="btns" id="btn8" name="Reels Content">
                Blog Writing
              </button>
            </Link> */}
          </div>
          <div className="tabbedWindow">
            <div className="spinner" id="spin">
              {<span className="loader"></span>}
            </div>
            <div className="innerContent">
              {nameid}
              {filteredData.length === 0 ? (
                <div>No Video Found!!</div>
              ) : (
                filteredData.map((vid) => (
                  <div key={vid._id} className="videos">
                    {/* {vid.type} */}
                    <iframe src={vid.links}>
                      Your browser does not support the video tag.
                    </iframe>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        {/* <WhyUs /> */}
        <WhyUs2 />
        {/* <Marquee /> */}
        {/* testimonials */}
        <Testimonial />
      </div>

      <button id="swipeup">^</button>
    </Layout>
  );
};

export default Homepage;
