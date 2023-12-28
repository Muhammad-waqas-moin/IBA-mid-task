import React from "react";
import envelope from "../assets/EnvelopeSimple.svg";

const SubcribeButton = () => {
  return (
    <div className="flex justify-center gap-2 items-center bg-[#A259FF]  p-2 rounded-full">
      <img src={envelope} />
      <p>Subscribe</p>
    </div>
  );
};

export default SubcribeButton;
