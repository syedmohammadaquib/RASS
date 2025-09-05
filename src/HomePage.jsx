import React from 'react';
import { Link } from 'react-router-dom';

// The SVGs can be extracted into their own components for better readability
const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-pink-400"
  >
    <path d="M9 18V5l12-2v13M9 18l12-2" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const FoodIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-400"
  >
    <path d="M2 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="2" y1="22" x2="2" y2="15" />
  </svg>
);

const DressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-teal-400"
  >
    <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

const PhotoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const PrizeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="h-screen max-h-screen overflow-hidden text-white">
      {/* Main Content */}
      <div className="relative h-full flex flex-col">
        {/* Top Navigation */}
        <nav className="p-6 md:p-8 flex justify-between items-center animate-fade-in z-10">
          <div>
            <p className="text-xs sm:text-sm text-gray-300 tracking-widest uppercase">
              UGI Events Presents
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wider -mt-1">
              Rass
            </h2>
          </div>
          <Link
            to="/register"
            className="cta-button text-white font-semibold py-2 px-6 rounded-full text-sm md:text-base"
          >
            Register Now
          </Link>
        </nav>

        {/* Centered Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
          <h1
            className="font-serif text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide animate-fade-in delay-200 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400"
            style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.2)' }}
          >
            RASS 2025
          </h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base md:text-lg font-light text-gray-200 animate-fade-in delay-400">
            Where{' '}
            <span className="font-semibold text-yellow-300">
              Tradition Meets Celebration
            </span>
            . Get ready to twirl in a night of{' '}
            <span className="font-semibold text-pink-400">Rhythmic Bliss!</span>
          </p>
          <div className="mt-8 text-center animate-fade-in delay-600">
            <span className="date-pill text-yellow-300 font-semibold py-3 px-5 sm:px-6 rounded-full text-xs sm:text-base">
              October 12th, 2025 | 7 PM Onwards
            </span>
            <p className="mt-4 text-gray-200 text-sm sm:text-base tracking-wide font-semibold">
              Venue: UGI College Grounds, Prayagraj
            </p>
          </div>
        </main>

        {/* Left Vertical Text Banner */}
        <div className="absolute top-1/2 left-2 sm:left-4 md:left-6 -translate-y-1/2 z-10 animate-fade-in delay-800">
          <div className="vertical-text text-gray-400 text-xs tracking-widest uppercase origin-center transform rotate-180">
            A Night to Remember
          </div>
        </div>

        {/* Right Vertical Text Banner */}
        <div className="absolute top-1/2 right-2 sm:right-4 md:right-6 -translate-y-1/2 z-10 animate-fade-in delay-800">
          <div className="vertical-text text-gray-400 text-xs tracking-widest uppercase origin-center transform rotate-180">
            Only for UGI students
          </div>
        </div>

        {/* Footer with Condensed Info */}
        <footer className="w-full p-4 md:p-6 pb-6 sm:pb-8 text-center z-10">
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-6 backdrop-blur-sm bg-black/10 p-3 sm:p-4 rounded-full animate-fade-in delay-1000">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300" title="Live DJ"><MusicIcon /><span>Live DJ</span></div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300" title="Delicious Food Stalls"><FoodIcon /><span>Food Stalls</span></div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300" title="Dress Code: Ethnic Wear"><DressIcon /><span>Ethnic Wear</span></div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300" title="Themed Photo Booth"><PhotoIcon /><span>Photo Booth</span></div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300" title="Prizes for Best Dancer & Best Dressed"><PrizeIcon /><span>Exciting Prizes</span></div>
          </div>
          <div
            className="mt-4 text-xs text-gray-500 animate-fade-in delay-1200"
            style={{ color: 'white' }}
          >
            DEVELOPED BY{' '}
            <a
              href="https://www.linkedin.com/in/syedmohammadaquib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors font-semibold"
            >
              SYED MOHAMMAD AQUIB
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}