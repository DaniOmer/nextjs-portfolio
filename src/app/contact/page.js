"use client";

import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

import ContactForm from "@/components/forms/contact/ContactForm";
import SocialMedia from "@/components/forms/contact/SocialMedia";

function Contact() {
  return (
    <main className="lg:h-[74vh] 2xl:min-h-screen flex flex-col justify-center items-center bg-background scroll-smooth">
      <div className="container mx-auto px-4 xl:px-0 mt-[70px] gap-10 md:gap-20">
        <div className="lg:w-2/3 mx-auto mt-16">
          <h1 className="font-inter font-semibold text-4xl mb-6">
            Get in touch
          </h1>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <p>
                Whether you are a large company, small startup or an individual
                entrepreneur, we can help you connect with the right people to
                drive your growth.
              </p>

              <div className="flex items-center gap-4">
                <FiPhoneCall />
                <p>(+33) 6 52 72 07 22</p>
              </div>
              <div className="flex items-center gap-4">
                <GoMail />
                <p>ddaniomer@gmail.com</p>
              </div>
              <SocialMedia />
            </div>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
export default Contact;
