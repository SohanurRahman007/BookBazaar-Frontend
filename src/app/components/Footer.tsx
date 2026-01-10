import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold">About Us</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About BookBazaar
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact BookBazaar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold">
              Use Full Link
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="hover:underline">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold">
              Terms and Conditions
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
