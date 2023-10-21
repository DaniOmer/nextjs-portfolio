import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  const [isFormFilled, setIsFormFilled] = useState(true);
  const [emailSuccess, setEmailSuccess] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     e.target.subject.value === "" ||
  //     e.target.name.value === "" ||
  //     e.target.email.value === "" ||
  //     e.target.message.value === ""
  //   ) {
  //     setIsFormFilled(false);
  //   } else {
  //     const data = {
  //       subject: e.target.subject.value,
  //       name: e.target.name.value,
  //       email: e.target.email.value,
  //       message: e.target.message.value,
  //     };
  //     const JSONdata = JSON.stringify(data);
  //     const endpoint = "/api/send";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSONdata,
  //     };

  //     const response = await fetch(endpoint, options);
  //     const resData = await response.json();
  //     console.log(resData);

  //     if (resData.status === 200) {
  //       setEmailSuccess(true);
  //       console.log("Message sent successfully!");
  //     }
  //   }
  // };

  return (
    <section className="mt-4 pt-20 md:pt-32" id="contact">
      <SectionTitle title="Contact" />
      <div>
        <div className="flex items-center justify-end gap-4">
          <span className="block w-16 md:w-32 h-1 bg-white"></span>
          <p className="text-3xl md:text-7xl">Have a project ?</p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-40">
          <div className="col-span-2">
            <h3 className="mb-6">What can I do for you ?</h3>
            {!isFormFilled ? (
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span class="block sm:inline font-semibold">
                  Please complete all the fields.
                </span>
                <span
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setIsFormFilled(true)}
                >
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            ) : null}
            <form
              className="bg-black mb-10"
              action="https://getform.io/f/6ee77c86-f4e5-45ce-82a0-8337a719acff"
              method="POST"
            >
              <ul className="grid w-full gap-6 md:grid-cols-3">
                <li>
                  <input
                    type="radio"
                    id="web-app"
                    name="subject"
                    value="web-app"
                    className="peer opacity-0"
                    readOnly="true"
                    required
                  />
                  <label
                    htmlFor="web-app"
                    className="inline-flex items-center justify-center w-full py-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-white hover:text-gray-600 hover:bg-gray-400"
                  >
                    <div className="block">
                      <p className="w-pl text-lg font-semibold">Web app</p>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="ecommerce-app"
                    name="subject"
                    value="ecommerce-app"
                    className="peer opacity-0"
                    readOnly="true"
                    required
                  />
                  <label
                    htmlFor="ecommerce-app"
                    className="inline-flex items-center justify-center w-full py-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-white hover:text-gray-600 hover:bg-gray-400"
                  >
                    <div className="block text-center">
                      <p className="w-full text-lg font-semibold">
                        E-commerce App
                      </p>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="seo-app"
                    name="subject"
                    value="seo-app"
                    className="peer opacity-0"
                    readOnly="true"
                    required
                  />
                  <label
                    htmlFor="seo-app"
                    className="inline-flex items-center justify-center w-full py-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-white hover:text-gray-600 hover:bg-gray-400"
                  >
                    <div className="block text-center">
                      <p className="w-full text-lg font-semibold">
                        SEO Optimization
                      </p>
                    </div>
                  </label>
                </li>
              </ul>
              <div className="gap-6 mb-8 mt-8 w-full grid grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-black border-b border-white focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="bg-black border-b border-white focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Project details</label>
                <textarea
                  name="message"
                  id="message"
                  cols="2"
                  rows="1"
                  className="bg-black border-b border-white focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="hover:bg-transparent border hover:border-gray-700 py-2 px-4 mt-16 focus:outline-none"
              >
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
