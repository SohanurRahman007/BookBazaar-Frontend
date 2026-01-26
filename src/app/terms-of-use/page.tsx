"use client";
import React from "react";
import {
  Scale,
  UserCheck,
  FileText,
  Mail,
  History,
  BookOpen,
} from "lucide-react";

const TermsOfUse = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing this website, you accept these terms and conditions in full. If you disagree with any part of these terms, you must not use our website.",
      icon: <UserCheck className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "2. User Responsibilities",
      content:
        "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.",
      icon: <Scale className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "3. Selling Books",
      content:
        "When selling books on BookKart, you agree to provide accurate and complete information about the books you are listing, including condition and price.",
      icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "4. Changes to Terms",
      content:
        "We may revise these terms from time to time. The revised terms will apply to the use of our website from the date of publication on this page.",
      icon: <History className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section hare*/}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
            <FileText className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-red-500">BookKart</span>! These
            rules ensure a fair and safe experience for all our readers and
            sellers.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-yellow-50 rounded-lg">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-red-500 transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section - Aligned in One Line */}
          <div className="bg-yellow-500 rounded-2xl p-1 shadow-lg mt-12 overflow-hidden">
            <div className="bg-white m-[1px] rounded-[calc(1rem-1px)] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Text Section */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex p-3 bg-yellow-100 rounded-full">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Still have questions?
                  </h2>
                  <p className="text-slate-500 text-sm hidden md:block">
                    We are here to clarify any terms you may not understand.
                  </p>
                </div>
              </div>

              {/* Button Section */}
              <a
                href="mailto:sohanuractive007@gmail.com"
                className="whitespace-nowrap flex items-center gap-2 bg-red-500 text-white px-10 py-3 rounded-xl font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-md active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Last updated: {new Date().toLocaleDateString()} • © BookBazar Inc.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
