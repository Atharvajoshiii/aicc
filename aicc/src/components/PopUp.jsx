import React from "react";


const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg max-w-sm w-full p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Error</h3>
        <p className="text-gray-700 dark:text-neutral-300 mt-2">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
