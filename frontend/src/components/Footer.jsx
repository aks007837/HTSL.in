import React from "react";
import { Link } from "react-router-dom";
import { fb, insta, linkedin, logo } from "../assets";
import "./css/foot.css";
import { contact, mosque } from "../assets";
const Footer = () => {
  return (
    <div className="containers" id="backs">
      <div className="top">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="mainlogoico" alt="Logo" />
          </Link>
        </div>
        <div className="contact">
          <img src={contact} className="ico" alt="Contact Us" />
          <span>+91 7029715392</span>
          <div>contact@htsl.in</div>
        </div>
        <div className="address">
          <img src={mosque} className="ico" alt="Address" />
          <span>Siliguri , Darjeeling , West Bengal , India</span>
          <span>Pin : 734009</span>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            HTSL Studio™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="https://www.linkedin.com/in/pc7029/"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-6 mr-6"
          >
            <img
              src={linkedin}
              alt="Linkedin"
              className="h-8 w-8 filter invert"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555374802399"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 mr-6"
          >
            <img src={fb} alt="Linkedin" className="h-8 w-8 filter invert" />
          </a>
          <a
            href="https://www.instagram.com/htslstudio/"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img src={insta} alt="Linkedin" className="h-8 w-8 filter invert" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
