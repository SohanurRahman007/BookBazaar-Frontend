"use client";

export default function BookLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-300 bg-opacity-80 backdrop-blur-md">
      <div className="flex flex-col items-center space-y-6">
        {/* Book Stack Design */}
        <div className="relative w-32 h-40">
          {/* Background books */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-28 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg shadow-lg transform rotate-6"></div>
            <div className="absolute w-20 h-28 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-lg -rotate-6"></div>
          </div>

          {/* Main book with loading animation */}
          <div className="relative z-10 w-24 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-lg shadow-xl border-2 border-pink-500">
              <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-pink-600 to-pink-700 -translate-x-1/2"></div>

              {/* Pages animation */}
              <div className="absolute left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-pink-50 to-pink-100 rounded-r-lg overflow-hidden">
                <div className="absolute inset-0 animate-pageFlip">
                  <div className="h-full w-full bg-gradient-to-r from-pink-100 to-pink-200"></div>
                </div>
              </div>

              {/* Front cover design */}
              <div className="absolute right-2 top-4 w-2 h-8 bg-pink-500 opacity-50 rounded"></div>
              <div className="absolute left-4 top-8 w-6 h-1 bg-pink-600 rounded-full"></div>
              <div className="absolute left-4 top-12 w-8 h-1 bg-pink-600 rounded-full"></div>
              <div className="absolute left-4 top-16 w-4 h-1 bg-pink-600 rounded-full"></div>
            </div>
          </div>

          {/* Floating bookmark */}
          <div className="absolute -right-2 top-4 w-4 h-8 bg-gradient-to-b from-pink-500 to-pink-600 rounded-r-lg animate-bookmark"></div>
        </div>

        {/* Loading Text - Same as before */}
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold text-gray-700 animate-pulse">
            Loading Books...
          </p>
          <p className="text-sm text-gray-500">
            Your next favorite read is on its way!
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pageFlip {
          0%,
          100% {
            transform: translateX(0) rotateY(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translateX(-10%) rotateY(10deg);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-20%) rotateY(20deg);
            opacity: 0.4;
          }
          75% {
            transform: translateX(-10%) rotateY(10deg);
            opacity: 0.6;
          }
        }

        @keyframes bookmark {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-pageFlip {
          animation: pageFlip 3s ease-in-out infinite;
        }

        .animate-bookmark {
          animation: bookmark 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
