
import React from 'react';

const Screen1 = () => {
  return (
    <div className="bg-[#0A0A0A] font-montserrat crt-scanlines">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#ff00ff]/30 bg-[#0A0A0A]/80 px-4 py-3 backdrop-blur-sm md:px-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined text-xl text-[#00FFFF]">memory</span>
              <h2 className="font-orbitron text-xl font-bold uppercase tracking-widest text-white">CYBER-CORP</h2>
            </div>
            <nav className="hidden items-center gap-9 md:flex">
              <a className="glitch-hover font-orbitron text-sm font-medium leading-normal text-white" href="#">
                <span className="original-text">MARKET</span>
                <span className="binary-text">01001101</span>
              </a>
              <a className="glitch-hover font-orbitron text-sm font-medium leading-normal text-white" href="#">
                <span className="original-text">INTEL</span>
                <span className="binary-text">01001001</span>
              </a>
              <a className="glitch-hover font-orbitron text-sm font-medium leading-normal text-white" href="#">
                <span className="original-text">PROFILE</span>
                <span className="binary-text">01010000</span>
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <label className="hidden min-w-40 max-w-64 flex-col !h-10 sm:flex">
              <div className="flex h-full w-full flex-1 items-stretch rounded-none border border-solid border-[#7fff00]/50 bg-[#111111]">
                <div className="flex items-center justify-center pl-3 text-[#7fff00]">
                  <span className="material-symbols-outlined text-xl">input</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-none bg-transparent h-full px-2 pl-2 font-orbitron text-sm uppercase text-white placeholder:text-[#7fff00]/70 focus:outline-none focus:ring-0"
                  placeholder="JACK IN // FIND TARGET"
                  value=""
                />
              </div>
            </label>
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-solid border-[#ff00ff]"
                data-alt="User avatar with a cyberpunk aesthetic"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxNSp2DjWIFBdeqB4BMy5pZ_Q5nb6Lrp_4R3CYDENNGCERl7CucWNayTpvRDp8jT4ePxjsia3acNnyk6HoNc5V0y3chOCCQsMolAY9E7kvoE93e-QXOu2AYKJU8Tw0SuijZM8olqCfTZ6065mxZdEHpaM35aEuk50T0YX7VGnIdyxCBzF5Yk_H-6ZZcvVSVxeqRK-NF--oNbsYjg41ZFKNFROFZcekrqncBJyXgDGGFZ-Eclg-BtGlBzlv9vDdcoQ36wd3YPCLPMs')",
                }}
              ></div>
            </div>
          </div>
        </header>
        <main className="flex flex-1 justify-center py-5">
          <div className="flex w-full max-w-7xl flex-col px-4">
            <h1 className="font-orbitron tracking-wider text-4xl md:text-5xl font-bold leading-tight text-white px-4 pb-6 pt-6 text-left chromatic-aberration">
              The Data Chips
            </h1>
            <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Product Card 1 */}
              <div className="group/card holo-hover relative overflow-hidden border border-transparent transition-all duration-300">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Kowloon Neuro-Chip v2.1 on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0O6Mvn4HHY3iJsdrGNozgZRO-BIGuRKBdAPp7epKHqiZ50KzXlH_2PohuQ53Yi_HvZ3DOTpxTEmMGuifqVoYa6VyWJmOVyCElI867yv3RrrR5L9PTHzhSC_JTpOAxoVT2yRRu6LA2yqAsYYHTSKEnnVs8SE8gXLE2njPbtC8mEfquF9ziKZAx0ZgTutQijbJ7Sy-rksHuVyOC--BZhNudCxZFTuucenSVheFIY_IYd4yygCTjGosnXCa9up3a6UPs43VbdNsQA4g')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Kowloon Neuro-Chip v2.1</p>
                  <p className="font-montserrat text-sm font-bold">$4,800</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 2 (Broken Grid) */}
              <div className="group/card holo-hover relative mt-0 overflow-hidden border border-transparent transition-all duration-300 md:mt-12">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="ArcLight Synapse Mod on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLBBe62LiQsDlQWEQwSmxLt6vKOlaZYzEUf1YWmKHLbs1VwdInXaf7aMNQ_qF2joR92kl8avrZEytDeFSu-p24Jb82ynT2W4992ZetnSyWxjvMP9BKZzPZlWKg_356hVNi2TZmylbglnRsYR8KVGxDL1vJZWYf67cQthr3Icg9oqpRsDBzRmoh1RRuaWySTASycywqywwG4sIQO6424YCwi0MvLVbiHHrH8gIFiT09B-KE3WqomrUfo4zxgmMvN7Ph7vAQySK7ziQ')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">ArcLight Synapse Mod</p>
                  <p className="font-montserrat text-sm font-bold">$7,250</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 3 */}
              <div className="group/card holo-hover relative overflow-hidden border border-transparent transition-all duration-300">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Cryo-RAM Module on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAFFDTJkUf9jorD9D-t9O4bbYi0rUKDEMKCZoxkeQlKFy_VOak0c0D9We8-IeyP0t7_-TaGT3EwSb8ab47h27Fd57SmEGv7ZdCpz47JPNaaeEp-KawtdRRbdOOTpeARFXu8FJRUB5AtInyQRrfvYni6Zs1ueur_cTr4LIHfa2uSJXHyAtctze2yUuWsByV0PRdCzc8mncwtRSDMNDdV8S3_YpzvSh31D0Z8N3rVU4GHal85Zojw6kMfZDAJNR9UbSWztA8x_ouyj0')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Cryo-RAM Module</p>
                  <p className="font-montserrat text-sm font-bold">$3,100</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 4 (Broken Grid) */}
              <div className="group/card holo-hover relative mt-0 overflow-hidden border border-transparent transition-all duration-300 lg:mt-8">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Oni-Corp Data Spike on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxfcMVyiBT3c1pGDlIafGXlizLqt62QrJ9XxJ98XjLHGjcaMx0mKBfTweU-ptOzoj9yN-MC7fjA_MJnIjGD7yhZeqVRMFcBwvzj4V0qpelEp1F3-3vgd0-aLEFWYJPA63-pxL8fKkU3M4aOVorfloYUPJ-Xa1VfzrU2E1GukbHPaGGdCeEvmp5X0O9rjprCvtCYQofSmhDz288j2OwaaOf24_jn3EmH_-aqa--_L00qv7Maf-1JHujxls2Aj3COBmsfRY2nj5yogc')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Oni-Corp Data Spike</p>
                  <p className="font-montserrat text-sm font-bold">$9,999</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 5 */}
              <div className="group/card holo-hover relative overflow-hidden border border-transparent transition-all duration-300">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Neo-Tokyo Logic Board on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXBQ51EpM3R1JgV_bVT20khzwZreJI5MYAs5NZ_cS5xvk5u5kdu84GVRTWCkfxeMuzgMi_1nPCmeGSnZpOowDQGp7dAi8Y7iYvYR57hU0QBAo0dqbn0PGjeSN3fK6w0983hluA_6oPR6iBAUrnwa6r_ujQsbZnfLX3XEpertZMw08Zc_33OxPhb0BiyQ5cB985F5szdVDTZW1iFCkMP_JnBrovIG1USLnm-gjP5G_D-doZ39K-l7utvZoKiLNQrQuqwAaBXoeg1vU')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Neo-Tokyo Logic Board</p>
                  <p className="font-montserrat text-sm font-bold">$5,400</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 6 (Broken Grid) */}
              <div className="group/card holo-hover relative mt-0 overflow-hidden border border-transparent transition-all duration-300 md:mt-6">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Glitch Weaver Processor on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb-YU3HjKsFMAHzrGV2o4Avj4kqy0LCBBZBQ2mq1zrIna5rMDSgvtArnDDIB8Zmb2gCmRiNhFrZk2BEO4xowhPWE88mCamqdXzq6B0vMFJVEO8le3gzLJg9FbIdrDRgK124EINhT15h9fEAo4nJO5hQOu9GSq0B6dGEtsqblXst_nQTUHMazeGFTUCNsAjuY3c9mqQBbCcO6Af7YtuT5K7k6To0fa12InN8ucZZfzD03R_Pc9ROVq7E4oVxcKZiHa6jFayb1IXBUc')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Glitch Weaver Processor</p>
                  <p className="font-montserrat text-sm font-bold">$8,150</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 7 (Broken Grid) */}
              <div className="group/card holo-hover relative mt-0 overflow-hidden border border-transparent transition-all duration-300 lg:-mt-8">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="HexaCore Data Shard on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFoAZZFgcAVbBIsNtoBYBj_mkdN_Pqx3_Y_5tlUvpZZRn1SBFsMkFb5gQJHoaT8TUQlOj5FgaaR9yUqLatRT7AuzaQ3udCTotbYRo2gkGJz8kEM2yKsjmMhDGPo7UTe3ojl9NUhGwuLCpJL-AzW3XqtYPnCR_SEtKYG9jtquoWDBxWUuizJhBL_xsZjzOFtf6YNFbw1dzfx_vOo49PSbQXp5ysIKVcdpV9VKBB0G4RuhY07lVUQ7P_sfxR11VA2SLOf-8HvRBLio4')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">HexaCore Data Shard</p>
                  <p className="font-montserrat text-sm font-bold">$2,800</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
              {/* Product Card 8 */}
              <div className="group/card holo-hover relative overflow-hidden border border-transparent transition-all duration-300">
                <div className="bg-[#00FFFF] p-4">
                  <div
                    className="aspect-square w-full bg-cover bg-center product-image transition-all duration-300"
                    data-alt="Phantom Protocol Key on a cyan background"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9Gr3RMQyKRHqULVxnbD3CdUJvD0p8_gEIFuNzYIQIZULVJw71ZgFUUc93GpO9mRPGlpeoYgWk8asEvdmUXHrodacfbzig9Q_K1WSKMTuQlOgHnexP4zp7HIT7avoFGBW5iEEaDYdboH5-4ko5U8EGURibvhKiiCEQeX9_3BAMa1vUDRFGW7smdnB-0GdbVdXmW94OWHGLPUxUQHsfowCyg5kLXLJg6JhDG7Ps0MRFwk52cu7e3oHdxGE1UoT8n0KIxqPzIU5muYY')",
                    }}
                  ></div>
                </div>
                <div className="bg-[#FF00FF] p-4 text-black">
                  <p className="font-orbitron text-base font-bold leading-tight line-clamp-2">Phantom Protocol Key</p>
                  <p className="font-montserrat text-sm font-bold">$12,000</p>
                </div>
                <button className="quick-view absolute bottom-4 right-0 flex cursor-pointer items-center justify-center overflow-hidden bg-[#7FFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  Quick View
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <a className="flex h-10 w-10 items-center justify-center text-[#00FFFF]" href="#">
                <span className="material-symbols-outlined">chevron_left</span>
              </a>
              <a
                className="font-orbitron flex h-10 w-10 items-center justify-center border-2 border-[#ff00ff] bg-transparent text-sm font-bold text-white"
                href="#"
              >
                1
              </a>
              <a className="font-orbitron flex h-10 w-10 items-center justify-center text-sm font-normal text-white" href="#">
                2
              </a>
              <a className="font-orbitron flex h-10 w-10 items-center justify-center text-sm font-normal text-white" href="#">
                3
              </a>
              <span className="font-orbitron flex h-10 w-10 items-center justify-center text-sm font-normal text-white">...</span>
              <a className="font-orbitron flex h-10 w-10 items-center justify-center text-sm font-normal text-white" href="#">
                9
              </a>
              <a className="flex h-10 w-10 items-center justify-center text-[#00FFFF]" href="#">
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Screen1;
