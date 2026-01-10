"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { books } from "@/lib/constant";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";
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
                                    {calculateDiscountPrice(
                                      book.price,
                                      book.finalPrice
                                    ) > 0 && (
                                      <span className="absolute top-0 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {calculateDiscountPrice(
                                          book.price,
                                          book.finalPrice
                                        )}
                                        % OFF
                                      </span>
                                    )}
                                  </div>
                                  <h1 className="mb-2 line-clamp-2 text-sm font-semibold">
                                    {book.title}
                                  </h1>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-lg font-bold">
                                        ৳{book.finalPrice}
                                      </span>
                                      {book.price && (
                                        <span className="text-sm text-gray-400 line-through decoration-gray-500">
                                          ৳{book.price}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-zinc-400">
                                      {book.condition}
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <Button className="flex float-end mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 to-yellow-700">
                                      Buy Now
                                    </Button>
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
              {/* scroll buttons */}
              <Button
                onClick={prevSlide}
                className="group absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-yellow-50 transition-colors"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-800 group-hover:text-red-500 transition-colors" />
              </Button>

              <Button
                onClick={nextSlide}
                className="group absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-yellow-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-800 group-hover:text-red-500 transition-colors" />
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};
