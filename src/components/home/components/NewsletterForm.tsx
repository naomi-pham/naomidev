"use client";

import { Montserrat } from "next/font/google";
import { useState, type ChangeEvent, type FormEvent } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const NewsletterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="max-w-sm">
      <p className="mb-4">
        Sign up to receive email updates on my latest posts and coding projects.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full rounded-2xl border border-primary-500 bg-transparent p-4"
          placeholder="Your first name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-primary-500 bg-transparent p-4"
          placeholder="Your email"
        />
        <button
          type="submit"
          className={`w-fit rounded-2xl bg-accent-500 px-4 py-3 text-body-2 font-bold text-white transition duration-300 hover:bg-accent-500/80 focus:outline-none focus:ring focus:ring-accent-400 focus:ring-offset-1 ${montserrat.variable} font-sans`}
        >
          Join now
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
