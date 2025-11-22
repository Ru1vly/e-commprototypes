"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#333333] dark:text-[#f8f7f5]">
      <div className="relative min-h-screen">
        {/* Top Navigation Bar */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap p-6 transition-colors duration-300 ${
            headerVisible
              ? "bg-background-light dark:bg-background-dark shadow-md text-inherit"
              : "text-white"
          }`}
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-inherit">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                Slow Design Co.
              </h2>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-9">
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Our Process
              </a>
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Materials
              </a>
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Makers
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Shop
            </a>
            <div className="group relative">
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-inherit transition-colors hover:bg-primary/20">
                <span className="material-symbols-outlined text-2xl">
                  search
                </span>
              </button>
              {/* Search Modal */}
              <div className="search-modal invisible absolute top-full right-0 mt-4 w-[560px] opacity-0 transform -translate-y-4 rounded-xl bg-background-light dark:bg-background-dark shadow-2xl transition-all duration-300 ease-in-out group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                <div className="p-6">
                  <label className="flex flex-col min-w-40 h-14 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20">
                      <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="Find parts, materials, or project specs..."
                      />
                    </div>
                  </label>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 px-2 mb-2">
                      Process Journals
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <a
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                          href="#"
                        >
                          The Journey of Oak: From Forest to Table
                        </a>
                      </li>
                      <li>
                        <a
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                          href="#"
                        >
                          Ceramic Glazing: A Study in Patience
                        </a>
                      </li>
                      <li>
                        <a
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                          href="#"
                        >
                          Hand-weaving Linen: The Stories We Tell
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-inherit transition-colors hover:bg-primary/20">
              <span className="material-symbols-outlined text-2xl">
                shopping_cart
              </span>
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <main className="w-full">
          <div className="relative h-screen w-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAV-l4inz4MzzWWVlnvfTegjf96rXFVVqsltsZvrNiXBr6WO9NCmIww83FavV6Kq-d8C5wWvdEYD9VpSHA7v9LO2g8b_zIuOnVY0aSOUhxeooggZANWuwbAla_TdOJlE2fe5tOI7tZH29DvtiOw7ewgWvTK4jq1VseAnroxuXdTudyT2_ik3C31QNpajxs7FfP5pjmIXwEEmGjclAlOcwTwygEEuKGAMCDZu7eEUzQM6I_fd-lfi8OYQO94oyAfRkgky0iNtpc6uQZ")',
              }}
            ></div>
            <div className="relative z-10 flex h-full items-center justify-center p-4">
              <div className="flex flex-col gap-6 text-center text-white max-w-3xl">
                <h1 className="text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                  Deliberate Craftsmanship, Told Transparently
                </h1>
                <h2 className="text-base font-normal leading-normal md:text-lg">
                  Explore the story behind each piece, from the raw materials to
                  the hands that shaped them.
                </h2>
                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Explore Our Process</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-background-light/90 dark:bg-background-dark/80 text-[#333333] dark:text-[#f8f7f5] text-base font-bold leading-normal tracking-[0.015em] hover:bg-white dark:hover:bg-background-dark transition-colors">
                    <span className="truncate">Shop Collections</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Placeholder for scrollable content */}
        <div className="h-screen bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-5xl py-24 px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">The Space Below</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              This area is a placeholder to demonstrate the header's behavior
              on scroll. As you scroll down, the transparent header will become
              solid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
