import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function CallToAction({ title, linkTo }) {
  return (
    <section id="callToAction">
      <div className="flex justify-center items-center mb-8">
        <Link
          href={linkTo}
          className="flex items-center font-bebas px-4 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition-all delay-75 ease-in-out"
        >
          {title}
          <GoArrowUpRight className="ml-3" />
        </Link>
      </div>
    </section>
  );
}
export default CallToAction;
