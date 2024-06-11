import React, { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi"; // Changed to BiSun and BiMoon
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3, // Changed id values
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4, // Changed id values
    name: "BOOKING",
    link: "/#booking",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">Car Rental</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSun // Changed to BiSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer" // Added cursor-pointer class
                />
              ) : (
                <BiMoon // Changed to BiMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer" // Added cursor-pointer class
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSun // Changed to BiSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer" // Added cursor-pointer class
              />
            ) : (
              <BiMoon // Changed to BiMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer" // Added cursor-pointer class
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
