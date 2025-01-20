import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <video
          className="w-full md:max-w-[450px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={assets.about_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            UnboxStore was created with a passion for self-expression and a
            mission to redefine fashion for the Gen Z generation. Our journey
            started with a simple vision: to build a platform where trendsetters
            can discover, explore, and shop the latest sneakers, apparel, and
            accessories effortlessly.
          </p>
          <p>
            Since our launch, we've been dedicated to curating a diverse
            collection of on-trend fashion items that reflect individuality and
            style. From iconic sneakers to statement-making outfits, our
            selection is sourced from trusted brands to meet every preference
            and personality.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At UnboxStore, our mission is to empower Gen Z with style,
            convenience, and confidence. We strive to deliver a seamless
            shopping experience that inspires creativity and helps you stay
            ahead of the trends—every step of the way.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
