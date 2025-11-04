import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

function Header() {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Studio", href: "/studio" },
    { title: "Contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, title }) => {
    return (
      <Link
        href={href}
        className="text-xl font-bebas uppercase hover:underline"
      >
        {title}
      </Link>
    );
  };

  const MenuOverlay = ({ links, setIsMenuOpen }) => {
    return (
      <ul className="md:hidden flex flex-col py-4 items-center gap-12 mb-10">
        {links.map((link, index) => (
          <li key={index} onClick={() => setIsMenuOpen(false)}>
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 bg-opacity-95 backdrop-blur-sm z-10"
        id="home"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 md:py-8 px-4 xl:px-0">
          <Link href={"/"} className="text-2xl font-semibold font-bebas">
            OD Studio
          </Link>

          <div className="flex items-center gap-8 xl:gap-28 font-semibold">
            <ul className="hidden md:flex gap-8 xl:gap-12">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink key={index} href={link.href} title={link.title} />
                </li>
              ))}
            </ul>

            <div className="flex gap-4 items-center">
              <Link
                className="flex items-center w-fit h-fit gap-1 px-3 py-1 rounded-xl border border-black uppercase"
                href={"tel:+33652720722"}
              >
                Let&apos;s Talk
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
        </div>
        {isMenuOpen ? (
          <MenuOverlay links={links} setIsMenuOpen={setIsMenuOpen} />
        ) : null}
      </nav>
    </header>
  );
}
export default Header;
