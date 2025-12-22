import React from "react";
import SellingImage from "../../../src/assets/store/dvd.webp";

function HeroSectionFour() {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-20">
      <img
        src={SellingImage}
        alt="advertisement"
        className="w-full object-cover "
      />

      <button
        className="btn-drake-outline
          mt-3
          w-[60%]
          mx-auto
          text-center
          block
          lg:w-[40%]
        "
      >
        Buy now
      </button>
    </div>
  );
}

export default HeroSectionFour;
