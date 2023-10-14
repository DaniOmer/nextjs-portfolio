import SectionTitle from "../SectionTitle/SectionTitle";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mt-4 pt-20 md:pt-32" id="contact">
      <SectionTitle title="Contact" />
      <div>
        <div className="flex items-center justify-end gap-4">
          <span className="block w-16 md:w-32 h-1 bg-white"></span>
          <p className="text-3xl md:text-7xl">Have a project ?</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 md:gap-40">
          <div className="col-span-2">
            <h3>What can I do for you ?</h3>
            <form action="" className="bg-black mb-10">
              <div className="gap-6 mb-8 mt-8 w-full grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-black border-b-2 border-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="bg-black border-b-2 border-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="details">Project details</label>
                <textarea
                  name="details"
                  id="details"
                  cols="2"
                  rows="1"
                  className="bg-black border-b-2 border-white focus:outline-none"
                ></textarea>
              </div>
              <button className="hover:bg-transparent hover:border hover:border-gray-700 mt-16">
                Send request
              </button>
            </form>
          </div>
          <div className="col-span-1">
            <p>
              Tell me about your vision. Which challenges are you facing ? What
              are your goals and expectations ? What would success look like and
              how much are planning to spend to get there ?
            </p>
            <div className="flex gap-4 text-4xl mt-4">
              <a
                href="https://www.linkedin.com/in/omerdotchamou/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/in/omerdotchamou/"
                target="_blank"
              >
                <FaTelegram />
              </a>
              <a
                href="https://www.linkedin.com/in/omerdotchamou/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
