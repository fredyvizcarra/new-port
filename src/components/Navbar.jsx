import { logoImg, linkedinImg, searchImg } from "../utils";
import { navLists } from "../constants";
import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex w-full screen-max-width px-3 ">
        <img src={logoImg} alt="Apple" width={24} height={24} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray"
              } px-5 text-sm cursor-pointer hover:text-white transition-all`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {/* <img src={searchImg} alt="search" width={18} height={18} /> */}
          <img
            src={linkedinImg}
            alt="linkedin"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
