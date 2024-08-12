import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="relative flex h-screen bg-gradient-to-r from-white via-white to-gray-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/card-sharikana.png" // Adjusted path
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Blurred Background Effect */}
      <div className="relative top-0 left-0 w-[75%] h-full flex items-start justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1213"
          height="787"
          viewBox="0 0 1213 787"
          fill="none"
        >
          <g filter="url(#filter0_b)">
            <path
              d="M672.068 606.357C609.745 753.824 368.18 787 -7 787V0H1213C1206.29 41.6717 1187.84 135.539 1167.65 177.636C1142.41 230.257 1069.63 278.733 943.814 320.511C817.999 362.289 749.971 422.023 672.068 606.357Z"
              fill="white"
              fillOpacity="0.9"
            />
          </g>
          <defs>
            <filter
              id="filter0_b"
              x="-57"
              y="-50"
              width="1320"
              height="887"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content on the Left Side */}
      <div className="absolute z-10 px-6 h-full custom-container left-part-title">
        <h1 className="md:text-5xl text-3xl md:text-black text-white  font-bold text-[#444f60] font-[Poppins] mb-4 md:w-[75%]">
          Clever{" "}
          <span className="text-[#00a47e] md:text-5xl text-3xl">
            Investment
          </span>{" "}
          Make Your Money Grow
        </h1>
        <p className="md:text-lg text-sm md:text-gray-600 text-white">
          Bangladesh’s 1st online fractional <br /> property marketplace
          platform that allows you to receive <br /> returns on monthly property
          rental income of up to 15% per year.
        </p>
      </div>

      {/* Form on the Right Side but Slightly to the Left */}
      <div className="absolute w-[100%] p-6 bg-white rounded-lg shadow-lg max-w-md right-part">
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Mobile No"
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <p className="text-xs text-green-600 mb-4 text-center">
            We will let you know as we launch our website.
          </p>
          <button className="btn btn-success w-full px-4 py-2 bg-green-600 text-white rounded-lg">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
