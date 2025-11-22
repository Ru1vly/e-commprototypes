
import React from 'react';

const Screen5 = () => {
  return (
    <div className="bg-background-dark text-[#E0E0E0] font-body">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* BACKGROUND & ATMOSPHERIC ELEMENTS */}
        <div className="absolute inset-0 z-0 bg-background-dark opacity-75">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0)_50%)]"></div>
        </div>
        <div className="relative z-10 layout-container flex h-full grow flex-col">
          {/* Sticky HUD Header */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-cyan/20 px-4 sm:px-10 py-3 hud-border backdrop-blur-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-cyan text-lg font-bold tracking-widest">CYBER_CORP</h2>
              </div>
              <nav className="hidden md:flex items-center gap-9">
                <a className="text-white/80 hover:text-cyan text-sm font-medium tracking-wider" href="#">
                  NODE_01
                </a>
                <a className="text-white/80 hover:text-cyan text-sm font-medium tracking-wider" href="#">
                  NODE_02
                </a>
                <a className="text-white/80 hover:text-cyan text-sm font-medium tracking-wider" href="#">
                  NODE_03
                </a>
              </nav>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
              <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-none h-full border border-cyan/30">
                  <div className="text-cyan flex bg-cyan/10 items-center justify-center pl-3 pr-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      search
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white/80 focus:outline-0 focus:ring-0 border-none bg-black/30 h-full placeholder:text-cyan/50 p-2 text-sm font-normal tracking-wider"
                    placeholder="JACK IN // FIND TARGET"
                    value=""
                  />
                </div>
              </label>
            </div>
          </header>
          <main className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-10">
            <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1 gap-8">
              {/* Page Heading */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <h1 className="text-cyan font-display text-4xl sm:text-5xl font-black tracking-widest">Execute Contract</h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left Column: Decryption Interface */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                  <h3 className="text-white font-display text-lg font-bold tracking-[0.05em] px-4 pb-2 pt-4 border-b border-cyan/20">
                    Decryption Key Required
                  </h3>
                  <div className="space-y-6 p-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-cyan/70 tracking-wider" htmlFor="card-sequence">
                        Card Sequence
                      </label>
                      <div className="relative h-12 w-full rounded-none border border-cyan/30 bg-black/30 p-2">
                        <input
                          className="absolute inset-0 w-full h-full bg-transparent border-none text-green font-mono text-xl tracking-[0.2em] focus:ring-0"
                          id="card-sequence"
                          placeholder="4916 2211 4592 1111"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-cyan/70 tracking-wider" htmlFor="expiration-matrix">
                          Expiration Matrix
                        </label>
                        <div className="relative h-12 w-full rounded-none border border-cyan/30 bg-black/30 p-2">
                          <input
                            className="absolute inset-0 w-full h-full bg-transparent border-none text-green font-mono text-xl tracking-[0.2em] focus:ring-0"
                            id="expiration-matrix"
                            placeholder="12/28"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-cyan/70 tracking-wider" htmlFor="security-code">
                          Security Code
                        </label>
                        <div className="relative h-12 w-full rounded-none border border-cyan/30 bg-black/30 p-2">
                          <input
                            className="absolute inset-0 w-full h-full bg-transparent border-none text-green font-mono text-xl tracking-[0.2em] focus:ring-0"
                            id="security-code"
                            placeholder="343"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex flex-col items-center justify-center p-4 mt-8">
                    <div className="relative flex items-center justify-center">
                      <svg className="absolute size-48 text-cyan/20" fill="none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4"></circle>
                      </svg>
                      <svg className="absolute size-48 text-primary -rotate-90" fill="none" viewBox="0 0 100 100">
                        <circle
                          className="transition-all duration-3000 ease-linear group-active:stroke-dashoffset-0"
                          cx="50"
                          cy="50"
                          pathLength="282.74"
                          r="45"
                          stroke="currentColor"
                          strokeDasharray="282.74"
                          strokeDashoffset="282.74"
                          strokeWidth="4"
                        ></circle>
                      </svg>
                      <button className="group relative size-40 rounded-full bg-cyan/10 border-2 border-primary/50 text-primary font-display font-bold text-lg tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-background-dark hover:shadow-[0_0_20px_theme(colors.primary)] focus:outline-none focus:ring-4 focus:ring-primary/50 active:scale-95">
                        EXECUTE
                        <br />
                        PAYMENT
                      </button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 tracking-wider">Press and hold for 3 seconds to complete transfer.</p>
                  </div>
                </div>
                {/* Right Column: Order Summary */}
                <div className="lg:col-span-2 flex flex-col">
                  <div className="border border-cyan/30 p-1 backdrop-blur-sm bg-black/20">
                    <div className="border border-cyan/30 p-6 flex flex-col gap-4">
                      <h3 className="text-white font-display text-lg font-bold tracking-[0.05em] pb-4">Contract Details</h3>
                      <div className="flex flex-col gap-4 divide-y divide-cyan/20">
                        {/* Item 1 */}
                        <div className="flex items-center gap-4 py-4 justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-none size-14 border border-cyan/30"
                              data-alt="Abstract glowing purple and blue circuit board pattern"
                              style={{
                                backgroundImage:
                                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaGzI_qdydxWPUB32RLiCb-be-C9pr63nMee1O3zydNBd38SFE_TI8WogXn2xHg78lMI2_KwPAjZIE92Il0FUNDk2R18-nfo95JXkx_Nse4eshgh9uJBwVeM2_gbF-Tk77jSjjpKtdcSFLjmOsnbj61-i5Jk41ZlqjloErrDNK6gyh9-nTOrIgIFCNG_05-DA5m9lRr7viO1k1GH1pOQc3ovynStYMwJO0N2XY2nAcu3Ck9wCoLoWFjgRVvCWD0Xu6TldtQ_kbc7s")',
                              }}
                            ></div>
                            <div className="flex flex-col justify-center">
                              <p className="text-white text-base font-medium leading-normal line-clamp-1">
                                Neural Interface Mk. IV
                              </p>
                              <p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Qty: 1</p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <p className="text-white text-base font-normal leading-normal font-mono">CR. 1,250</p>
                          </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center gap-4 py-4 justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className="bg-center bg-no-repeat aspect-square bg-cover rounded-none size-14 border border-cyan/30"
                              data-alt="Abstract glowing green and black data stream pattern"
                              style={{
                                backgroundImage:
                                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdeiPSoaJUVWdq5bzvHVNVyhXQlDlhYcJsgm4sdw8aYTj4JLuxqwZoMBStimNsStrWuKTSgWb1NuXRbu9-0vvAfLQYYracxNX2wSSxc8vF9ilij5BsnHV8XiDZqU4Qc2ACRrktLZNOPImKQ7BoWAGiUOv5Ln-X2G-siFLWXkepLgk0Lu4qYe9NUyD0qg0wD9pzdpcZ3DSDxUSmoXEIxoo7RwCB2XsjpAWVxCDl3vrjf93eEWKK5jfyJy1QWxz-JxFezdMen0aH7oo")',
                              }}
                            ></div>
                            <div className="flex flex-col justify-center">
                              <p className="text-white text-base font-medium leading-normal line-clamp-1">Data-Scrambler v2.1</p>
                              <p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Qty: 2</p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <p className="text-white text-base font-normal leading-normal font-mono">CR. 400</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-cyan/20 mt-4 pt-4 space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span className="text-white/70">Sub-total</span>
                          <span className="text-white">CR. 1,650</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">System Fee</span>
                          <span className="text-white">CR. 115</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-green mt-4 pt-2 border-t border-cyan/20">
                          <span className="font-display tracking-wider">Final Credit Transfer</span>
                          <span>CR. 1,765</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Screen5;
