
import React from 'react';

const Screen4 = () => {
  return (
    <div className="bg-background-dark font-body text-gray-300 scanlines">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/30 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-8 md:px-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-primary">
                <h2 className="font-display text-lg font-bold uppercase tracking-widest flicker">CYBER_CORP</h2>
              </div>
              <nav className="hidden items-center gap-9 md:flex">
                <a
                  className="font-display text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-secondary"
                  href="#"
                >
                  NODES.HOME
                </a>
                <a
                  className="font-display text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-secondary"
                  href="#"
                >
                  NODES.CATALOG
                </a>
                <a
                  className="font-display text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-secondary"
                  href="#"
                >
                  NODES.PROFILE
                </a>
                <a
                  className="font-display text-sm font-medium tracking-wider text-gray-300 transition-colors hover:text-secondary"
                  href="#"
                >
                  NODES.CART
                </a>
              </nav>
            </div>
            <div className="flex flex-1 justify-end">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="group flex w-full flex-1 items-stretch rounded h-full">
                  <div
                    className="text-primary flex border border-primary/30 bg-transparent items-center justify-center pl-3 pr-2 rounded-l border-r-0"
                    data-icon="search"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <span className="material-symbols-outlined text-xl"> search </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary border border-primary/30 bg-transparent focus:border-secondary h-full placeholder:text-primary/70 px-4 rounded-l-none border-l-0 text-sm font-normal font-display tracking-wider uppercase"
                    placeholder="JACK IN // FIND TARGET_"
                    value=""
                  />
                </div>
              </label>
            </div>
          </header>
          <main className="flex flex-1 justify-center px-4 py-10 sm:px-8 md:px-16">
            <div className="layout-content-container flex w-full max-w-4xl flex-1 flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-6">
                  <p className="font-display text-sm font-medium uppercase tracking-widest text-secondary">
                    PAYLOAD COORDINATES UPLINK...
                  </p>
                  <p className="font-display text-sm font-normal text-secondary">66%</p>
                </div>
                <div className="rounded-sm bg-secondary/20 p-0.5">
                  <div
                    className="h-2 rounded-sm bg-secondary"
                    style={{ width: '66%', boxShadow: '0 0 10px #00FFFF' }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="font-display text-4xl font-black leading-tight tracking-[-0.033em] text-gray-100 text-shadow-cyan">
                    DROP COORDINATES_
                  </p>
                  <p className="font-body text-base font-normal text-gray-400">SECURE YOUR PAYLOAD. PROVIDE DELIVERY COORDINATES.</p>
                </div>
              </div>
              <div className="relative grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">&gt; FULL NAME:</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    value="John 'Glitch' Doe"
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">&gt; STREET ADDRESS:</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    placeholder="Initiate data entry..."
                    value="404 Cyber Alley"
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1 md:col-span-2">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">
                    &gt; APARTMENT / SUITE / ETC (OPTIONAL):
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    value="Unit 1337"
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">&gt; CITY:</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    value="Neo-Kyoto"
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">&gt; STATE / PROVINCE:</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    value="CA"
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="font-display text-sm font-medium uppercase leading-normal text-gray-200 pb-2">&gt; ZIP / POSTAL CODE:</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary border border-primary/30 bg-background-dark/50 focus:border-primary h-12 placeholder:text-gray-500 p-3 text-base font-normal leading-normal font-body"
                    value="90210"
                  />
                </label>
                <div className="flex items-center justify-center">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="border-4 border-accent text-accent transform -rotate-12 p-4">
                        <h3
                          className="font-display text-3xl font-black uppercase tracking-widest"
                          style={{ textShadow: '0 0 8px #7FFF00' }}
                        >
                          LOCATION CONFIRMED
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start pt-6">
                <button
                  className="font-display text-lg font-bold uppercase tracking-wider text-background-dark bg-secondary px-10 py-4 rounded-sm transition-all hover:bg-white hover:text-black"
                  style={{ boxShadow: '0 0 15px #00ffff, inset 0 0 5px #ffffff80' }}
                >
                  [ CONFIRM COORDINATES ]
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
