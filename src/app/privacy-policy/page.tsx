"use client";
import React from "react";
import { ShieldCheck, Lock, Eye, Share2, RefreshCw, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information from you when you register on our site or place an order. This includes your name, email address, mailing address, phone number, and payment information.",
      icon: <Eye className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to process transactions, improve our website, and send periodic emails regarding your order or other products and services.",
      icon: <Lock className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "3. Sharing Your Information",
      content:
        "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.",
      icon: <Share2 className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "4. Security of Your Information",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.",
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "5. Changes to Our Privacy Policy",
      content:
        "We may update this privacy policy periodically. We will notify you about significant changes via your primary email address or a prominent notice on our site.",
      icon: <RefreshCw className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
            <ShieldCheck className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At <span className="font-semibold text-red-500">BookKart</span>,
            your privacy is our top priority. Learn how we handle your data with
            transparency and care.
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

          {/* Still have questions? - Updated with Theme Colors */}
          <div className="bg-yellow-500 rounded-2xl p-1 shadow-xl mt-12 overflow-hidden">
            <div className="bg-white m-[2px] rounded-[calc(1rem-2px)] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  Still have questions?
                </h2>
                <p className="text-slate-600 font-medium">
                  Our support team is always here to help you with your privacy
                  concerns.
                </p>
              </div>
              {/* Button Section */}
              <a
                href="mailto:sohanuractive007@gmail.com"
                className="whitespace-nowrap flex items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-md active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Last updated: January 10, 2026 • © BookBazar Inc.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
