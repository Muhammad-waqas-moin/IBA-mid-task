import React, { useState } from "react";
// import CommonButton from "../Commen/figmaTaskCommon/CommonButton";
// import BarIcon from "../Commen/figmaTaskCommon/BarIcon";
// import logo from "../assets/NFTMarketplace.svg"
import logo from "../assets/Storefront.svg";
import textlogo from "../assets/LogoText.svg";
import bar from "../assets/BurgerMenu.svg";
import user from "../assets/User.svg";
// import baricon from "../assets/BurgerMenu.svg";
const Navbar = () => {
  const NavbarLinks = [
    {
      name: "Market place",
      link: "#market",
      icon: false,
    },
    {
      name: "Rankings",
      link: "#rankings",
      icon: false,
    },
    {
      name: "connect a wellet",
      link: "#wellet",
      icon: false,
    },
    // {
    //   name: "Sign Up",
    //   link: "#sigup",
    //   icon: true,
    // },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isbarOpenFunc = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="px-4 py-6 md:px-2 md:py-4 bg-[#2B2B2B]">
        <div className="flex text-white font-bold items-center justify-between">
          <span className="flex gap-2">
            {" "}
            <img src={logo} alt="logo" />
            <img src={textlogo} alt="logo" />
          </span>
          <ul className="md:flex items-center gap-8 hidden ">
            {NavbarLinks &&
              NavbarLinks.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            <li className="flex justify-center items-center gap-4 h-14 rounded-lg p-4 bg-[#A259FF]">
              {/* <i class="fa-regular fa-user"></i> */}
              <img src={user} alt="" />
              <p>Sign Up</p>
            </li>
          </ul>

          <span className="md:hidden">
            <img src={bar} alt="bar" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
