import NavLink from "../NavBar/NavLink";

const MenuOverlay = ({ links, setIsMenuOpen }) => {
  return (
    <ul className="flex flex-col py-4 items-center gap-12 mb-10">
      {links.map((link, index) => (
        <li key={index} onClick={() => setIsMenuOpen(false)}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
