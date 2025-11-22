export default function CartPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex min-h-screen w-full flex-col">
        <header className="sticky top-0 z-10 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <svg
                  className="h-6 w-6 text-text-light dark:text-text-dark"
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
                <h2 className="text-xl font-bold tracking-wide">
                  Slow Design Co.
                </h2>
              </div>
              <div className="flex items-center gap-8">
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Continue Shopping
                </a>
                <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-12 md:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 md:mb-16 text-center">
              <h1 className="font-serif text-4xl font-bold text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
                Your Project Manifest
              </h1>
              <p className="mt-4 text-base text-subtle-light dark:text-subtle-dark md:text-lg">
                Review your curated collection of handcrafted items.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="space-y-8 lg:col-span-2">
                {/* Item 1 */}
                <div className="flex flex-col sm:flex-row gap-6 border-b border-border-light dark:border-border-dark pb-8">
                  <div className="flex items-start gap-4 flex-shrink-0">
                    <div className="relative">
                      <div
                        className="h-28 w-28 bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8OxFZ2-MhlrXjbonEmQ_wL2uoogVVOFcyDVTU13ZfcgUv12NhK42ZknMCDtyNAbBJlJp2DDa7vcWVhmG0kXmqzNeTLHEaj_CJAZQ3E6_nKjMq3_J3UOUGVVMout7tPq0dK7qppLYs2lAeBcEe67WhdeHmvaG-ykrO10M8rkDpI9FoaxS23x3Ep5Lsah0sHiXnfQC3DKiq4__Xq8y9jNJqqYs0TWEk8KatD8CzWbs27uxY6NlC389klvt7l_cLHBNwpKjEtpNxGpo1')",
                        }}
                      ></div>
                      <div
                        className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full border-2 border-background-light dark:border-background-dark bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDW3CbJolSAeuRyJKdmBnExpdxmhH24gWSiuxSs5eIgqIvKBCfRiGNbzMpIKJ9nqCEfJpXAw0yVz4UFcBJ3QtyFgXQcJEhsR2SeRCRRCuutibQuHpXWBojcIIapTuejYgqSWE2j-9RzTq9Pxl4WEekQ1qIosmGIGps198tWOhv2-HjejVodh7OCfVXq7Zj_M8Dtumai6_wlm4gTCKLNs7ClviTyBXvyZPVJ5ZCvzix7bPthYA330UauD-bgi01bdRC_38dKfc-C1OfO')",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-bold">The Artisan Wallet</p>
                    <p className="mt-1 text-sm text-subtle-light dark:text-subtle-dark">
                      Crafted from full-grain Tuscan leather.
                    </p>
                    <p className="mt-2 text-base font-semibold">$150.00</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-xl font-light">
                          -
                        </button>
                        <input
                          className="w-8 p-0 text-center text-base font-medium bg-transparent border-none focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          type="number"
                          defaultValue="1"
                        />
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-xl font-light">
                          +
                        </button>
                      </div>
                      <a
                        className="text-xs font-medium text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary transition-colors"
                        href="#"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col sm:flex-row gap-6 border-b border-border-light dark:border-border-dark pb-8">
                  <div className="flex items-start gap-4 flex-shrink-0">
                    <div className="relative">
                      <div
                        className="h-28 w-28 bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsdgjSKMm6cav_USAQj_s72wNoYVwDEExGoJg7esB0jvuMgXRkPQINQtE8rLXQ9ag5wqIGDWcI0RmUG08FuJZREHVL6v8UHRK481wAZKoX-m3uHFBfGFJYvHVVxAuQ9fMTd6hZVseFGCvhw-wCQ0I7N9az-lOpYhyT_H-Bf5cCBUypr2Axxp0Bgh98X3652d-G1hK9i_GvRo7rrS6TOmQBxWeQOlRg04CvPagJ4P-32DJDIi8pM7nhDyx1h69egB31b9G-a9-hB96M')",
                        }}
                      ></div>
                      <div
                        className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full border-2 border-background-light dark:border-background-dark bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCU2Q1bz5AYQ0Zr1oxNP9V78ZH8EHeZ-vTZpfi1Kq7QfWQaHkC4aSoD5JdrYIDN7UWq2roA46-Inh09hRDeGr6MAmaSELvWO_zHxLUGLcAZmgNFdIht0ezLKxw1vtFVlO9LfPWfCa0-xNevB_hAs28VMuWJurueEQijoPoS-msXt8Rt5voAC8V-_pnUUn0FctRo-C4DXw0ddeExIqSOlI-9vlRk-Uz4mWqXrb515nvQGH_6i6UGuIPtNZZ6QwDYx6afcr8f34tVV0BU')",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-bold">The Weaver's Scarf</p>
                    <p className="mt-1 text-sm text-subtle-light dark:text-subtle-dark">
                      Hand-loomed with ethically sourced merino wool.
                    </p>
                    <p className="mt-2 text-base font-semibold">$220.00</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-text-light dark:text-text-dark">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-xl font-light">
                          -
                        </button>
                        <input
                          className="w-8 p-0 text-center text-base font-medium bg-transparent border-none focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          type="number"
                          defaultValue="1"
                        />
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-xl font-light">
                          +
                        </button>
                      </div>
                      <a
                        className="text-xs font-medium text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary transition-colors"
                        href="#"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-28 rounded-lg border border-border-light dark:border-border-dark p-6 lg:p-8 bg-white/50 dark:bg-black/20">
                  <h3 className="text-xl font-bold font-serif mb-6">
                    Order Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <p className="text-subtle-light dark:text-subtle-dark">
                        Subtotal
                      </p>
                      <p className="font-medium text-text-light dark:text-text-dark">
                        $370.00
                      </p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-subtle-light dark:text-subtle-dark">
                        Estimated Shipping
                      </p>
                      <p className="font-medium text-text-light dark:text-text-dark">
                        $15.00
                      </p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-subtle-light dark:text-subtle-dark">
                        Taxes
                      </p>
                      <p className="font-medium text-text-light dark:text-text-dark">
                        Calculated at next step
                      </p>
                    </div>
                  </div>
                  <div className="my-6 h-px bg-border-light dark:bg-border-dark"></div>
                  <div className="flex justify-between text-base font-bold">
                    <p>Total</p>
                    <p>$385.00</p>
                  </div>
                  <button className="mt-8 w-full rounded-lg bg-primary py-3 text-base font-bold text-white hover:bg-primary/90 transition-colors">
                    Proceed to Checkout
                  </button>
                  <p className="mt-4 text-center text-xs text-subtle-light dark:text-subtle-dark">
                    <span
                      className="material-symbols-outlined align-middle"
                      style={{ fontSize: "1rem" }}
                    >
                      lock
                    </span>
                    Secure payments and satisfaction guaranteed.
                  </p>
                  <div className="mt-8 border-t border-border-light dark:border-border-dark pt-6">
                    <details>
                      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                        <span>Behind the Craft</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                          expand_more
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-subtle-light dark:text-subtle-dark">
                        Every piece is a testament to sustainable practices and
                        the hands that shaped it.{" "}
                        <a className="underline hover:text-primary" href="#">
                          Learn our story
                        </a>
                        .
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
