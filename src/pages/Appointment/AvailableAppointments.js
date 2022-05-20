import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSkeleton from "../Shared/LoadingSkeleton";
import BookingModal from "./BookingModal";
import Service from "./Service";
const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>

      {isLoading ? (
        <LoadingSkeleton></LoadingSkeleton>
      ) : services.length === 0 ? (
        setInterval(() => {
          <h1 className="text-center text-2xl my-5 text-red-300">
            No Data Found :3
          </h1>;
        }, 3000)
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
              refetch={refetch}
            ></Service>
          ))}
        </div>
      )}

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
