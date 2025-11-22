export default function ProductPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#333333] dark:text-gray-300">
      <div className="relative w-full">
        {/* TopNavBar */}
        <header className="sticky top-0 z-20 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 py-3">
              <div className="flex items-center gap-4">
                <div className="size-6 text-[#333333] dark:text-gray-300">
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
              <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                <nav className="flex items-center gap-9">
                  <a className="text-sm font-medium leading-normal" href="#">
                    Shop
                  </a>
                  <a className="text-sm font-medium leading-normal" href="#">
                    Our Story
                  </a>
                  <a className="text-sm font-medium leading-normal" href="#">
                    Journal
                  </a>
                </nav>
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-black/5 dark:bg-white/10 text-[#333333] dark:text-gray-300">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-black/5 dark:bg-white/10 text-[#333333] dark:text-gray-300">
                    <span className="material-symbols-outlined">person</span>
                  </button>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-black/5 dark:bg-white/10 text-[#333333] dark:text-gray-300">
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 pb-8">
              <a
                className="text-[#a17c45] dark:text-primary/80 text-sm font-medium leading-normal"
                href="#"
              >
                Home
              </a>
              <span className="text-[#a17c45] dark:text-primary/80 text-sm font-medium leading-normal">
                /
              </span>
              <a
                className="text-[#a17c45] dark:text-primary/80 text-sm font-medium leading-normal"
                href="#"
              >
                Shop
              </a>
              <span className="text-[#a17c45] dark:text-primary/80 text-sm font-medium leading-normal">
                /
              </span>
              <span className="text-[#333333] dark:text-gray-300 text-sm font-medium leading-normal">
                The Artisan Vase
              </span>
            </div>
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)] py-16">
              <div className="flex flex-col justify-center">
                {/* HeadlineText (Maker's Quote) */}
                <h1 className="text-[#333333] dark:text-gray-300 tracking-tight text-[32px] font-bold leading-tight text-left pb-3 pt-6">
                  "We don’t just build objects; we compose stories from honest
                  materials, shaped by patient hands."
                </h1>
                {/* MetaText */}
                <p className="text-[#a17c45] dark:text-primary/80 text-sm font-normal leading-normal pb-12 pt-1">
                  — A. Chen, Head of Production
                </p>
                <div className="flex flex-col items-center text-center text-[#a17c45] dark:text-primary/80">
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                  <span className="text-xs font-medium">
                    Scroll to Deconstruct
                  </span>
                </div>
              </div>
              <div>
                <img
                  className="w-full h-auto object-contain rounded-lg max-h-[70vh]"
                  alt="A minimalist, tall ceramic vase with a matte white finish, sitting on a plain surface against a neutral background."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqAgZlx2sDnJhNsO99ual5Fx_zVSesk8JbW1o1lJxcZUZTxnxRZ4RuShAscA18Jjsuder91UUNPMcttd3N7-AnpngM8CJspWv7NqICksqNDPg0Nu7iMsM78sm3xyDPoPy4Xcvv-LlRG3_mvyYbBJR7drDZCddEnWafuVLBzsFac0NYUJFQRdN3TiZElhSg-vUKzV8BB0-Y9ygSPABGJD4O9Bkx8YzJ6DGQmXNWF9Sg3huLQiapPXCQbc5O5viGhxhcP_XFjgp98tI5"
                />
              </div>
            </section>
            {/* Section 1: Material Details */}
            <section className="py-24">
              {/* SectionHeader */}
              <h2 className="text-[#333333] dark:text-gray-300 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
                Raw & Responsible
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-black/5 dark:bg-white/5 rounded-lg">
                  <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                    eco
                  </span>
                  <h3 className="text-lg font-bold mb-2">Stoneware Clay</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Locally sourced from the foothills of the Sierra Nevada,
                    ensuring a low carbon footprint and supporting regional
                    artisans.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-black/5 dark:bg-white/5 rounded-lg">
                  <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                    public
                  </span>
                  <h3 className="text-lg font-bold mb-2">
                    Sourced from California
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our commitment to domestic sourcing reduces transportation
                    emissions and strengthens local economies.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-black/5 dark:bg-white/5 rounded-lg">
                  <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                    verified
                  </span>
                  <h3 className="text-lg font-bold mb-2">Lead-Free Glaze</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Finished with a custom-formulated, non-toxic glaze that is
                    food-safe and environmentally friendly.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 2: Craft */}
            <section className="relative min-h-[60vh] flex items-center justify-center my-24 rounded-xl overflow-hidden">
              <video
                autoPlay
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.pixabay.com/video/2023/04/03/154145-813589115_large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="relative z-20 text-center text-white p-8 max-w-2xl">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                  Made by Hand, with Intention
                </h2>
                <p>
                  Each vase is wheel-thrown, trimmed, and glazed by master
                  potters in our Northern California studio. The process,
                  spanning over seven days, ensures every piece is unique and
                  imbued with the artisan's touch.
                </p>
              </div>
            </section>
            {/* Section 3: Pricing Breakdown */}
            <section className="py-24">
              <h2 className="text-[#333333] dark:text-gray-300 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-12 text-center">
                Transparently Priced
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                  We believe in honest pricing. Here's a full breakdown of what
                  goes into the cost of your Artisan Vase.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-right font-medium">
                      Materials
                    </span>
                    <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-6">
                      <div
                        className="bg-primary/30 dark:bg-primary/50 h-6 rounded-full text-right pr-2 text-sm text-[#333333] dark:text-white"
                        style={{ width: "25%" }}
                      >
                        $45
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-right font-medium">
                      Craftsmanship
                    </span>
                    <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-6">
                      <div
                        className="bg-primary/50 dark:bg-primary/70 h-6 rounded-full text-right pr-2 text-sm text-[#333333] dark:text-white"
                        style={{ width: "40%" }}
                      >
                        $72
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-right font-medium">
                      Logistics
                    </span>
                    <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-6">
                      <div
                        className="bg-primary/20 dark:bg-primary/40 h-6 rounded-full text-right pr-2 text-sm text-[#333333] dark:text-white"
                        style={{ width: "15%" }}
                      >
                        $27
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-right font-medium">
                      Our Margin
                    </span>
                    <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-6">
                      <div
                        className="bg-primary/40 dark:bg-primary/60 h-6 rounded-full text-right pr-2 text-sm text-[#333333] dark:text-white"
                        style={{ width: "20%" }}
                      >
                        $36
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-8">
                  <p className="text-lg">
                    Total Price:{" "}
                    <span className="font-bold text-2xl">$180</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* Sticky Buy Bar */}
        <div className="sticky bottom-0 z-20 w-full mt-16">
          <div className="bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-t border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#333333] dark:text-gray-300">
                    The Artisan Vase
                  </h3>
                  <p className="text-md text-[#333333] dark:text-gray-300">
                    $180.00
                  </p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
