import React from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send subscription request to backend or API
  };

  return (
    <div className="bg-slate-300 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row"
        >
          <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your Name"
              className={`w-full py-2 px-4 bg-white border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded shadow-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="w-full sm:w-2/3">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Your Email"
              className={`w-full py-2 px-4 bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded shadow-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full btn sm:w-auto py-2 px-6 mt-4 sm:mt-0 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
