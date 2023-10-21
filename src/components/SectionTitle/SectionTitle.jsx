const SectionTitle = ({ title }) => {
  return (
    <div>
      <h1 className="py-3 px-6 mb-8 rounded-full bg-gradient-to-br from-blue-500 via-slate-600 to-slate-200 hover:from-slate-200 hover:to-slate-200 text-white hover:text-black cursor-pointer transition-all delay-0 duration-300 w-fit mx-auto">
        {title}
      </h1>
    </div>
  );
};
export default SectionTitle;
