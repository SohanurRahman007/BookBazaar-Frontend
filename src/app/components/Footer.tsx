import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
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
                <Link href="/terms-of-use" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold">
              Stay Connected
            </h3>
            <div className="mb-4 flex space-x-2">
              <Link
                href="https://www.facebook.com/SohanurRahman0007"
                target="_blank"
              >
                <Facebook className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sohanurrahman007/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
              <Link href="https://github.com/SohanurRahman007" target="_blank">
                <Github className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/sohanuractive007"
                target="_blank"
              >
                <Instagram className="w-6 h-6 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
