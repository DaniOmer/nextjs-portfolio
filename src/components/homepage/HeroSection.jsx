import Image from "next/image";
import images from "@/constantes/images";

function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-auto w-full overflow-hidden">
      <div className="relative w-full h-[60vh] md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full">
        <Image
          src={images.Banner}
          alt="Software developer"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 xl:px-0 relative z-10 flex flex-col justify-center min-h-[40vh] md:min-h-[80vh]">
        <div className="w-full md:w-1/2 py-12">
          <p className="text-5xl sm:text-6xl font-inter font-semibold leading-tight">
            Designing software that works effortlessly
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
