// src/pages/signUp/MediaUploadForm.jsx
import React, { useState } from "react";
import useJwt from "./../../endpoints/jwt/useJwt";

function MediaUploadForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    full_body_front: null,
    full_body_left_side: null,
    full_body_right_side: null,
    head_shot: null,
    profile_photo: null,
    introduction_video: null,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files && files[0] ? files[0] : null;

    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "full_body_front",
      "full_body_left_side",
      "full_body_right_side",
      "head_shot",
      "profile_photo",
      "introduction_video",
    ];

    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 🔹 Yaha se FormData banayenge — backend ko aise hi chahiye
    const body = new FormData();
    body.append("full_body_front", formData.full_body_front);
    body.append("full_body_left_side", formData.full_body_left_side);
    body.append("full_body_right_side", formData.full_body_right_side);
    body.append("head_shot", formData.head_shot);
    body.append("profile_photo", formData.profile_photo);
    body.append("introduction_video", formData.introduction_video);

    try {
      setIsSubmitting(true);
      setApiError("");

      // 🔥 tumhari method: e = FormData
      const response = await useJwt.modelMediaSet(body);

      console.log("MEDIA UPLOAD API RESPONSE:", response);

      if (onSubmitSuccess) {
        // parent ko API ka data ya kam se kam success notify
        onSubmitSuccess(response?.data || {});
      } else {
        console.log("MEDIA UPLOAD PAYLOAD (FormData sent)");
        alert("Media uploaded successfully (check console & network).");
      }
    } catch (error) {
      console.error("Error while uploading media:", error);
      setApiError(
        error?.response?.data?.message ||
          "Something went wrong while uploading media."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl space-y-6 bg-white"
    >
      <h2 className="text-lg font-semibold tracking-[0.16em] uppercase text-gray-800">
       Media
      </h2>

      <p className="text-xs text-gray-500">
        Please upload clear images and a short introduction video. All fields
        are required.
      </p>

      {apiError && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-200 px-3 py-2 rounded">
          {apiError}
        </p>
      )}

      {/* Full Body Front */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Full Body - Front
          <span className="text-xs text-gray-500 ml-1">
            (clear, full height, facing camera)
          </span>
        </label>
        <input
          type="file"
          name="full_body_front"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.full_body_front && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.full_body_front.name}
          </p>
        )}
        {errors.full_body_front && (
          <p className="mt-1 text-xs text-red-500">
            {errors.full_body_front}
          </p>
        )}
      </div>

      {/* Full Body Left Side */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Full Body - Left Side
          <span className="text-xs text-gray-500 ml-1">
            (profile from left side)
          </span>
        </label>
        <input
          type="file"
          name="full_body_left_side"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.full_body_left_side && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.full_body_left_side.name}
          </p>
        )}
        {errors.full_body_left_side && (
          <p className="mt-1 text-xs text-red-500">
            {errors.full_body_left_side}
          </p>
        )}
      </div>

      {/* Full Body Right Side */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Full Body - Right Side
          <span className="text-xs text-gray-500 ml-1">
            (profile from right side)
          </span>
        </label>
        <input
          type="file"
          name="full_body_right_side"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.full_body_right_side && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.full_body_right_side.name}
          </p>
        )}
        {errors.full_body_right_side && (
          <p className="mt-1 text-xs text-red-500">
            {errors.full_body_right_side}
          </p>
        )}
      </div>

      {/* Head Shot */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Head Shot
          <span className="text-xs text-gray-500 ml-1">
            (close-up, no heavy filters)
          </span>
        </label>
        <input
          type="file"
          name="head_shot"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.head_shot && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.head_shot.name}
          </p>
        )}
        {errors.head_shot && (
          <p className="mt-1 text-xs text-red-500">{errors.head_shot}</p>
        )}
      </div>

      {/* Profile Photo */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Profile Photo
          <span className="text-xs text-gray-500 ml-1">
            (clear face, simple background)
          </span>
        </label>
        <input
          type="file"
          name="profile_photo"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.profile_photo && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.profile_photo.name}
          </p>
        )}
        {errors.profile_photo && (
          <p className="mt-1 text-xs text-red-500">{errors.profile_photo}</p>
        )}
      </div>

      {/* Introduction Video */}
      <div>
        <label className="text-sm font-medium mb-1 text-gray-700 block">
          Introduction Video
          <span className="text-xs text-gray-500 ml-1">
            (short intro, walking & simple pose)
          </span>
        </label>
        <input
          type="file"
          name="introduction_video"
          accept="video/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
        />
        {formData.introduction_video && (
          <p className="mt-1 text-xs text-gray-600">
            Selected: {formData.introduction_video.name}
          </p>
        )}
        {errors.introduction_video && (
          <p className="mt-1 text-xs text-red-500">
            {errors.introduction_video}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full mt-2 py-2 rounded-lg font-semibold tracking-[0.12em] uppercase text-sm bg-black !text-white hover:bg-primary hover:!text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Uploading..." : "Save Media"}
      </button>
    </form>
  );
}

export default MediaUploadForm;
