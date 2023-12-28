import React from "react";
const SingleInput = ({ icon, placeholder }) => {
  return (
    <>
      <div className="relative  w-80 ">
        <div className="absolute  left-3 top-1/2 transform -translate-y-1/2">
          <img src={`${icon}`} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 w-full border rounded-md  focus:outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
};

export default SingleInput;
