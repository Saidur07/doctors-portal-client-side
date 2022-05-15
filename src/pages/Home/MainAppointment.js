import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MainAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center "
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} alt="" className="mt-[-200px]" />
      </div>
      <div className="flex-1 m-5">
        <h3 className="text-xl text-primary"> Appointment</h3>
        <h2 className="text-3xl text-white my-5">Make an Appointment</h2>
        <p className="text-white mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellendus facere cupiditate ullam doloremque, iusto debitis natus
          consectetur quas eos provident voluptatum minima neque maxime
          praesentium, ducimus magnam libero ex nostrum? Ut, molestias labore.
          Iste, accusamus ea. Modi, provident vero!
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MainAppointment;
