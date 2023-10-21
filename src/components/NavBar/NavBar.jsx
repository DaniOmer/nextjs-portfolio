import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

import NavLink from "./NavLink";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

const NavBar = () => {
  const NavLinks = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Works",
      href: "#works",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-95 backdrop-blur-sm z-10"
      id="home"
    >
      <div className="container w-11/12 mx-auto flex flex-wrap items-center justify-between py-4 md:py-8">
        <Link href={"/"} className="text-3xl text-white font-semibold">
          OD
        </Link>

        <ul className="hidden md:flex gap-6">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <NavLink key={index} href={link.href} title={link.title} />
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          <Link
            className="flex items-center w-fit h-fit gap-1 px-3 py-1 rounded-full border-2"
            href={"tel:+33652720722"}
          >
            Let's Talk
            <BsArrowRight />
          </Link>
          <div className="flex flex-col md:hidden gap-10">
            {!isMenuOpen ? (
              <button onClick={() => setIsMenuOpen(true)}>
                <span className="text-2xl">
                  <CiMenuBurger />
                </span>
              </button>
            ) : (
              <button onClick={() => setIsMenuOpen(false)}>
                <span className="text-2xl">
                  <CiMenuFries />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <MenuOverlay links={NavLinks} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
    </nav>
  );
};
export default NavBar;
