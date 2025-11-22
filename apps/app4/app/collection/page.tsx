export default function CollectionPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1">
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-2 md:px-10 py-4">
                <div className="flex items-center gap-4">
                  <div className="size-6 text-text-light dark:text-text-dark">
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
                  <h2 className="text-text-light dark:text-text-dark text-lg font-bold font-display leading-tight tracking-[-0.015em]">
                    Artisan & Co.
                  </h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                  <div className="hidden md:flex items-center gap-9">
                    <a
                      className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-accent dark:hover:text-accent"
                      href="#"
                    >
                      Shop
                    </a>
                    <a
                      className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-accent dark:hover:text-accent"
                      href="#"
                    >
                      Our Story
                    </a>
                    <a
                      className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-accent dark:hover:text-accent"
                      href="#"
                    >
                      Journal
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-border-light dark:hover:bg-border-dark">
                      <span className="material-symbols-outlined text-xl">
                        favorite
                      </span>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-border-light dark:hover:bg-border-dark">
                      <span className="material-symbols-outlined text-xl">
                        shopping_bag
                      </span>
                    </button>
                  </div>
                </div>
              </header>
              <main className="flex flex-col gap-8 md:gap-12 mt-8 md:mt-12">
                <div className="flex flex-wrap justify-between gap-6 px-2 md:px-10">
                  <div className="flex min-w-72 flex-col gap-4">
                    <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
                      The Collection
                    </h1>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed max-w-xl">
                      A thoughtful selection of objects, crafted with intention
                      and transparency. Each piece tells a story of its origin,
                      materials, and the hands that shaped it.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start border-y border-border-light dark:border-border-dark px-2 md:px-10 py-4">
                  <span className="font-bold text-sm shrink-0 mt-2">
                    Filter by:
                  </span>
                  <div className="flex gap-3 flex-wrap">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-border-light dark:hover:bg-border-dark">
                      <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                        Method
                      </p>
                      <span className="material-symbols-outlined text-xl text-text-muted-light dark:text-text-muted-dark">
                        expand_more
                      </span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark pl-4 pr-3 hover:bg-border-light dark:hover:bg-border-dark">
                      <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                        Material Origin
                      </p>
                      <span className="material-symbols-outlined text-xl text-text-muted-light dark:text-text-muted-dark">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-10">
                  <div className="flex flex-col gap-4 group">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyN87dYgHs3GaQk83SXTCzE8iLfiICTWNctXvqUn0krIOPI32s2T7q3fMN6Fxyy-_MEzgY0Umlfq8_ZqnVYPKRXlRgcym5h3CtB0zmPk-u_xXCbJqNhobMQa_W7z-e533HjwFqAMpcIL01KaQc3ejH807K7jRY2730Nk3CDHHnjgr1yt1dZCfu3_P7kzBzCGids3DGr-WnN0IYu9orP1PGG24V_6BIOpDAM2dG33jOn7aSH1zD-e3ZfO9TbF9H0-6EPRzMjLUX7v6N")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMMD9nrAnXF-PhYqhzLD3LXvygKnqhpjwk2NZIdx__SezpW-pBayxwdpVltKv92V0JgV-G-VViAIKfZeOBKMMarqmUHZn8zFvh0n8cnLZQpUPCSzCuc7htlP0tbWsU1CT4MEBr9-eAwDMSup09TzKKEWwpCjncuRIJJWXSkxXIctCXyoNAiUJLNVNqtEvz0W5vizz_h4XXzegRiYPjmYB_E30sAusL1JRTuFpxKWtTwrCpA1qMRLOE1fliex9NiU2dabxP_PS1et-A")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        The Artisan's Valet Tray
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $185.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: Italy | 8 Hours Labor | Walnut & Brass
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzsjXa2fbHFcu8wUqgaoqf61QDpDKYck24CX-MOLnZ1rbhi04sJAGLf4UPIOa4S6fB4V_8RJ43L8iM74-hFY23IVjJt69z8WYx7PAEE5JtL0f8fQFAh_GL21t4zGef50E8vFJoj1oXUXv0rmsA0oL3Npy6lgkU68B_dHDx92couM6kD2RTlRTdkcDjb9KumqQvVK_3JgOE7yAmcngJ3OXqII2mRfnO8mZQx8R9i_68shGVbzbVH3NRrHQABk6_jbM6FJJVzDtGDf21")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQKSa06ngztE1nWBOf1Qw514sS53jMN6nmtOP-gqgXY5cOdASTrhw1gYa_VHD84Cw3bSn9-uaj6nmoOJ90L-54k_FTn7Um6WMqQykeaD7NjvJqUUuzJD11JSBetJVg94XedYgg5F8g0MwPECbo1Axsg23npslkP7DPz7X78IPPWULKR51UpfGWnyaTxA18IOx47yNoGSURmVXnQQ8JJ2qJB8Q7mZxwqO9KdPjFXln4CmVVlvDUqjPMxl9GqxAH4pxhUSO42kHW-SRQ")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        Hand-Forged Iron Trivet
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $95.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: Local Forge | 6 Hours Labor | Recycled Iron
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk4jsQO0Y9meXFu-9pg6iX4hDtJWedsHUaWlJ4JBJSf0szn4ZJM8__3WJb6MjmICQLlm-F2LkDZolKWFJjfXieTecYkLig6z6T5JCo8fTLqhmt2NcR0h7FqdZQnc21XYOkt7y70zjN7rYm4Jate4Kx_OVn_Yp4QuNscZuVBzF4lkD6RbUF3s5vNJD8Wh0ahrR4yy6FIa8m_YxZjIrIXqO2_lL0zBYNeAgx3qc25fcZnd-D0qMcENAelWY9cFyYWcMHVy7IxHgba8Y6")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmx7syUFd71zGnHS_SIs992aDZdE8odAOAqGG8hG4oqzZrizefd0b1yjsUHMveMzsVEUw6_6xVTiyR3-H7YoqUa2Ta-jkoliMjhdk7Dwd6wAZWC4pkE_FYbtMtjVrZYvuTjbMISCiBDP97jPvVnBDSjtzVDKMtTp1VjAUzM-kLE6YRb2Lzt-NvWji11yVNQFFEli2cDQLhF_rMVTUpY7D8lpjb3XgO3i9XgJKabQQbc27iO2gqwx968WZvSIi7HX1cvEtdQ-pXgBjL")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        Wheel-Thrown Ceramic Mug
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $60.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: Japan | 3 Hours Labor | Stoneware Clay
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 group sm:col-span-2 lg:col-span-1">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA5UHOWCgzOXftcuUm_dXHzSdBjAf6Lu_ydL_zA83Tqe9yTa8RM4CsGPEDGK1SF6cAZEWy0jxLUqkJnMdAfXfWjh69pJX4qpXlUzy7zeILhrm7ymagU30KwIbogTTJVaWGfLgwGIn5tx7jTZSAD8XPubnaVsSnJdGjKWr8KruvwTZJ0-9QAcdlcLMCgotRTPBZyuZwhEsJFTijElM5QqVvoeJfz8Fj7yESSSQF91Ka0X2IzMAZVnuSQA6VCNcaZ27Pnth6xvbCwvWx")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUkd03ne5fAWUS06aaooVbrVDxvK7wOmoqjyQp9q1GG7ItuaqVVizZDWGYOCdE5rZxHoSuzsa7FnF8J0JYpVKKcP7hrjhK8TzYKU6CNGCaD2h_R5Tmx7iK6LoHgR03yaTUTGJQABVsZWMXp3x7EEp9SqWYPFgmRzXIKeal2CCH081TCPcV8AP_ByahQbIzaFLh-2YSW-qOPTco_ru5Ui1EkuhEiXYZWSGcyTcFouTcR8YRriOpVjBkPl0KjDheMhaylEPK_8wjsjIj")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        The Scribe's Desk Lamp
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $275.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: Scandinavia | 12 Hours Labor | Ash & Steel
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzCF0Ubwa4Mq6c3ASWcWNKjXbliH0aiytaV5s671ATJW9hxhSja9DHEvWxr2djs4UCaZjumn7fX7mknZN7Nmausr7-664lPm0vzHQS3rMeCgkqkcetboroUCBt_N3x-WAy5qc8P1u93hHmdCEqjZdq7uOic6oSsmlS4gSqLo70qQZT7FT0JSO5XsvUFnK6M3vKU43sZU3LjsdbOfttCohKmiiEA4Pz5OosJCb4orUgeovseTrLbTmEQPAFRBehDYDA9I6LRX2DnSP0")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsQftDKJSo0PDBYoTTVJYBWDw4sCtbAGGHBdbI06OgBMI6k8sezdE9qZ02GswrRAOr4STNj0EYKiQWDPdK5Kk-HkP4j7F2cgGZyghFhfcXaqb96Vwt5L8oo0vEWIHC2rvOHjb7zXOz2_Y4ud1Et8elAEs_t4Gm2CWkJNXSNTAnWDxiKMp0qKC6EylHNrwqUAq4JB4usTuvK_r-kDNgnplfkPTjUTg7fnYIgjmfAFdVJQHmSuKCXxu4qkxhJ3SM9mTPR4d3kwjSQ-21")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        Hand-Stitched Leather Journal
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $110.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: North America | 9 Hours Labor | Full-Grain
                        Leather
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 group">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBphiYB4DMIzDUWibnoqVOIoOclG0VKPfzrC6QIY62gKOdaabCqkSZkRnPgN1RWe1QRC7q9N-fQFA6C22qC0eRPKYDGfyBrrknl4cyg72hl31iWuo5GizbkDggN4HLcE7KP09Kewv7fZFt5vUKBsykT1sulGuQawc56g2U3RYJDlJS0QK2BGYMQFVPnW0WC1AO9XYhV-VMSSyz-58hseNjfCk5LNZyqtAXoK4hhbgwt_GL4Eh9NhshbBfeYpcIYbQ32MStNds7ZRnUA")',
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuGqv_JvgIJ5TiK5-jMsxYIZ6ymRjrTx2AeRURYemmcmJsuRi2nEsMjTfgEVHroXAX3U19M2avbI8n6qA_mOheuNag3oBoJHEwoNtfUEkju7dOnKxvj2GhpIaUzPxyKRArnYjVjcR1f6LRot89CHg5Uqr4tPJmMhn2H0N607vPnt2sHM4pQ2Ue4_t2vegFUDxsyV29A6jpr9rrquB1BrgYnWeOK27Q-gvJH-3nbcG8ium2qFdNnzSg2WqYpZo7YB2mi-wb6j-xj2m2")',
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-semibold leading-normal">
                        CNC Milled Oak Coasters
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal mt-1">
                        $70.00
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-2">
                        Sourced: North America | 4 Hours Labor | White Oak
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 mt-8">
                  <a
                    className="flex size-10 items-center justify-center rounded-full hover:bg-surface-light dark:hover:bg-surface-dark"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg text-text-muted-light dark:text-text-muted-dark">
                      chevron_left
                    </span>
                  </a>
                  <a
                    className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white bg-accent rounded-full mx-1"
                    href="#"
                  >
                    1
                  </a>
                  <a
                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-surface-light dark:hover:bg-surface-dark mx-1"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-surface-light dark:hover:bg-surface-dark mx-1"
                    href="#"
                  >
                    3
                  </a>
                  <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-muted-light dark:text-text-muted-dark rounded-full mx-1">
                    ...
                  </span>
                  <a
                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-surface-light dark:hover:bg-surface-dark mx-1"
                    href="#"
                  >
                    8
                  </a>
                  <a
                    className="flex size-10 items-center justify-center rounded-full hover:bg-surface-light dark:hover:bg-surface-dark"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg text-text-muted-light dark:text-text-muted-dark">
                      chevron_right
                    </span>
                  </a>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
