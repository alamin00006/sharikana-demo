import React from "react";
import "./HeroSection.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const HeroSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const mobileNumber = e.target.mobileNumber.value;
    const email = e.target.email.value;

    const formData = {
      fullName,
      mobileNumber,
      email,
    };

    try {
      axios.post("http://localhost:5000/api/v1/subscribe", formData);

      toast.success("Thanks for your subscribe");
    } catch (error) {
      console.log(error);
      toast.error("Sorry ! Something is wrong");
    }
  };
  return (
    <div className="relative bg-gray-200 h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/card-sharikana.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vertical Blurred Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative custom-container flex flex-col md:flex-row items-center justify-between py-12 z-10 h-full overflow-hidden ">
        {/* Left Part */}
        <div className="px-6 text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 all_font">
            Bangladesh's <span className="text-[#00a47e]">1st online</span>{" "}
            fractional Property Marketplace Platform
          </h1>
          <p className="text-sm md:text-lg text-gray-800 md:text-gray-900 all_font">
            It allows you to receive returns on monthly property rental income
            of up to 15% per year.
          </p>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-[45%] p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubscribe}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input w-full p-3 border border-gray-300 rounded-lg"
                name="fullName"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile No"
                className="input w-full p-3 border border-gray-300 rounded-lg"
                name="mobileNumber"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="input w-full p-3 border border-gray-300 rounded-lg"
                name="email"
                required
              />
            </div>
            <p className="text-xs text-green-600 mb-4 text-center">
              We will let you know as we launch our website.
            </p>
            <button
              type="submit"
              className="btn btn-success w-full px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default HeroSection;
