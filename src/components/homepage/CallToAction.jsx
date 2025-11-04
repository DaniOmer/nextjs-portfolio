import Link from "next/link";

function CallToAction() {
  return (
    <section id="callToAction">
      <div className="container mx-auto flex justify-center items-center">
        <Link
          href="/contact"
          className="font-bebas px-4 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition-all delay-75 ease-in-out"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
export default CallToAction;
