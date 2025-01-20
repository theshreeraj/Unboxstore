import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-16 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-16" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            <b>UnboxStore</b> is your go-to fashion hub for Gen Z, featuring
            trendy sneakers, apparel, and accessories. Unbox your style and stay
            ahead of the trends!
          </p>
        </div>

        <div>
          <p className="text-md font-medium mb-2">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-md font-medium mb-2">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 87998 31091</li>
            <li>Mr. Anand Kengar</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @unboxstore.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
