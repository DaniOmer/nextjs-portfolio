import SectionTitle from "../SectionTitle/SectionTitle";
import WorkCard from "./WorkCard";
import WORK1 from "../../../public/images/work-1.png";

import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { DiSass } from "react-icons/di";

const Works = () => {
  const languages = [<BiLogoReact />, <BiLogoTailwindCss />, <DiSass />];
  return (
    <section className="mt-4 pt-20 md:pt-32" id="works">
      <SectionTitle title="Works" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <WorkCard
          image={WORK1}
          title="Agency website"
          description="A gracefully designed website for a dynamic communication agency. A perfect blend of visual creativity and engaging content."
          preview="https://cts-benin.com/"
          languages={languages}
        />
      </div>
    </section>
  );
};
export default Works;
