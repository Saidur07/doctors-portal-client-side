import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Available Appointments on{" "}
        <span className="font-bold font-sans">{format(date, "PP")}</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.length < 1 ? (
          <>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
              <div className="card-body flex items-center justify-center">
                <Skeleton
                  width={"10rem"}
                  height={"2rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
                <Skeleton
                  width={"15rem"}
                  height={"1rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                  count={3}
                ></Skeleton>
                <Skeleton
                  width={"8rem"}
                  height={"3rem"}
                  highlightColor="#d1d1d1"
                  baseColor="#f6f6f6"
                ></Skeleton>
              </div>
            </div>
          </>
        ) : (
          services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))
        )}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
