import { books } from "@/lib/constant";
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
                <div className="flex transition-transform duration-300 else-in-out"></div>
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
