import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import { WallOfLove } from "../components/WallOfLove";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <WallOfLove />
      <NewsletterBox />
    </div>
  );
};

export default Home;
