import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Hero Left Side */}

      {/* Hero Right Side */}
      <img className="w-full sm:w-full" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
