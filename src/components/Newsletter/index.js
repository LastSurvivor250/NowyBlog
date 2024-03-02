"use client";
// use client
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import Modal from "react-modal"; // Import a modal library like react-modal
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import close icon

// Define the modal styles with adjustments
const modalStyles = {
  position: "fixed",
  top: 50, // Adjust vertical position as needed
  left: 50, // Adjust horizontal position as needed
  transform: "translate(-50%, -50%)", // Center the modal
  width: "66.66%", // Set width to 2/3 of viewport
  maxWidth: 400, // Set a maximum width for smaller screens
  height: 400, // Set a fixed height
  display: "flex",
  flexDirection: "column", // Arrange content vertically
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent", // Remove background color
  padding: "2rem", // Add padding around content
  borderRadius: "10px", // Add rounded corners
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add shadow
  zIndex: 9999,
};

const subscribeButtonStyle = {
  display: "block", // Make it a block element for centering
  margin: "1rem auto", // Add margin for spacing and centering
  padding: "1rem 2rem", // Add padding to the button
  backgroundColor: "indigo-500", // Set button color
  color: "white", // Set button text color
  fontSize: "16px", // Adjust button font size
  fontWeight: "bold", // Set button font weight
  borderRadius: "5px", // Add rounded corners to the button
  border: "none", // Remove border from the button
  cursor: "pointer", // Set cursor to pointer on hover
};

const closeIconStyles = {
  position: "absolute",
  top: 20, // Adjust position as needed
  right: 20, // Adjust position as needed
  cursor: "pointer",
  color: "white",
  fontSize: "2rem",
};

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Show on every reload (remove for first-time logic)

  useEffect(() => {
    // Optional: Remove this if you want to show on every reload
    // if (localStorage.getItem("newsletterShown") === null) {
    //   setIsOpen(true);
    //   localStorage.setItem("newsletterShown", true); // Mark the modal as shown
    // }
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
      <div className="flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 z-999 p-8 rounded-xl shadow-md text-white">
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
            // Apply the subscribeButtonStyle here:
            style={subscribeButtonStyle}
          />
        </form>
        <FontAwesomeIcon
          icon={faTimes}
          style={closeIconStyles}
          onClick={closeModal}
        />{" "}
        {/* Close icon */}
      </div>
    </Modal>
  );
};

export default NewsletterPopup;
