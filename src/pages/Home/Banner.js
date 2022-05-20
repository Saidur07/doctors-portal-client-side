import React from "react";
import chair from "../../assets/images/chair.png";
import loader from "../../assets/images/loader.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" /> */}
        <LazyLoadImage
          effect="blur"
          className="max-w-sm rounded-lg shadow-2xl"
          src={chair}
          placeholderSrc={loader}
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
