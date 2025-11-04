import Image from "next/image";

const WorkCard = ({ image, title, description, preview, languages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl">
        <div className=" bg-slate-800 rounded-xl shadow-sm shadow-slate-800">
          <Image src={image} alt={title} className="rounded-xl" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex gap-3">
          {languages.map((language, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-slate-100 text-slate-800"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
