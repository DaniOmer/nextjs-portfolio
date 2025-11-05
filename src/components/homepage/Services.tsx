import { services } from "@/data/services";
import CallToAction from "./CallToAction";

export interface IServiceProps {
  title: string;
  description: string;
}

const Services = () => {
  const ServiceCard = ({ title, description }: IServiceProps) => {
    return (
      <div className="flex gap-4 lg:gap-8 p-6 border">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 text-sm leading-7">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="services">
      <CallToAction title="Start a project" linkTo="/contact" />
      <div className="container mx-auto px-4 xl:px-0">
        <p className="text-sm text-center mb-6">
          I provide end-to-end web and mobile development services — from
          concept to deployment — to help you grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
