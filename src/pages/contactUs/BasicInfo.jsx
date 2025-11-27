import React from "react";

function BasicInfo() {
  return (
    <section className="w-full bg-white py-16 my-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-12">

        {/* Left big title */}
        <div className="md:w-1/2">
          {/* <h2 className="text-4xl md:text-6xl font-serif leading-tight tracking-wide text-[#222]">
            CONTACT <br />
            INFORMATION
          </h2> */}
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-pink-500 uppercase mb-10">
             CONTACT <br />   INFORMATION
          </h2>

        </div>

        {/* Right side info */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-16 text-sm md:text-base">

          {/* Email block */}
          <div>
            <p className="uppercase tracking-wide text-gray-600 mb-2">
              Email Address:
            </p>
            <p className="text-gray-800">
              info@drakegirl.com
            </p>
          </div>

          {/* Open hours block */}
          <div>
            <p className="uppercase tracking-wide text-gray-600 mb-2">
              Open:
            </p>
            <p className="text-gray-700">
              Monday – Sunday,
              <br />
              9am – 7pm EST
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
