"use client";

const Footer = () => {
  return (
    <footer className="w-full mt-24 pt-5 pb-2 border-t md:mt-32">
      <div className="container mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-4">
        <div className="text-sm mb-8 md:mb-0 text-gray-500">
          <span className="block uppercase mb-2">Call me</span>
          <p>(+33) 6 52 72 07 22</p>
        </div>
        <div className="text-sm text-gray-500 text-center col-span-2 mb-8 md:mb-0 md:border-l md:border-r">
          <span className="block mb-2 md:px-1">
            Innovation distinguishes between a leader and a follower. - Steve
            Jobs
          </span>
          <p>&copy; {new Date().getFullYear()} - Omer DOTCHAMOU</p>
        </div>
        <div className="text-sm text-gray-500 text-right mb-8 md:mb-0 row-start-2 md:row-start-auto">
          <span className="block uppercase mb-2">Send me e-mail</span>
          <p>ddaniomer@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
