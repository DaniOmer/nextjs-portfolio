import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Avatar from "../../../public/images/avatar.png";

const HeroSection = () => {
  return (
    <section className="mt-44 md:mt-60" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center md:text-left">
          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-slate-600 to-slate-200 font-semibold">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Omer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "SEO Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6">
            I'm a software developer with experience in many different
            languages, framework and technologies. I'm always looking for a new
            challenge to tackle.
          </p>
          <div>
            <button className="py-3 px-6 mr-4 rounded-full bg-gradient-to-br from-blue-500 via-slate-600 to-slate-200 hover:from-slate-200 hover:to-slate-200 text-white hover:text-black cursor-pointer transition-all delay-0 duration-300">
              <a href="#contact">Hire Me</a>
            </button>
            <button className="py-3 px-6 mt-3 rounded-full bg-transparent text-white hover:bg-slate-800 border border-white cursor-pointer transition delay-0 duration-300">
              <a href="#contact">Download CV</a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-16 md:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px]">
            <Image
              src={Avatar}
              alt="Avatar"
              width={300}
              height={300}
              className="rounded-full"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
