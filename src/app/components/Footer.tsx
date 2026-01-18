import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Facebook,
  Github,
  HeadphoneOff,
  Instagram,
  Linkedin,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                  How it Works?
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
        {/* featured in the footer */}
        <>
          {/* Top Divider */}
          <Separator className="my-4 " />

          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex item-center gap-4 rounded-xl p-6">
                  <div className="rounded-full p-3">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500">
                      Secure Transactions
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Your transactions are protected with end-to-end
                      encryption.
                    </p>
                  </div>
                </div>
                {/* BookBazar Trust */}
                <div className="flex item-center gap-4 rounded-xl p-6">
                  <div className="rounded-full p-3">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500">
                      BookBazar Trust
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Trusted by thousands of users worldwide for safe buying
                      and selling.
                    </p>
                  </div>
                </div>
                {/* customer support section */}
                <div className="flex item-center gap-4 rounded-xl p-6">
                  <div className="rounded-full p-3">
                    <HeadphoneOff className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-500">
                      Customer Support
                    </h4>
                    <p className="text-gray-400 text-sm">
                      24/7 support to assist you with any questions or issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Divider */}
          <Separator className="my-4" />
        </>
        <div className="text-center text-md mt-4">
          <div className="flex gap-2 items-center justify-center mb-4">
            <Image
              src="/icons/visa.svg"
              alt="Visa"
              width={50}
              height={30}
              className="brightness-20 filter invert"
            />
            <Image
              src="/icons/paytm.svg"
              alt="Paytm"
              width={50}
              height={30}
              className="brightness-20 filter invert"
            />
            <Image
              src="/icons/upi.svg"
              alt="Visa"
              width={50}
              height={30}
              className="brightness-20 filter invert"
            />
          </div>
          <h3>
            &copy; {new Date().getFullYear()} BookBazar. All rights reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
