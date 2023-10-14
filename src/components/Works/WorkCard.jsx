import Image from "next/image";
import { VscPreview } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";

const WorkCard = ({ image, title, description, preview, languages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl relative group">
        <a
          href={preview}
          target="_blank"
          className="py-2 px-4 bg-black bg-opacity-70 rounded-xl shadow-sm shadow-black absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer hidden group-hover:block z-20 "
        >
          Preview
        </a>
        <div className=" bg-slate-800 rounded-xl group-hover:opacity-50 shadow-sm shadow-slate-800">
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
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-2xl font-medium bg-slate-100 text-slate-800"
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
