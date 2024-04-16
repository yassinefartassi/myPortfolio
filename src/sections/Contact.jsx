import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z2z97sh", "template_6ahayhe", form.current, {
        publicKey: "l1iKkAQDVsUsDbG6r",
      })
      .then(
        () => {
          // Show success message
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
          });
          // Reset form fields after successful submission
          form.current.reset();
        },
        (error) => {
          // Show error message
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong: ${error.text}`,
          });
        }
      );
  };

  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="contact">
      <h2 className="text-4xl font-bold mb-4 primary-color">
        Let's get in touch
      </h2>
      <div className="flex flex-col space-y-4 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow bg-gray-700 border-gray-600 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow bg-gray-700 border-gray-600 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow bg-gray-700 border-gray-600 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
