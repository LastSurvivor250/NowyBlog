"use client";
import React from "react";
import { X, Download } from "lucide-react";

const Model = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <button>
        <X />
      </button>
      <h1>Download My Free Ebook</h1>
      <p>Want To Learn How To Create Content Effectively ?</p>
      <form>
        <input type="email" placeholder="enter your email" required />
        <button>
          <Download /> Download Link
        </button>
      </form>
    </div>
  );
};

export default Model;
