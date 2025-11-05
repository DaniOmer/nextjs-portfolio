import ContactForm from "../forms/contact/ContactForm";
import SocialMedia from "../forms/contact/SocialMedia";

const Contact = () => {
  return (
    <section id="contact" className="mt-10">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex items-center justify-end gap-4">
          <span className="block w-16 md:w-32 h-1 bg-black"></span>
          <p className="text-3xl md:text-5xl">A project in mind ?</p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-40">
          <div className="col-span-2">
            <h3 className="mb-6">What can I do for you ?</h3>
            <ContactForm />
          </div>
          <div className="col-span-1">
            <p>
              Tell me about your vision. Which challenges are you facing ? What
              are your goals and expectations ? What would success look like and
              how much are planning to spend to get there ?
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
