"use client";

import { Card, CardContent } from "@/components/ui/card";
import { books } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const NewBooks = () => {
  const [currentBookSlide, setCurrentBookSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBookSlide((prevImage) => (prevImage + 1) % 3);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentBookSlide((prev) => (prev + 1 + 3) % 3);
  };

  const nextSlide = () => {
    setCurrentBookSlide((prev) => (prev + 1) % 3);
  };

  const calculateDiscountPrice = (
    price: number,
    finalPrice: number
  ): number => {
    if (price > finalPrice && price > 0) {
      return Math.round(((price - finalPrice) / price) * 100);
    }
    return 0;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center">Newly Added Books </h3>
        <div className="relative ">
          {books.length > 0 ? (
            <>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentBookSlide * 100}%)`,
                  }}
                >
                  {[1, 2, 3].map((slideIndex) => (
                    <div key={slideIndex} className="w-full flex-none">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {books
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((book) => (
                            <Card key={book._id} className="relative">
                              <CardContent className="p-4">
                                <Link href={`/books/${book._id}`}>
                                  <div className="relative">
                                    <Image
                                      src={book.images[0]}
                                      alt={book.title}
                                      width={200}
                                      height={300}
                                      className="mb-4 h-[200px] w-full object-cover rounded-md"
                                    />
                                  </div>
                                </Link>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};
