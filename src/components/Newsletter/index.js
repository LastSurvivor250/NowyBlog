// Use necessary imports
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import Modal from "react-modal"; // Import a modal library like react-modal

// Define the modal styles
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the modal visibility

  useEffect(() => {
    // Show the modal only on the first page load
    if (localStorage.getItem("newsletterShown") === null) {
      setIsOpen(true);
      localStorage.setItem("newsletterShown", true); // Mark the modal as shown
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data); // Replace with actual submission logic

  const closeModal = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
      <div className="flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 p-8 rounded-xl shadow-md text-white">
        <h3 className="text-center font-medium text-2xl mb-4">
          Subscribe to our newsletter!
        </h3>
        <p className="text-center text-base mb-6">
          Stay up-to-date with the latest news, updates, and resources.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true, maxLength: 80 })}
            className="w-full bg-gray-100 pl-2 sm:pl-0 text-gray-700 focus:border-sky-500 focus:ring-0 border-0 border-b mr-2 pb-1"
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded px-3 sm:px-5 py-1"
          />
        </form>
      </div>
    </Modal>
  );
};

export default NewsletterPopup;
