"use client"

export default function NotFoundPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
        <div className="text-center">
          {/* Animated 404 Number */}
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"></div>
            <h1 className="text-9xl font-bold text-white animate-pulse">
              404
            </h1>
          </div>
  
          {/* Space Illustration */}
          <div className="mt-12 relative">
            <svg
              className="w-64 h-64 mx-auto transform rotate-12"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="100" fill="url(#paint0_radial)"/>
              <path
                d="M75 130L100 110L125 130L112.5 105L135 90H115L100 65L85 90H65L87.5 105L75 130Z"
                fill="#FDE047"
              />
              <circle cx="140" cy="60" r="8" fill="white" className="animate-float"/>
              <circle cx="60" cy="70" r="5" fill="white" className="animate-float delay-100"/>
              <circle cx="160" cy="130" r="6" fill="white" className="animate-float delay-200"/>
              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(100 100) rotate(90) scale(100)"
                >
                  <stop stopColor="#8B5CF6" stopOpacity="0.4"/>
                  <stop offset="1" stopColor="#7C3AED" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
  
          {/* Message */}
          <h2 className="mt-8 text-3xl font-bold text-white">
            Oops! Lost in Space?
          </h2>
          <p className="mt-4 text-lg text-purple-200 max-w-md mx-auto">
          Ups! Diese Seite ist ins Weltall entschwunden. Beam uns zurück zur Startseite!
          </p>
  
          {/* Return Button */}
          <div className="mt-10">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg 
                        transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Beam Me Home
            </a>
          </div>
  
          {/* Grid Background */}
          <div className="absolute inset-0 -z-10 opacity-20 pattern-dots pattern-purple-500 pattern-size-4 pattern-opacity-50" 
               aria-hidden="true"></div>
        </div>
  
        {/* Add custom animations in your globals.css */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .delay-100 {
            animation-delay: 1s;
          }
          .delay-200 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    );
  }