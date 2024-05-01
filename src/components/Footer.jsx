import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <p className="font-semibold text-gray text-xl">Contact</p>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:items-center justify-between">
          <div className="flex mb-4 lg:mb-0 font-semibold text-gray text-xs">
            <a
              className="flex items-center lg:text-xl text-gray-400 transform transition-all duration-200 hover:scale-105"
              href="mailto:fredyvizcarrag@gmail.com"
            >
              <img
                src="/public/assets/images/email.png"
                alt="logo email"
                className="hidden dark:block w-6 lg:w-7 mr-3"
              />
              fredyvizcarrag@gmail.com
            </a>
          </div>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <a
                key={link}
                href={link.path}
                target="_blank"
                className="transform transition-all duration-200 hover:scale-105"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="hidden dark:block lg:w-8 w-6 mr-3 lg:mr-4"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
