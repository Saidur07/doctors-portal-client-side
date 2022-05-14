import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div
        className="hero min-h-[50vh] bg-opacity-40"
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
