import React from "react";

export default function JobCards({
  searchText,
  location,
  jobType,
  salaryRange,
}) {
  const jobs = [
    {
      company: "Elite Models",
      title: "Runway Model",
      experience: "0 – 3 Years",
      level: "Mid Level",
      logo: "https://cdn-icons-png.flaticon.com/512/3663/3663782.png",
    },
    {
      company: "Bollywood Casting",
      title: "Film Actor",
      experience: "0 – 5 Years",
      level: "Senior Level",
      logo: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    },
    {
      company: "Fashion Studio",
      title: "Fashion Model",
      experience: "0 – 2 Years",
      level: "Entry Level",
      logo: "https://cdn-icons-png.flaticon.com/512/2413/2413178.png",
    },
    {
      company: "Ad Agency",
      title: "TV Commercial Actor",
      experience: "Min 1 Year",
      level: "Mid Level",
      logo: "https://cdn-icons-png.flaticon.com/512/3531/3531833.png",
    },
    {
      company: "OTT Media",
      title: "Web Series Actor",
      experience: "0 – 4 Years",
      level: "Mid Level",
      logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      company: "Print Production House",
      title: "Magazine Model",
      experience: "0 – 3 Years",
      level: "Entry Level",
      logo: "https://cdn-icons-png.flaticon.com/512/3218/3218543.png",
    },
    {
      company: "Music Video Studio",
      title: "Music Video Actor",
      experience: "0 – 1 Year",
      level: "Junior Level",
      logo: "https://cdn-icons-png.flaticon.com/512/1995/1995390.png",
    },
    {
      company: "Reality Show Team",
      title: "Reality Show Performer",
      experience: "Min 1 Year",
      level: "Mid Level",
      logo: "https://cdn-icons-png.flaticon.com/512/2430/2430286.png",
    },
  ];

  const filtered = jobs.filter((job) => {
    const matchSearch =
      searchText === "" ||
      job.title.toLowerCase().includes(searchText.toLowerCase()) ||
      job.company.toLowerCase().includes(searchText.toLowerCase());

    const matchJobType =
      jobType === "" ||
      job.level.toLowerCase().includes(jobType.toLowerCase());

    return matchSearch && matchJobType;
  });

  return (
    <div className="grid grid-cols-4 gap-6 m-6">
      {filtered.map((job, index) => (
        <div
          key={index}
          className="
            rounded-3xl p-6 cursor-pointer duration-200 hover:shadow-xl 
            bg-gradient-to-r from-white via-primary/10 to-white shadow-md
          "
        >
          <img src={job.logo} className="w-12 h-12 mb-3 mx-auto" />
          <h2 className="font-bold text-gray-900 text-lg text-center whitespace-nowrap">
            {job.title}
          </h2>
          <p className="text-gray-500 text-sm mt-1 mb-4 text-center leading-relaxed">
            Work with leading studios, fashion brands and casting companies.
          </p>
          <div className="flex justify-between text-gray-500 text-sm">
            <span className="whitespace-nowrap">{job.company}</span>
            <span className="whitespace-nowrap">{job.experience}</span>
          </div>
          <p className="text-primary mt-3 font-semibold text-sm whitespace-nowrap">
            {job.level}
          </p>
        </div>
      ))}
    </div>
  );
}
