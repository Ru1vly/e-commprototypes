import React from 'react';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-2 sm:px-6 lg:px-10 py-3">
              <div className="flex items-center gap-4">
                <div className="size-4 text-text-light dark:text-text-dark">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">Brand Name</h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-sm font-medium leading-normal text-text-light dark:text-text-dark" href="#">Shop</a>
                  <a className="text-sm font-medium leading-normal text-text-light dark:text-text-dark" href="#">Our Story</a>
                  <a className="text-sm font-medium leading-normal text-text-light dark:text-text-dark" href="#">Journal</a>
                </div>
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </button>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-border-light dark:bg-border-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">shopping_bag</span>
                  </button>
                </div>
              </div>
            </header>
            <main className="w-full flex flex-col items-center py-12 md:py-20 lg:py-24 px-4">
              <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Left Column: Main Content */}
                <div className="lg:col-span-2 flex flex-col">
                  {/* HeadlineText */}
                  <h1 className="text-text-light dark:text-text-dark tracking-light text-3xl md:text-4xl font-bold leading-tight text-left pb-3">The journey begins.</h1>
                  {/* BodyText */}
                  <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal pb-8 md:pb-12">We are now preparing your piece with care and intention.</p>
                  {/* Timeline */}
                  <div className="grid grid-cols-[32px_1fr] gap-x-4">
                    {/* Step 1: Order Received */}
                    <div className="flex flex-col items-center gap-1 pt-1.5">
                      <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                      <div className="w-[1.5px] bg-primary/40 h-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col pb-6">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Order Received</p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Your order is confirmed and the journey has started.</p>
                    </div>
                    {/* Step 2: Material Allocation */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-[1.5px] bg-primary/40 h-2"></div>
                      <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
                      <div className="w-[1.5px] bg-primary/40 h-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3 pb-6">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Material Allocation</p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">We are carefully sourcing the finest materials for your piece.</p>
                    </div>
                    {/* Step 3: Production */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-[1.5px] bg-primary/40 h-2"></div>
                      <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
                      <div className="w-[1.5px] bg-primary/40 h-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3 pb-6">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Production</p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Our artisans are now crafting your item with deliberate care.</p>
                    </div>
                    {/* Step 4: Shipping */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-[1.5px] bg-primary/40 h-2"></div>
                      <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>radio_button_unchecked</span>
                    </div>
                    <div className="flex flex-1 flex-col py-3">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Shipping</p>
                      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">Final checks are complete. Your order is on its way to you.</p>
                    </div>
                  </div>
                </div>
                {/* Right Column: Summary & CTA */}
                <div className="lg:col-span-1 flex flex-col gap-10 lg:gap-16 lg:pt-2">
                  {/* Order Summary Card */}
                  <div className="p-4 rounded-lg bg-border-light/50 dark:bg-border-dark/50 @container">
                    <div className="flex flex-col items-stretch justify-start">
                      <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2">
                        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Order Summary</p>
                        <div className="flex flex-col gap-1">
                          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">Order #123456789</p>
                          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">Estimated Delivery: Oct 15 - Oct 22, 2024</p>
                        </div>
                        <button className="flex mt-3 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center self-start overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal">
                          <span className="truncate">View full details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Signature & CTA */}
                  <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-6">
                    <div className="flex flex-col items-start lg:items-end">
                      <p className="text-lg text-text-light dark:text-text-dark" style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic" }}>Signed off by</p>
                      <p className="text-2xl font-bold text-text-light dark:text-text-dark tracking-tight">Brand Name</p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-transparent text-primary text-base font-medium leading-normal border border-primary hover:bg-primary/10 transition-colors">
                      <span className="truncate">Continue Browsing</span>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
