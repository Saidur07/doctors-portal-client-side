import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const ServicesMain = () => {
  return (
    <div className="my-24">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm lg:mx-8 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="my-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Learn More</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
