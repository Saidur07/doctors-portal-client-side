import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl overflow-x-hidden">
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
        <div className="card-body flex items-center justify-center hover:scale-110 transition-all">
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
    </div>
  );
};

export default LoadingSkeleton;
