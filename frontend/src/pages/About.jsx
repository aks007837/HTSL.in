import React from "react";
import { Layout, WhyUs } from "../components";
import "./css/about.css";
import { about } from "../assets";
import { useState, useEffect } from "react";
const About = () => {
  // Define state to hold the background image URL
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Use useEffect to set the background image once the component is mounted
  useEffect(() => {
    setBackgroundImage(`url(${about})`);
  }, []);

  // Define CSS style object with the background image
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "contain", // Adjust this property according to your needs
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center top 40%",
    // backgroundAttachment: "fixed",
  };
  return (
    <Layout>
      <div className="abc">
        {/* <div id="mains" className="p-8" style={backgroundStyle}> */}
        <div id="mains" className="p-8">
          <div className="contents m-10">
            {/* <WhyUs /> */}
            <div className="bg-indigo-900 text-white rounded-lg opacity-75 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-8 hover:underline">
                  About Us
                </h2>
                <p className="text-lg text-white mb-12 text-center">
                  Welcome to HTSL, where creativity meets innovation! As a small
                  but ambitious agency, we specialize in a range of services to
                  bring your ideas to life. Our dedicated team excels in Video
                  Editing, Blog Writing, Script Writing, Product Animation, and
                  Web Development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <ServiceCard
                    title="Video Editing"
                    description="Transforming raw footage into compelling visual stories is our expertise. We enhance your content with seamless edits and captivating effects."
                  />
                  <ServiceCard
                    title="Blog Writing"
                    description="Captivate your audience with engaging and SEO-friendly content tailored to your brand. Our skilled writers bring your ideas to life with creativity and precision."
                  />
                  <ServiceCard
                    title="Script Writing"
                    description="Crafting impactful narratives is our forte. Whether for videos, presentations, or promotions, we turn ideas into powerful stories that resonate."
                  />
                  <ServiceCard
                    title="Product Animation"
                    description="Elevate your product's appeal with dynamic animations. Our animations showcase features, functionality, and uniqueness, leaving a lasting impression."
                  />
                  <ServiceCard
                    title="Web Development"
                    description="Revolutionize your online presence with our expert web development services. We create user-friendly and dynamic websites tailored to your unique needs."
                  />
                </div>
                <p className="text-lg text-white mb-8 text-center">
                  At HTSL, we may be small, but our aspirations are big. We
                  strive to grow into something extraordinary, delivering
                  exceptional services that exceed expectations. Join us on this
                  journey, and let's create something remarkable together. Your
                  vision, our expertise—unleashing creativity, one project at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl text-black font-semibold mb-4">{title}</h3>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  );
};
export default About;
