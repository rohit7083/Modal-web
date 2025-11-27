import React from "react";
import AskImage from "../../assets/contactUs/60-appointment-1.webp"; // <- apni image ka path lagao

function AskQuestionSection() {
  return (
    <section className="w-full bg-white py-16 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={AskImage}
            alt="Ask a question"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* <h2 className="text-4xl lg:text-5xl font-serif tracking-wide mb-4">
            ASK A QUESTION
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-pink-500 uppercase mb-10">
              ASK A QUESTION
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl">
            Down to earth, thorough instruction in yoga and mindfulness for the
            benefit of all bodies.
          </p>

          <form className="space-y-8">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-3 w-full border-b border-gray-200 focus:outline-none focus:border-gray-800 pb-2"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500">
                  E-mail
                </label>
                <input
                  type="email"
                  className="mt-3 w-full border-b border-gray-200 focus:outline-none focus:border-gray-800 pb-2"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-wide text-gray-500">
                Your message
              </label>
              <textarea
                rows="4"
                className="mt-3 w-full border-b border-gray-200 focus:outline-none focus:border-gray-800 pb-2 resize-none"
              />
            </div>

            {/* Button */}
            <div className="pt-4">
             <button
              className="btn-drake-outline mt-3 lg:mt-0"
                type="submit"
                
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AskQuestionSection;
