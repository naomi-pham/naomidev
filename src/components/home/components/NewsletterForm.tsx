"use client";

import { Montserrat } from "next/font/google";
import { useState, type ChangeEvent, type FormEvent } from "react";
import CustomButton from "~/components/common/buttonOrLink/CustomButton";
import { type INewsletterFom } from "~/constants/interfaces";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const NewsletterForm = () => {
  const [formData, setFormData] = useState<INewsletterFom>({
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
        <CustomButton label="Join now" type="submit" />
      </form>
    </div>
  );
};

export default NewsletterForm;
