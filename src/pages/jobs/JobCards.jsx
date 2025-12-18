import React from "react";

export default function FeaturedJobs() {
  const jobs = [
    {
      title: "Runway Fashion Model",
      type: "PART-TIME",
      salary: "$300 – $550 / Show",
      company: "Elite Model Agency",
      location: "New York, USA",
      applicants: "25+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Elite_Model_Management_logo.svg",
    },
    {
      title: "Print / Magazine Model",
      type: "FULL-TIME",
      salary: "$4,000 – $7,500 / Month",
      company: "Vogue Talent House",
      location: "Los Angeles, USA",
      applicants: "15+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Vogue_logo.svg/2560px-Vogue_logo.svg.png",
    },
    {
      title: "Commercial Advertisement Model",
      type: "PART-TIME",
      salary: "$500 – $1200 / Project",
      company: "Global Model Casting",
      location: "Miami, USA",
      applicants: "30+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Star_symbol.svg",
    },
    {
      title: "Portfolio Shoot Model",
      type: "FULL-TIME",
      salary: "$3,000 – $6,500 / Month",
      company: "Lens Art Studios",
      location: "Chicago, USA",
      applicants: "10+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Star_symbol.svg",
    },
    {
      title: "Fashion Show Model",
      type: "FULL-TIME",
      salary: "$5,000 – $9,500 / Month",
      company: "Fashion Walk America",
      location: "Houston, USA",
      applicants: "12+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Star_symbol.svg",
    },
    {
      title: "Jewelry Advertisement Model",
      type: "PART-TIME",
      salary: "$400 – $900 / Shoot",
      company: "Diamond Vogue Agency",
      location: "New York, USA",
      applicants: "20+ applicants",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Star_symbol.svg",
    },
  ];

  return (
    <div className="text-center py-12">

      <h2 className="text-3xl md:text-4xl font-serif tracking-[0.35em] text-primary uppercase text-center mb-10">
        Featured Jobs
      </h2>

      <p className="text-gray-500 mb-10">
        Choose jobs from top modeling agencies and apply now.
      </p>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="
              rounded-xl 
              px-6 py-6 
              text-left 
              shadow-sm 
              hover:shadow-md 
              transition 
              bg-gradient-to-b 
              from-pink-200 
              to-white
              border
            "
          >
            <h3 className="text-lg font-semibold mb-1">{job.title}</h3>

            <p className="text-sm mb-4">
              <span className="text-green-600 font-semibold">
                {job.type}
              </span>{" "}
              <span className="text-gray-500">
                Salary: {job.salary}
              </span>
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img src={job.logo} alt="" className="w-7 h-7 rounded-full" />
              <div>
                <p className="font-medium text-gray-800">{job.company}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  📍 {job.location}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">{job.applicants}</p>

            <div className="flex items-center justify-between gap-3">
              <button className="border px-4 py-2 rounded-lg w-1/2 hover:bg-gray-100 text-sm font-medium">
                View details
              </button>
              <button className="border px-4 py-2 rounded-lg w-1/2 hover:bg-gray-100 text-sm font-medium">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
