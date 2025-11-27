// src/pages/Models.jsx
import React from "react";
import { useParams } from "react-router-dom";

const modelsData = {
  men: [
    {
      name: "Andre",
      city: "Mumbai",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `6'1"`,
        chest: `39"`,
        waist: `32"`,
        hips: `38.5"`,
        shoe: "45",
        hair: "Brown",
        eyes: "Green",
      },
    },
    
    {
      name: "Caio",
      city: "Bangalore",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'11"`,
        chest: `38"`,
        waist: `30"`,
        hips: `36"`,
        shoe: "43",
        hair: "Brown",
        eyes: "Hazel",
      },
    },
    
    {
      name: "Valmir",
      city: "Pune",
      image:
        "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `6'2"`,
        chest: `40"`,
        waist: `32"`,
        hips: `39"`,
        shoe: "45",
        hair: "Dark Brown",
        eyes: "Brown",
      },
    },
    {
      name: "Arjun",
      city: "Hyderabad",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'11"`,
        chest: `38"`,
        waist: `31"`,
        hips: `37"`,
        shoe: "44",
        hair: "Black",
        eyes: "Brown",
      },
    },
   
    {
      name: "Rehan",
      city: "Jaipur",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'10"`,
        chest: `37"`,
        waist: `30"`,
        hips: `36"`,
        shoe: "43",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Ishaan",
      city: "Surat",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `6'1"`,
        chest: `39"`,
        waist: `32"`,
        hips: `38"`,
        shoe: "45",
        hair: "Brown",
        eyes: "Green",
      },
    },
    {
      name: "Neil",
      city: "Chennai",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'11"`,
        chest: `38"`,
        waist: `31"`,
        hips: `37"`,
        shoe: "44",
        hair: "Dark Brown",
        eyes: "Brown",
      },
    },
  ],

  women: [
    {
      name: "Ava",
      city: "Mumbai",
      image:
        "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'8"`,
        chest: `32"`,
        waist: `24"`,
        hips: `34"`,
        shoe: "38",
        hair: "Brown",
        eyes: "Green",
      },
    },
    {
      name: "Mia",
      city: "Bangalore",
      image:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'7"`,
        chest: `32"`,
        waist: `24"`,
        hips: `35"`,
        shoe: "38",
        hair: "Blonde",
        eyes: "Blue",
      },
    },
    {
      name: "Isabella",
      city: "Hyderabad",
      image:
        "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'10"`,
        chest: `34"`,
        waist: `25"`,
        hips: `36"`,
        shoe: "39",
        hair: "Dark Brown",
        eyes: "Hazel",
      },
    },
    {
      name: "Layla",
      city: "Pune",
      image:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'8"`,
        chest: `32"`,
        waist: `24"`,
        hips: `34"`,
        shoe: "38",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Zara",
      city: "Jaipur",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'9"`,
        chest: `33"`,
        waist: `25"`,
        hips: `35"`,
        shoe: "39",
        hair: "Brown",
        eyes: "Green",
      },
    },
    {
      name: "Hana",
      city: "Kolkata",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'7"`,
        chest: `32"`,
        waist: `24"`,
        hips: `34"`,
        shoe: "38",
        hair: "Dark Brown",
        eyes: "Brown",
      },
    },
    {
      name: "Nora",
      city: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'8"`,
        chest: `33"`,
        waist: `25"`,
        hips: `35"`,
        shoe: "38",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Aisha",
      city: "Surat",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'6"`,
        chest: `32"`,
        waist: `24"`,
        hips: `34"`,
        shoe: "37",
        hair: "Brown",
        eyes: "Hazel",
      },
    },
    {
      name: "Kiara",
      city: "Chennai",
      image:
        "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `5'9"`,
        chest: `34"`,
        waist: `25"`,
        hips: `36"`,
        shoe: "39",
        hair: "Dark Brown",
        eyes: "Brown",
      },
    },
  ],

  kids: [
    {
      name: "Aarav",
      city: "Mumbai",
      image:
        "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'2"`,
        chest: `24"`,
        waist: `22"`,
        hips: `25"`,
        shoe: "32",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Vihaan",
      city: "Delhi",
      image:
        "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'0"`,
        chest: `23"`,
        waist: `21"`,
        hips: `24"`,
        shoe: "31",
        hair: "Brown",
        eyes: "Brown",
      },
    },
    {
      name: "Advika",
      city: "Bangalore",
      image:
        "https://images.pexels.com/photos/1796566/pexels-photo-1796566.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `3'10"`,
        chest: `22"`,
        waist: `20"`,
        hips: `23"`,
        shoe: "30",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Myra",
      city: "Hyderabad",
      image:
        "https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'1"`,
        chest: `23"`,
        waist: `21"`,
        hips: `24"`,
        shoe: "31",
        hair: "Brown",
        eyes: "Hazel",
      },
    },
    {
      name: "Kabir",
      city: "Pune",
      image:
        "https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'3"`,
        chest: `24"`,
        waist: `22"`,
        hips: `25"`,
        shoe: "32",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Anaya",
      city: "Jaipur",
      image:
        "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `3'11"`,
        chest: `22"`,
        waist: `20"`,
        hips: `23"`,
        shoe: "30",
        hair: "Brown",
        eyes: "Brown",
      },
    },
    {
      name: "Reyansh",
      city: "Kolkata",
      image:
        "https://images.pexels.com/photos/1612847/pexels-photo-1612847.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'2"`,
        chest: `23"`,
        waist: `21"`,
        hips: `24"`,
        shoe: "31",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Siya",
      city: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'0"`,
        chest: `22"`,
        waist: `20"`,
        hips: `23"`,
        shoe: "30",
        hair: "Brown",
        eyes: "Hazel",
      },
    },
    {
      name: "Dhruv",
      city: "Surat",
      image:
        "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `4'1"`,
        chest: `23"`,
        waist: `21"`,
        hips: `24"`,
        shoe: "31",
        hair: "Black",
        eyes: "Brown",
      },
    },
    {
      name: "Inaaya",
      city: "Chennai",
      image:
        "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: `3'10"`,
        chest: `22"`,
        waist: `20"`,
        hips: `23"`,
        shoe: "30",
        hair: "Brown",
        eyes: "Brown",
      },
    },
  ],
};

const headingMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
};

function Models() {
  const { type } = useParams(); // men | women | kids
  const currentType = type || "men";
  const models = modelsData[currentType] || modelsData.men;

  return (
    <div className="min-h-screen bg-white mt-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
          {headingMap[currentType] || "Models"}
        </h1>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {models.map((model, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Card image + hover overlay */}
              <div className="relative">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-80 object-cover rounded-2xl transition duration-500 group-hover:scale-[1.02] group-hover:blur-[1px]"
                />

                {/* Overlay like 4th card on hover */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-black/55 opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
                  <div className="text-white text-center px-6">
                    <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                      Height {model.stats.height}
                    </p>

                    <div className="text-xs sm:text-sm space-y-1 leading-relaxed">
                      <p>Chest {model.stats.chest}</p>
                      <p>Waist {model.stats.waist}</p>
                      <p>Hips {model.stats.hips}</p>
                      <p>Shoe Size - {model.stats.shoe}</p>
                      <p>
                        Hair - {model.stats.hair} | Eyes - {model.stats.eyes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name + City */}
              <div className="mt-4">
                <p className="text-sm sm:text-base font-medium">
                  {model.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{model.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Models;