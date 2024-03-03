import React from "react";
import "./css/whyus2.css";
import { Admin_bg, butt, foot, homepge } from "../assets";
import { useState, useEffect } from "react";
const WhyUs2 = () => {
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(Admin_bg);
  const setContents = (pid) => {
    console.log(pid);
    switch (pid) {
      case "timing":
        setDesc(
          "We will provide you with your dream content in the quickest time possible , we divide our work and maintain a proper workflow to make the process fastest ."
        );
        setImage(Admin_bg);
        break;
      case "quality":
        setDesc(
          "We are proficient in using industry-standard editing software, ensuring a polished and professional finish to your videos. But In client demand we will use your choice in case you need the project file ."
        );
        setImage(butt);
        break;
      case "workflow":
        setDesc(
          "We use softwares like Notion to organize , and our mostly used is Adobe Premier pro , After effects and Photoshop  for creative works . And throughout the Video making process you will be informed about the Project status ."
        );
        setImage(foot);
        break;
      case "pricing":
        setDesc(
          "We provide our services within your budget .We evaluate your project and made you a custom package for each client to make sure you have a video of your choice without breaking your bank ."
        );
        setImage(homepge);
        break;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const pid = e.target.id;
    // console.log(pid);
    const btns = document.querySelectorAll(".title-desc");
    // console.log(btns);
    btns.forEach((tabBt) => {
      if (tabBt.id === pid) {
        tabBt.style.borderLeft = "4px solid blue";
        tabBt.style.color = "orange";
      } else {
        tabBt.style.borderLeft = "4px solid gray";
        tabBt.style.color = "white";
      }
    });
    setContents(`${pid}`);
    console.log(desc);
  };
  useEffect(() => {
    const defa = document.getElementById("quality");
    if (defa) {
      defa.click();
    }
  }, []);

  return (
    <div class="mainlistss p-1 mb-8">
      <figure class="max-w-screen-lg mx-auto text-center mt-4 mb-5">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <h1 class="text-2xl italic font-medium text-orange-500 dark:text-white">
            Why Us
          </h1>
        </blockquote>
        <div className="slider">
          <div className="slider-head">
            <ul className="slider-title">
              <li className="title-desc" onClick={handleClick} id="timing">
                Timing
              </li>
              <li className="title-desc" onClick={handleClick} id="quality">
                Quality
              </li>
              <li className="title-desc" onClick={handleClick} id="workflow">
                Workflow
              </li>
              <li className="title-desc" onClick={handleClick} id="pricing">
                Pricing
              </li>
            </ul>
            <div className="slider-desc">{desc}</div>
          </div>
          <div className="slider-image">
            <img src={image} alt="" />
          </div>
        </div>
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-white dark:text-white">
              Pritam Chakrborty
            </cite>
            <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at Google
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default WhyUs2;
