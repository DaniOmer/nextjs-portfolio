import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="text-md text-white">
      {title}
    </Link>
  );
};
export default NavLink;
