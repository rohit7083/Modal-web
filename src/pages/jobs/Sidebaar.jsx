// Sidebar.jsx
import React from "react";
import {
  Home,
  Mail,
  CreditCard,
  Folder,
  Settings,
  MessageSquare,
} from "lucide-react";

export default function Sidebar({ setJobModalOpen }) {
  return (
    <div className="w-64 rounded-3xl shadow-lg p-6 flex flex-col justify-between bg-white">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-primary tracking-wide mb-10">
          JobFinder
        </h1>

        {/* Post Job Button */}
        <button
          onClick={() => setJobModalOpen(true)}
          className="
            w-full
            tracking-wide 
            mb-10
            bg-primary
            text-white
            font-semibold
            py-2.5
            rounded-xl
            hover:bg-primary/80
            duration-200
          "
        >
          + Post a New Job
        </button>

        {/* Menus */}
        <ul className="space-y-6 text-gray-500 font-medium">
          <li className="flex items-center gap-3 text-gray-900 font-semibold hover:text-primary duration-200 cursor-pointer">
            <Home size={18} /> Home
          </li>

          <li className="flex items-center gap-3 hover:text-primary duration-200 cursor-pointer">
            <Mail size={18} /> Search Job
          </li>

          <li className="flex items-center gap-3 hover:text-primary duration-200 cursor-pointer">
            <MessageSquare size={18} /> Chat
          </li>

          <li className="flex items-center gap-3 hover:text-primary duration-200 cursor-pointer">
            <Folder size={18} /> Projects
          </li>

          <li className="flex items-center gap-3 hover:text-primary duration-200 cursor-pointer">
            <CreditCard size={18} /> Payments
          </li>

          <li className="flex items-center gap-3 hover:text-primary duration-200 cursor-pointer">
            <Settings size={18} /> Settings
          </li>
        </ul>
      </div>

    </div>
  );
}
