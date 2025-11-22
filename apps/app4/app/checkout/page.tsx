export default function CheckoutPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-5 sm:px-6 lg:px-8">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 py-4 md:px-10 md:py-3">
              <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
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
                <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                  Slow Design Co.
                </h1>
              </div>
              <div className="flex flex-1 justify-end">
                <a
                  className="text-sm font-medium leading-normal text-muted-light hover:text-text-light dark:text-muted-dark dark:hover:text-text-dark"
                  href="#"
                >
                  Back to Cart
                </a>
              </div>
            </header>
            <main className="flex-1 px-4 py-8 md:px-10 md:py-12">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 pb-6">
                <a
                  className="text-base font-medium leading-normal text-muted-light hover:text-text-light dark:text-muted-dark dark:hover:text-text-dark"
                  href="#"
                >
                  Shipping
                </a>
                <span className="text-base font-medium leading-normal text-muted-light dark:text-muted-dark">
                  /
                </span>
                <span className="text-base font-medium leading-normal text-text-light dark:text-text-dark">
                  Commitment
                </span>
              </div>
              {/* PageHeading */}
              <div className="flex flex-wrap justify-between gap-3 pb-8">
                <p className="min-w-72 text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">
                  The Commitment
                </p>
              </div>
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-24">
                {/* Left Column: Payment Details */}
                <div className="lg:col-span-3">
                  <h2 className="pb-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                    Payment Details
                  </h2>
                  <div className="space-y-6">
                    <div className="rounded-lg border border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <input
                            defaultChecked
                            className="h-4 w-4 border-muted-light text-primary focus:ring-primary dark:border-muted-dark"
                            id="credit-card"
                            name="payment-method"
                            type="radio"
                          />
                          <label
                            className="font-medium text-text-light dark:text-text-dark"
                            htmlFor="credit-card"
                          >
                            Credit Card
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            className="h-6 rounded-sm"
                            alt="Visa Logo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7t5klbjh-b9YLJs8drYb0yzwmDLQW6xpoW2aPjOzNbWRRNHSlNoGWs2TE1Xm1ByI2sEJwIoNCrLk-Oodr32-NQZgb7bCjL-fXmE7vwhthuP9DQichfkV7JXENDYNxnWu2Ba1eicU3mPoQnpUZGcgmZb4fXIWCchtJyScu8mi8XnjIZZ-e2twLCDpS8fEiR7px0rKRuiViwF10-3u5npJMiQeVMBR9W6Edp0cPNofjTKJQIePlrTR8kPR-EL-xuWRwEAO5FSvj4sY"
                          />
                          <img
                            className="h-6 rounded-sm"
                            alt="Mastercard Logo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2GXxqp2ZwjWIX5huVdzB194eLp6NsbK6dBnQPFrfQOC6KmNg2NsggPQSLh9m8x7pBi48s6b3SRzRDj4sl91NzTnNGITUcuMSmj_RwxvP3lpiRUrisq4JLlFs-3MR6cU8D_Z_cixlBtajrPS98DsrZ8LIK6i-Kd95uVkZFvcisJMq0rJMhIQXdPe43g-8mM7P2U0UM1mLH7ICC1XPwMOQOL40NathxRF26TAu8T9ApJWhTOr0M3Q1NJGgB4FtpuDfLFrF53t5_7ejM"
                          />
                          <img
                            className="h-6 rounded-sm"
                            alt="American Express Logo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo079a0j19Qj47FcrkTiDVuxO2fc9T0zrPFxICzaoTqgyenTbxXJ1rFzwDPeksY2FW7-axbFt3GmnVTHAJbodPOsvYhCJMDI5eYj44BUHIg5MOfOkVs3eNshZuLJS7TgMWH0szEt4y2TOJCS_XHvbAay0jl1eFig9VCLeKUqIb54is0xjbrscuG0pvBXklfzvYKQKI1Ug8ROnPpYkdHMFVOudeaIw69yxUL0hAM1AHeME-jimirXraqFNqj7R_4hC3qKYCFIZxxn8Y"
                          />
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                          <label
                            className="block text-sm font-medium text-muted-light dark:text-muted-dark"
                            htmlFor="card-number"
                          >
                            Card Number
                          </label>
                          <div className="relative mt-1 rounded-md shadow-sm">
                            <input
                              className="block w-full rounded border-border-light bg-input-bg-light text-text-light placeholder:text-muted-light/70 focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark sm:text-sm"
                              id="card-number"
                              name="card-number"
                              placeholder="0000 0000 0000 0000"
                              type="text"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-green-500">
                              <span
                                className="material-symbols-outlined !text-xl"
                                data-icon="check_circle"
                              >
                                check_circle
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-6">
                          <label
                            className="block text-sm font-medium text-muted-light dark:text-muted-dark"
                            htmlFor="name-on-card"
                          >
                            Name on Card
                          </label>
                          <div className="mt-1">
                            <input
                              className="block w-full rounded border-border-light bg-input-bg-light text-text-light placeholder:text-muted-light/70 focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark sm:text-sm"
                              id="name-on-card"
                              name="name-on-card"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-muted-light dark:text-muted-dark"
                            htmlFor="expiration-date"
                          >
                            Expiration Date
                          </label>
                          <div className="mt-1">
                            <input
                              className="block w-full rounded border-border-light bg-input-bg-light text-text-light placeholder:text-muted-light/70 focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark sm:text-sm"
                              id="expiration-date"
                              name="expiration-date"
                              placeholder="MM / YY"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-muted-light dark:text-muted-dark"
                            htmlFor="cvc"
                          >
                            CVC
                          </label>
                          <div className="mt-1">
                            <input
                              className="block w-full rounded border-border-light bg-input-bg-light text-text-light placeholder:text-muted-light/70 focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark sm:text-sm"
                              id="cvc"
                              name="cvc"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border-light dark:border-border-dark p-5">
                      <div className="flex items-center gap-4">
                        <input
                          className="h-4 w-4 border-muted-light text-primary focus:ring-primary dark:border-muted-dark"
                          id="paypal"
                          name="payment-method"
                          type="radio"
                        />
                        <label
                          className="font-medium text-text-light dark:text-text-dark"
                          htmlFor="paypal"
                        >
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                      <span>Commission Production</span>
                    </button>
                    <p className="mt-4 text-center text-xs text-muted-light dark:text-muted-dark">
                      By continuing, you agree to our Terms of Service.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-2 text-muted-light dark:text-muted-dark">
                    <span
                      className="material-symbols-outlined !text-base"
                      data-icon="lock"
                    >
                      lock
                    </span>
                    <p className="text-xs font-medium">Secure SSL Payment</p>
                  </div>
                </div>
                {/* Right Column: Order Summary */}
                <div className="lg:col-span-2">
                  <div className="rounded-lg border border-border-light bg-background-light p-6 shadow-sm dark:border-border-dark dark:bg-background-dark/50">
                    {/* SectionHeader */}
                    <h2 className="pb-3 text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                      Your Commissioned Pieces
                    </h2>
                    <div className="space-y-6">
                      {/* Card */}
                      <div className="flex items-stretch justify-between gap-4">
                        <div className="flex flex-[2_2_0px] flex-col gap-2">
                          <div className="flex flex-col">
                            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                              Artisan Chair
                            </p>
                            <p className="text-base font-bold leading-tight text-text-light dark:text-text-dark">
                              The Sitka Chair
                            </p>
                            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                              Ash Wood, Natural Finish
                            </p>
                          </div>
                          <p className="w-fit text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                            $450.00
                          </p>
                        </div>
                        <div
                          className="aspect-square w-24 flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw9xS2jbzI0GzFE9wSlnwIhbfYc3n_xOXyshDrlDm7Y7BlCPGM2kDDAoPX3850KnGBMo1sL1MfZOKkuY4P8CrHZbcSjIPTJZ-IEGsrUef1dJdsaqRNBkXhkaMGgwa0LRj_SOuunMFNAA6v2F3gAp0mCyV_ibEfPLEbCdOrP7Pwfj8KQ8WusJzt3g3XauBrD4AfnOcoBIPtSmWPyBmlD_5dGCIGzq9JIqEIZmFdGwwI19sJDCVn5RV_lFvK9o6yIPcBqL8Yjh1uR_hq")',
                          }}
                        ></div>
                      </div>
                      {/* Card */}
                      <div className="flex items-stretch justify-between gap-4">
                        <div className="flex flex-[2_2_0px] flex-col gap-2">
                          <div className="flex flex-col">
                            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                              Handwoven Rug
                            </p>
                            <p className="text-base font-bold leading-tight text-text-light dark:text-text-dark">
                              The Dune Rug
                            </p>
                            <p className="text-sm font-normal leading-normal text-muted-light dark:text-muted-dark">
                              Natural Wool, 5x8
                            </p>
                          </div>
                          <p className="w-fit text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                            $720.00
                          </p>
                        </div>
                        <div
                          className="aspect-square w-24 flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO4ym_cRJrIo8RxH7ja1vS_6RH4MROYWhAJ--0h8b2ijbtaJqm3SOndMO6GiiHOyy8eTtAGNTeNE01xa08w6DClDzkw1EYlpVbFnb1CXwwqWpL3qM78qzJ2O5WzLm8huvqSw-oePHrvlasAHBOeg5Guwa9IVhVkNiYBW37YHuGCKvs1cXZQDwWswPF5oRocBrchsc0Wo1C5AOUGNZhe1tk_wrLTASMsfWv8_iFy9kYyBTgh23ktjS-LHfooRPRFuR0RyYufAJiiRO2")',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="my-6 border-t border-dashed border-border-light dark:border-border-dark"></div>
                    <div className="space-y-3 text-sm text-text-light dark:text-text-dark">
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Subtotal
                        </span>
                        <span>$1170.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Shipping
                        </span>
                        <span>$50.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Taxes
                        </span>
                        <span>$93.60</span>
                      </div>
                    </div>
                    <div className="my-6 border-t border-border-light dark:border-border-dark"></div>
                    <div className="flex justify-between font-bold text-text-light dark:text-text-dark">
                      <span>Total</span>
                      <span>$1313.60</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
