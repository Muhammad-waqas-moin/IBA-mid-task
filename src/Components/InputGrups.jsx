import React from "react";
import user from "../assets/User.svg";
import evenlop from "../assets/EnvelopeSimple.svg";
import SingleInput from "./SingleInput";
import password from "../assets/LockKey.svg";

const InputGrups = () => {
  const obj = [
    { Src: user, placeholder: "username" },
    {
      Src: evenlop,
      placeholder: "Email",
    },
    {
      Src: password,
      placeholder: "password",
    },

    {
      Src: password,
      placeholder: "Confrim Password",
    },
  ];

  return (
    <div>
      <div className="flex flex-col pb-4 justify-start items-center gap-5">
        {obj &&
          obj.map((item, index) => {
            return (
              <SingleInput
                key={index}
                icon={item?.Src}
                placeholder={item?.placeholder}
              />
            );
          })}
        <button className="px-16 w-80  py-2 border bg-[#A259FF] rounded-md  focus:outline-none focus:border-blue-500">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default InputGrups;
