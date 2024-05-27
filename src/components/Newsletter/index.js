import React from "react";
import { X, Download } from "lucide-react";

const Model = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex- justify-center items-center">
      <div className="mt-10 flex-col gap-5 text-white">
        <button className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">Download My Free Ebook</h1>
          <p className="text-3xl font-bold max-w-md text-center">
            Want To Learn How To Create Content Effectively ?
          </p>
          <form>
            <input
              type="email"
              placeholder="enter your email"
              required
              className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full flex items-center justify-center px-5 py-3 font-medium rounded-md bg-black">
              <Download /> Download Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
