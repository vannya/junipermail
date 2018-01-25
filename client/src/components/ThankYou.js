import React from "react";
import image from "../styles/assets/thankyou.jpg";

const ThankYou = () => {
  return (
    <div className="container page-view">
      <div className="thankyou">
        <img src={image} alt="Thank You!" />
      </div>
    </div>
  );
};

export default ThankYou;
