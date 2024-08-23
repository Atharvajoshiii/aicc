import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate('/')
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleCheckIcon className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank you for registering!
        </h1>
        <p className="mt-4 text-gray-600">You may now close this page.</p>
        <div className="mt-6">
          <Button onClick={handleSubmit}>Close</Button>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
