const Footer = () => {
  return (
    <footer className="mt-24 pt-5 pb-2 border-t border-white md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="text-center text-sm mb-8 md:mb-0 text-gray-500">
          <span className="block uppercase mb-2">Call me</span>
          <p>(+33) 652720722</p>
        </div>
        <div className="text-center text-sm text-gray-500 col-span-2 mb-8 md:mb-0 md:border-l md:border-r border-white">
          <span className="block mb-2 md:px-1">
            Innovation distinguishes between a leader and a follower. - Steve
            Jobs
          </span>
          <p>&copy; 2023 - Omer DOTCHAMOU</p>
        </div>
        <div className="text-center text-sm text-gray-500 mb-8 md:mb-0 row-start-2 md:row-start-auto">
          <span className="block uppercase mb-2">Send me e-mail</span>
          <p>ddaniomer@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
