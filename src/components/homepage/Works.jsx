import CallToAction from "./CallToAction";
import WorkCard from "./WorkCard";
import works from "../../data/works";

const Works = () => {
  return (
    <section id="works">
      <CallToAction title="Recent works" linkTo="/studio" />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
            languages={work.technologies}
            preview="https://cts-benin.com/"
          />
        ))}
      </div>
    </section>
  );
};
export default Works;
