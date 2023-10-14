const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="flex gap-8">
      <div className="text-5xl">{icon}</div>
      <div className="flex flex-col">
        <h3 className="font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
