// src/pages/login/Login.jsx
import React, { useState } from "react";
import useJwt from "../../endpoints/jwt/useJwt"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitButton, setSubmitButton] = useState("Login");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    // same pattern jaisa signup me use kiya hai
    if (/^[A-Za-z0-9@.]*$/.test(value)) {
      setFormData((prev) => ({ ...prev, email: value }));
      setErrors((prev) => ({ ...prev, email: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email:
          "Only alphabets, numbers, @ and . are allowed in Email. Other characters are not allowed.",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, password: value }));
    setErrors((prev) => ({ ...prev, password: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    setSubmitButton("Logging in...");
    debugger
const response = useJwt.login({
      email: formData.email,
      password: formData.password,
    });
    debugger
    // Yaha aap backend API call kar sakte ho (JSON body ke sath)
    // console.log("Login form submitted with data:", {
    //   email: formData.email,
    //   password: formData.password,
    // });

    // Demo ke liye alert
    alert("Login request submitted!");

    // Optional: reset form
    setFormData({
      email: "",
      password: "",
    });
    setErrors({});
    setSubmitButton("Login");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 mx-auto">
      {/* TITLE */}
      <h2 className="text-xl font-semibold tracking-[0.12em] uppercase text-center">
        Login
      </h2>

      {/* Email */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleEmailChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password}</p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="relative w-full mt-2 py-2 rounded-lg font-semibold tracking-[0.12em] uppercase text-sm bg-black !text-white hover:bg-primary hover:!text-white transition"
      >
        {submitButton}
      </button>
    </form>
  );
}

export default Login;
