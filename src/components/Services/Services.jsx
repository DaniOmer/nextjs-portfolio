import ServiceCard from "./ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RiSeoLine, RiShoppingCartFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  const ServicesData = [
    {
      title: "Web apps",
      icon: <CgWebsite />,
      description:
        "I developed web applications and websites using several programming languages like HTML, CSS, JavaScript, React, Python, Node.js and more.",
    },
    {
      title: "E-Commerces",
      icon: <RiShoppingCartFill />,
      description:
        "I developed e-commerce websites and provid technical solutions on various e-commerce platforms such as Wordpress, Shopify, Wix and more.",
    },
    {
      title: "Seo Optimization",
      icon: <RiSeoLine />,
      description:
        "I have analyzed SEO and optimized the technical aspects and keywords for website and web application content.",
    },
  ];
  return (
    <section className="mt-24 md:mt-32">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {ServicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Services;
