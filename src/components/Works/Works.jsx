import SectionTitle from "../SectionTitle/SectionTitle";
import WorkCard from "./WorkCard";
import WORK1 from "../../../public/images/work-1.png";
import WORK2 from "../../../public/images/work-2.png";

import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { SiFirebase, SiMui } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const Works = () => {
  const languages1 = [<BiLogoReact />, <BiLogoTailwindCss />, <DiSass />];
  const languages2 = [
    <TbBrandNextjs />,
    <SiFirebase />,
    <BiLogoTailwindCss />,
    <SiMui />,
  ];
  return (
    <section className="mt-4 pt-20 md:pt-32" id="works">
      <SectionTitle title="Works" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <WorkCard
          image={WORK1}
          title="Agency website"
          description="A gracefully designed website for a dynamic communication agency. A perfect blend of visual creativity and engaging content."
          preview="https://cts-benin.com/"
          languages={languages1}
        />
        <WorkCard
          image={WORK2}
          title="Booking website"
          description="A sophisticated booking website tailored for scheduling appointments and services at a hair salon."
          preview="https://charme-coiffure.vercel.app/"
          languages={languages2}
        />
        <WorkCard
          image={WORK1}
          title="Agency website"
          description="A gracefully designed website for a dynamic communication agency. A perfect blend of visual creativity and engaging content."
          preview="https://cts-benin.com/"
          languages={languages1}
        />
        <WorkCard
          image={WORK1}
          title="Agency website"
          description="A gracefully designed website for a dynamic communication agency. A perfect blend of visual creativity and engaging content."
          preview="https://cts-benin.com/"
          languages={languages1}
        />
      </div>
    </section>
  );
};
export default Works;
