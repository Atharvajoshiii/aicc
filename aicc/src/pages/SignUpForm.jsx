import React, { useState } from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Popup from "../components/PopUp";

export function SignupFormDemo() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [errors, setErrors] = useState({}); // Validation errors
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state

  const navigate = useNavigate();

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!phone) errors.phone = "Phone number is required";
    if (!year) errors.year = "Year is required";
    if (!branch) errors.branch = "Branch is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setLoading(true); // Show loader

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      year,
      branch,
    };

    try {
      const response = await fetch('https://aicc-3.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      navigate('/thankyou');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setErrorMessage(error.message); // Set the error message to display in the popup
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-zinc-800">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to AICC
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Join the best and official coding club of GHRCEM Pune
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Enter your name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Enter last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              placeholder="888888888"
              type="text" // Use 'text' instead of 'phone' for better compatibility
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              placeholder="First Year"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="branch">Branch</Label>
            <Input
              id="branch"
              placeholder="CSE-AI"
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            {errors.branch && <p className="text-red-500 text-sm">{errors.branch}</p>}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? <div className="flex justify-center items-center"> <Loader /> </div>: "Register →"} {/* Show Loader if loading */}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>

      {/* Display Popup if there is an error */}
      {errorMessage && <Popup message={errorMessage} onClose={() => setErrorMessage(null)} />}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("w-full flex flex-col space-y-1", className)}>
      {children}
    </div>
  );
};
