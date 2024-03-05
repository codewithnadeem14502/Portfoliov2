import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useTheme } from "../utils/ThemeContext";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(); // Adding a ref for the form
  const { isDarkMode } = useTheme(); // Using the theme context to access the current mode

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98nv15r",
        "template_q6l4sd5",
        form.current,
        "MF7u3cZVc24yeTVeZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form fields after successful submission
          setEmail("");
          setMessage("");
          // Display success alert
          window.alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display error alert
          window.alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div
      id="contact"
      className={`pt-10 md:py-16 px-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-screen"
      >
        <h1 className="text-5xl font-bold mb-8">Contact Me</h1>
        <p className="mb-5 text-lg">
          Please contact me directly at{" "}
          <a
            href="mailto:codewithnadeeem@gmail.com"
            className="text-blue-500 mr-2 hover:underline"
          >
            codewithnadeeem@gmail.com
          </a>
          <a className="text-blue-500 mr-2 hover:underline">
            {" "}
            || +91 9398300727
          </a>
          or through this form.
        </p>
        <form
          ref={form} // Assigning the form reference
          className="flex flex-col items-start w-[90%] md:w-[60%] lg:w-[40%]"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full mb-4 p-5 border focus:outline-none rounded-lg ${
              isDarkMode ? "border-gray-600 bg-slate-200" : "border-gray-400"
            }`}
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className={`w-full h-60 mb-4 p-5  rounded-lg border focus:outline-none resize-none ${
              isDarkMode ? "border-gray-600 bg-slate-200" : "border-gray-400 "
            }`}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border ${
              isDarkMode
                ? "border-gray-600 text-white bg-gray-700"
                : "border-slate-800 bg-gradient-to-r from-black via-gray-800 to-slate-900 text-white"
            } p-8 font-medium transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-2xl`}
          >
            Submit <BsFillSendFill className="ml-3 text-3xl" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
