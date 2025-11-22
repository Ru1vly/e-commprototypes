
import React from 'react';

const Screen2 = () => {
  return (
    <div className="bg-background-dark text-[#E0E0E0] font-body dark relative overflow-x-hidden">
      <div className="scanlines"></div>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-4 sm:px-8 md:px-16 py-3 hud-border">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-primary">
                <div className="size-5">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="font-display text-lg font-bold leading-tight tracking-widest glitch-text">TERMINAL</h2>
              </div>
              <div className="hidden md:flex items-center gap-9">
                <a className="text-sm font-medium leading-normal glitch-text hover:text-cyan" href="#">
                  Home
                </a>
                <a className="text-sm font-medium leading-normal glitch-text hover:text-cyan" href="#">
                  Catalog
                </a>
                <a className="text-sm font-medium leading-normal glitch-text hover:text-cyan" href="#">
                  Intel
                </a>
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded h-full border border-primary/30">
                  <div className="text-primary/70 flex bg-transparent items-center justify-center pl-3">
                    <span className="material-symbols-outlined text-base">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#E0E0E0] focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-primary/70 px-4 pl-2 text-xs font-display tracking-widest"
                    placeholder="JACK IN // FIND TARGET"
                    value=""
                  />
                </div>
              </label>
            </div>
          </header>
          <main className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 py-10">
            <div className="layout-content-container grid grid-cols-1 lg:grid-cols-3 max-w-6xl w-full gap-8 relative">
              <div className="lg:col-span-2 relative flex items-center justify-center">
                <h1
                  className="font-display absolute -top-8 left-0 text-5xl md:text-7xl lg:text-8xl font-black text-[#E0E0E0] z-20 text-shadow-lg"
                  style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.7), 0 0 5px #FF00FF' }}
                >
                  CHRONOS V2
                </h1>
                <div className="@container w-full">
                  <div className="relative">
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
                      data-alt="Abstract blurry background of a futuristic device"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsibGjcSGs0WuthOzmYHpVicmP5UKri1MBlv_URCN6TjD-DAj_vPr8Rnhc63J2OVpnAvG1n8Up8O9Y_Na4RV2Ff9RYmAhGAcMzv4Vlg_22DA7Ppehe_nM0deMNaj-zkBlmQf8Gz6IEm8rM1Q95V35ZwrsvK4dMtfRlH49JGihECxNF_KE7Fyx6dglpsLremZZ5LtSS_CIRI_E9kN2BIb9QhNkooTo4w_FfEqi3uw_m0Jl1cNQXqr5uXY61ON04PdLOZPajMn2koZs"
                      style={{ opacity: 0.1, filter: 'blur(20px)' }}
                    />
                    <div
                      className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-transparent rounded-lg min-h-80 relative z-10 p-4 border border-primary/20"
                      data-alt="A sleek, metallic cybernetic neural interface device displayed on a holographic interface with glowing blue and purple data streams."
                      style={{
                        backgroundImage:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4qOW8DeXt-OaiEroksDCCDhZ9DbWQSg8zq4Pb5t7dlHoG03wE0lQMcaptGcKG7xcz9pTqZxM_tLdWGWQtT9eKmcgzsJ2ViqeGIlRoxDy2_0_dSTJ7c4y15-GFUc3m7XdCAr3y2hltu-jsrhJVqDiUZAhpxtUOefWZWJ7I2ZcS0F2VD2n1z5TCiWjVjfVNdlRi0EBfkWp41abDMwtTNRyO49yHlfCh-HHxqxEh0-DYvvxDQqIKqzryKc0Nq0KdAF5l1YdlhIKxqwo")',
                      }}
                    >
                      <div className="flex p-4">
                        <p className="text-[#E0E0E0] tracking-wider text-xl md:text-2xl font-bold leading-tight font-display">
                          NEURAL INTERFACE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="lg:col-span-1 flex flex-col justify-between space-y-6 relative z-10 p-6 rounded border border-primary/20"
                style={{ background: 'rgba(10, 10, 10, 0.5)', backdropFilter: 'blur(5px)' }}
              >
                <div>
                  <p className="text-[#E0E0E0] text-sm font-normal leading-relaxed pb-3 pt-1">
                    Bypass the slow-flesh. The Chronos V2 directly interfaces with your synaptic pathways, overclocking perception and
                    response time to unprecedented levels. Time dilates. The data stream becomes instinct. Jack in and rewrite your
                    reality.
                  </p>
                  <div className="border-t border-t-primary/20 mt-4">
                    <div className="grid grid-cols-[30%_1fr] gap-x-4">
                      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-primary/20 py-3">
                        <p className="text-primary/70 text-xs font-display tracking-widest">CORE</p>
                        <p className="text-[#E0E0E0] text-sm font-normal">Quantum Entanglement</p>
                      </div>
                      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-primary/20 py-3">
                        <p className="text-primary/70 text-xs font-display tracking-widest">OUTPUT</p>
                        <p className="text-[#E0E0E0] text-sm font-normal">1.21 GW</p>
                      </div>
                      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-primary/20 py-3">
                        <p className="text-primary/70 text-xs font-display tracking-widest">LATENCY</p>
                        <p className="text-[#E0E0E0] text-sm font-normal">0.001 ns (theoretical)</p>
                      </div>
                      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-primary/20 py-3">
                        <p className="text-primary/70 text-xs font-display tracking-widest">STATUS</p>
                        <p className="text-green text-sm font-bold">ONLINE // IN STOCK</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-auto pt-6">
                  <p className="font-display text-4xl font-bold text-cyan mb-4">c 7,500,000</p>
                  <button className="w-full text-center bg-primary/20 text-primary border-2 border-primary font-display font-bold text-lg tracking-widest py-3 px-6 rounded-sm hover:bg-primary hover:text-background-dark hover:shadow-magenta transition-all duration-300">
                    INITIATE ACQUISITION
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
