import React from 'react';

const Brand = () => {
    return (
        <div className="navbar bg-white shadow-md flex items-center p-4">
        <img
          src="/images/covenant.svg.png" // Adjusted path
          alt="Logo"
          className="w-42 h-auto"
        /><img
        src="/images/grubspot.svg.png" // Adjusted path
        alt="Logo"
        className="w-42 h-auto"
      /><img
      src="/images/gutwork.svg.png" // Adjusted path
      alt="Logo"
      className="w-42 h-auto"
    /><img
    src="/images/infinite.svg.png" // Adjusted path
    alt="Logo"
    className="w-42 h-auto"
  /><img
  src="/images/phasekit.svg.png" // Adjusted path
  alt="Logo"
  className="w-42 h-auto"
/>
      </div>
    );
};

export default Brand;