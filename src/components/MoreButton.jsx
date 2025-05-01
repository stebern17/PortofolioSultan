import React from "react";

export default function MoreButton({ showMore, setShowMore }) {
  if (showMore) return null;
  return (
    <>
      <button
        onClick={() => setShowMore(true)}
        className="mx-auto hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 50 50"
        >
          {" "}
          <path
            fill="white"
            d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
          ></path>{" "}
          <path
            fill="white"
            d="m25 34.4l-9.7-9.7l1.4-1.4l8.3 8.3l8.3-8.3l1.4 1.4z"
          ></path>{" "}
          <path fill="white" d="M24 16h2v17h-2z"></path>{" "}
        </svg>{" "}
        <p className="text-white">See More!</p>{" "}
      </button>
    </>
  );
}
