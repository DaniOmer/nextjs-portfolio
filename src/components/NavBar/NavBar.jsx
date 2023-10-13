import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-3xl text-white font-semibold">
          OD
        </Link>
        <div>
          <ul className="flex gap-3">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
