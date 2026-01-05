"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { profile } from "console";
import {
  ChevronRight,
  Heart,
  Lock,
  LogOut,
  Package,
  PiggyBank,
  Search,
  ShoppingCart,
  User,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const user = {
    profilePicture: "",
    name: "",
    email: "",
  };

  const userPlaceholder = "";

  const handleLoginClick = () => {};
  const handleProtectionNavigation = (href) => {
    console.log(href);
  };

  const handleLogout = () => {};

  const menuItems = [
    ...(user && user
      ? [
          {
            href: "/account/profile",

            content: (
              <div className="flex space-x-4 p-2 border-b items-center">
                <Avatar className="h-12 w-12 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage alt="user_image"></AvatarImage>
                  ) : (
                    <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-md">{user.name}</span>
                  <span className=" text-sm text-gray-500">{user.email}</span>
                </div>
              </div>
            ),
          },
        ]
      : [
          {
            icon: <Lock className=" h-5 w-5" />,
            label: "Login / Sign up",
            onclick: handleLoginClick,
          },
        ]),
    {
      icon: <User className=" h-5 w-5" />,
      label: "My Profile",
      onclick: () => handleProtectionNavigation("/account/profile"),
    },
    {
      icon: <Package className=" h-5 w-5" />,
      label: "My Orders",
      onclick: () => handleProtectionNavigation("/account/orders"),
    },
    {
      icon: <PiggyBank className=" h-5 w-5" />,
      label: "My Selling Orders",
      onclick: () => handleProtectionNavigation("/account/selling-products"),
    },
    {
      icon: <ShoppingCart className=" h-5 w-5" />,
      label: "My Cart",
      onclick: () => handleProtectionNavigation("/checkout/cart"),
    },
    {
      icon: <Heart className=" h-5 w-5" />,
      label: "My Wishlist",
      onclick: () => handleProtectionNavigation("/account/wishlist"),
    },
    {
      icon: <User2 className=" h-5 w-5" />,
      label: "About Us",
      href: "/about-us",
    },
    {
      icon: <User2 className=" h-5 w-5" />,
      label: "Terms & use",
      href: "/terms-use",
    },
    {
      icon: <User2 className=" h-5 w-5" />,
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      icon: <User2 className=" h-5 w-5" />,
      label: "Help & Support",
      href: "/how-it-works",
    },
    ...(user && [
      {
        icon: <LogOut className=" h-5 w-5" />,
        label: "Logout",
        onclick: handleLogout,
      },
    ]),
  ];

  const MenuItems = ({ className = "" }) => {
    return (
      <div className={className}>
        {menuItems.map((item, index) => {
          return item.href ? (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-200 rounded-xl"
              onClick={() => setDropdownOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.content && (
                <div className="mt-1 w-full">{item.content}</div>
              )}
              <ChevronRight className="w-4 h-4 ml-auto" />
            </Link>
          ) : (
            <Button
              key={index}
              variant="ghost"
              className="flex w-full justify-start items-center gap-3 px-4 py-3 text-sm hover:bg-gray-200 rounded-xl"
              onClick={item.onclick}
            >
              {item.icon}
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 ml-auto" />
            </Button>
          );
        })}
      </div>
    );
  };

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
          <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Avatar className="h-8 w-8 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage alt="user_image"></AvatarImage>
                  ) : userPlaceholder ? (
                    <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  ) : (
                    <User className="ml-2 mt-2" />
                  )}
                </Avatar>
                My Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <MenuItems />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
