import { useState } from "react";
import { logo } from "../assets/Images";

import { navLinks } from "./Constants/index";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <img src={logo} alt="" className="w-[140px] h-[42px]" />

      <ul className="list-none sm:flex hidden justify-end items-center ">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-normal font-poppins text-[16px] cursor-pointer ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
