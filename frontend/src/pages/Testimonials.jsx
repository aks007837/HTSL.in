import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components";

const Testimonials = () => {
  const [tests, setTests] = useState([]);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    const loadFunc = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials"
        );
        console.log(resp.data);
        setTests(resp.data);
        // Initialize showMore state to false for all testimonials
        const initialShowMoreState = {};
        resp.data.forEach((testimonial) => {
          initialShowMoreState[testimonial._id] = false;
        });
        setShowMore(initialShowMoreState);
      } catch (error) {
        console.log(`Error Found ${error}`);
      }
    };
    loadFunc();
  }, []);

  const generateStars = (rating) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index} role="img" aria-label="star">
        ⭐
      </span>
    ));
    return stars;
  };

  const toggleShowMore = (testimonialId) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [testimonialId]: !prevShowMore[testimonialId],
    }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-gray-100 rounded-lg shadow-md p-4"
            >
              <iframe
                className="w-full h-64 rounded-t-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Test YouTube video URL
                title={testimonial.title}
                allowFullScreen
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {testimonial.title}
                </h2>
                <div className="text-gray-700 mb-2">
                  {testimonial.explaination && ( // Check if explaination exists
                    <>
                      {showMore[testimonial._id]
                        ? testimonial.explaination
                        : testimonial.explaination.length > 100
                        ? testimonial.explaination.slice(0, 100) + "..."
                        : testimonial.explaination}
                      {testimonial.explaination.length > 100 && (
                        <div>
                          <button
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={() => toggleShowMore(testimonial._id)}
                          >
                            {showMore[testimonial._id]
                              ? "Show Less"
                              : "Show More"}
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-4">- {testimonial.custname}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-500">
                    {generateStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
