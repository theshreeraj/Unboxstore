import React from "react";

import p1 from "../assets/walloflove (1).jpg";
import p2 from "../assets/walloflove (2).jpg";
import p3 from "../assets/walloflove (3).jpg";
import p4 from "../assets/walloflove (4).jpg";
import p5 from "../assets/walloflove (5).jpg";
import p6 from "../assets/walloflove (6).jpg";
import p7 from "../assets/walloflove (7).jpg";

const LOGOS = [p1, p2, p3, p4, p5, p6, p7];

export const WallOfLove = () => {
  return (
    <div className="relative m-auto mb-8 w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <img
            className="slide flex w-[180px] items-center  justify-center gap-2 m-2"
            key={index}
            src={logo}
          />
        ))}
        {LOGOS.map((logo, index) => (
          <img
            className="slide flex w-[180px] items-center justify-center gap-2 m-2"
            key={index}
            src={logo}
          />
        ))}
      </div>
    </div>
  );
};
