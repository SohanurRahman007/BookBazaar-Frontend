import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-white border-b sticky z-50 top-0">
      {/* desktop header */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/web-logo.png"
            alt="Web Logo"
            width={450}
            height={100}
            className="h-15 w-auto"
          />
        </Link>
        <div className="flex flex-1 items-center justify-center px-4 max-w-xl">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Book Name | Author| Subject | Publisher"
              className="w-full pr-10"
              value=""
              // onChange={() => {}}
            />
            <Button
              size="icon"
              variant={"ghost"}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button
              variant="secondary"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
            >
              Sell Used Book
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
