
import React from 'react';

const Screen3 = () => {
  return (
    <div className="font-body bg-background-dark text-white">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Blurred Background Page Content */}
        <div className="absolute inset-0 z-0 bg-background-dark filter backdrop-blur-xl">
          <div className="absolute inset-0 bg-black/50"></div>
          {/* This would be the actual page content that gets blurred */}
          <div
            className="h-full w-full bg-cover bg-center opacity-10 blur-lg"
            data-alt="Abstract image of a futuristic server room with glowing blue lights."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-2vIoVGPBMxr21nkaMFky_Bx47t5_t9bklmrokECmww2Hty0jCNWFW3SGX2DNqhvzV3khZeJ-24zGARNmPtroa5IHRDQyrdnmIsab5EDSJujKASiFX9QrbukQY3nDOGGyvhIOMsEmJ93IYWgQ4VlIVfozD_-dvljEJ2LoSBNC5FfD0Mk1pIGcYmEbHIoVVc-gQafuS-YfUyMNuO16rfJR0GG3MricobloTnTiUOiadcIanVgvniAZL5naWQ5O3P-Uo4DA46TWsHk')",
            }}
          ></div>
        </div>
        {/* Main Modal Content */}
        <div className="relative z-10 flex h-full grow flex-col items-center justify-center p-4 sm:p-6 md:p-8 scanlines">
          <div className="relative flex flex-col w-full max-w-2xl bg-black/70 backdrop-blur-sm border border-electric-cyan/50 shadow-glow-cyan rounded-lg">
            {/* Close Button */}
            <button className="absolute -top-3 -right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-hot-magenta bg-black text-hot-magenta shadow-glow-magenta transition-transform duration-150 hover:scale-110 hover:bg-hot-magenta hover:text-black">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="p-6 sm:p-8">
              {/* PageHeading */}
              <div className="flex flex-wrap justify-between gap-3 mb-6">
                <div className="flex flex-col gap-1">
                  <p className="font-display text-4xl font-bold uppercase tracking-widest text-electric-cyan animate-flicker text-glitch">
                    THE STASH
                  </p>
                  <p className="font-body text-base font-normal uppercase text-white/70">YOUR SELECTED PAYLOAD</p>
                </div>
              </div>
              {/* List Items Container */}
              <div className="flex flex-col gap-4 border-t border-b border-electric-cyan/20 py-6">
                {/* ListItem 1 */}
                <div className="flex gap-4 px-4 py-3 justify-between items-center bg-white/5 rounded">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px] border border-electric-cyan/30"
                      data-alt="Futuristic optical implant with glowing blue lens"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKZdCW4yLjr7asVikgPAviVTdYYmF3l6lgC_IvNW8VCFsrZ5j9hM7csVwgz-JKGzw3oG5iiZzQYqNVUUXc7kF3__f16wnW6L0e-LVjzKC17QhhAK-v3FNu5mm8be6IYSVbW2FLFQhyk5Msv7SZxf5LX3qP1qT21pac2QvwO51aVXS4ltbTiE9lm7CZtdx9AjYswMI1dI0SGsARWc42Gbgfyicgvrsc8MJTRk8xs-KLLEmj-V52gwpqclgTd9s9DAWpNdqUwJJ9M5E")',
                      }}
                    ></div>
                    <div className="flex flex-1 flex-col justify-center gap-1">
                      <p className="font-body text-base font-bold leading-normal text-white">Kiroshi Optics MK.III</p>
                      <p className="font-body text-sm font-normal leading-normal text-acid-green">€$ 1,299</p>
                      <button className="font-body text-sm font-normal leading-normal text-hot-magenta/70 hover:text-hot-magenta text-left">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center gap-2 text-white bg-black/20 border border-white/20 rounded-full px-2">
                      <button className="font-display text-2xl font-bold leading-normal flex h-7 w-7 items-center justify-center cursor-pointer text-electric-cyan hover:text-white">
                        -
                      </button>
                      <input
                        className="font-body text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-none focus:ring-0 border-none text-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value="1"
                      />
                      <button className="font-display text-2xl font-bold leading-normal flex h-7 w-7 items-center justify-center cursor-pointer text-electric-cyan hover:text-white">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* ListItem 2 */}
                <div className="flex gap-4 px-4 py-3 justify-between items-center bg-white/5 rounded">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px] border border-electric-cyan/30"
                      data-alt="Sleek black power armor suit with neon green highlights"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe1J3ldfs-ih3bNEi4k6M-Ge2CY0S1bdYLMMmO0hNyxRBWQY1-bxZvbqSCBShN5k4T4YcaENHZoM0Me2DalirHY-l0GE7UsDuGFxu65bCKqpv3eQdst09ZMBu25feAHTOvOST2BHhSOcKNK1cUkQEX6FY35fsLM6u9JuBJVxRKhaZypaOxOjwOY2TcYXYxq0LKGaq4_fUAsA9-sGAJM57RwiL2D8VOtzmRNbZiKonwBSy9j9zzlvIPjlCPkmpm-4KU67oGvW3R3w0")',
                      }}
                    ></div>
                    <div className="flex flex-1 flex-col justify-center gap-1">
                      <p className="font-body text-base font-bold leading-normal text-white">Militech &quot;Ronin&quot; Power Armor</p>
                      <p className="font-body text-sm font-normal leading-normal text-acid-green">€$ 7,499</p>
                      <button className="font-body text-sm font-normal leading-normal text-hot-magenta/70 hover:text-hot-magenta text-left">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center gap-2 text-white bg-black/20 border border-white/20 rounded-full px-2">
                      <button className="font-display text-2xl font-bold leading-normal flex h-7 w-7 items-center justify-center cursor-pointer text-electric-cyan hover:text-white">
                        -
                      </button>
                      <input
                        className="font-body text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-none focus:ring-0 border-none text-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value="1"
                      />
                      <button className="font-display text-2xl font-bold leading-normal flex h-7 w-7 items-center justify-center cursor-pointer text-electric-cyan hover:text-white">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Order Summary */}
              <div className="pt-6">
                <div className="flex flex-col gap-2 font-mono text-sm uppercase">
                  <div className="flex justify-between gap-x-6 py-1">
                    <p className="text-white/70">SUBTOTAL:</p>
                    <p className="text-acid-green font-bold">€$ 8,798</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-1">
                    <p className="text-white/70">SHIPPING // TAX:</p>
                    <p className="text-white font-bold">CALC. AT CHECKOUT</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 border-t border-electric-cyan/20 mt-2">
                    <p className="text-white/70">TOTAL:</p>
                    <p className="text-acid-green font-bold text-base">€$ 8,798</p>
                  </div>
                </div>
              </div>
              {/* Checkout Button */}
              <div className="flex pt-6 justify-center">
                <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-electric-cyan text-black font-display text-base font-bold uppercase tracking-widest transition-all duration-200 hover:shadow-glow-cyan hover:bg-white">
                  <span className="truncate">FINALIZE TRANSACTION</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
