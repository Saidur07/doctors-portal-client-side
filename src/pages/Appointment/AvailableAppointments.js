import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSkeleton from "../Shared/LoadingSkeleton";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);
  const fetchAllData = async () => {
    const res = await fetch(
      `http://localhost:5000/available?date=${formattedDate}`
    );
    const data = await res.json();
    return data;
  };
  const fetchData = async () => {
    const dataFormServer = await fetchAllData();

    setServices([...services, ...dataFormServer]);
    if (dataFormServer.length === 0) {
      sethasMore(false);
    }
  };
  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <InfiniteScroll
        dataLength={services.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<LoadingSkeleton></LoadingSkeleton>}
        // endMessage={<div>Ended!</div>}
      >
        {services.length < 1 ? (
          <LoadingSkeleton></LoadingSkeleton>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
              ></Service>
            ))}
          </div>
        )}
      </InfiniteScroll>
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
