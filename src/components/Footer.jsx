import React from "react";

const Footer = () => {
  return (
    <div id="root">
      <footer
        id="footer"
        className="bg-neutral-50 pt-16 border-t border-neutral-200"
      >
        <div className="container mx-auto px-4">
          {/* <!-- Footer Top Section --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* <!-- Company Info --> */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Rentivo
              </h3>
              <p className="text-neutral-600 mb-4">
                Find your perfect home with Rentivo. We offer a wide range of
                rental properties to suit every lifestyle and budget.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#property-categories"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Property Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Rental Services --> */}
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Rental Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Apartment Rentals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    House Rentals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Vacation Rentals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Student Housing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Corporate Housing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    List Your Property
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-neutral-600">
                    123 Rental Avenue, Suite 456
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-neutral-600">(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-neutral-600">info@rentivo.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-neutral-600">
                    Mon-Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 10:00 AM - 4:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Newsletter & App Download --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-neutral-200">
            {/* <!-- Newsletter --> */}
            <div className="md:pr-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-neutral-600 mb-4">
                Get the latest updates, news and special offers sent directly to
                your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* <!-- App Download --> */}
            <div className="md:border-l md:border-neutral-200 md:pl-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Download Our App
              </h3>
              <p className="text-neutral-600 mb-4">
                Search, view and rent properties on the go with our mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-neutral-900 hover:bg-black text-white rounded-lg transition-colors flex items-center justify-center sm:justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.112 3.659c.336 0 .672.058.991.174.317.117.611.285.87.505.26.221.488.482.679.783.19.3.328.628.414.982.087.355.13.723.13 1.107v10.94c0 .385-.043.747-.13 1.089s-.223.654-.414.929c-.19.274-.418.51-.679.705-.26.196-.553.341-.87.437-.318.096-.654.145-.991.145-1.325 0-2.244-.652-2.757-1.959L9.35 8.164c-.11-.261-.243-.457-.4-.588-.158-.13-.375-.196-.648-.196-.294 0-.522.085-.686.257-.163.171-.245.43-.245.775v8.424c0 .366.057.712.172 1.039.114.327.276.612.483.854.207.243.463.436.765.58.303.145.647.218 1.035.218h.461v1.954H5.26v-1.953h.467c.4 0 .755-.073 1.066-.218.31-.146.572-.339.785-.58.213-.243.376-.528.488-.855.112-.327.168-.673.168-1.038v-8.97c0-.374-.056-.724-.168-1.051a2.148 2.148 0 00-.5-.843c-.22-.238-.49-.424-.811-.557-.323-.134-.692-.2-1.107-.2h-.388V2.62h4.051l5.196 12.654c.101.266.219.471.354.618.134.146.317.218.547.218.22 0 .388-.072.505-.218.117-.147.175-.352.175-.618V7.21c0-.266-.058-.504-.175-.715-.117-.21-.284-.314-.505-.314-.382 0-.649.217-.805.653h-2.122c.05-.329.145-.637.284-.921.138-.285.308-.53.51-.737.2-.208.428-.37.683-.485a1.9 1.9 0 01.804-.175c.278 0 .543.058.794.175.252.116.471.279.659.486.187.208.333.452.44.736.106.285.16.593.16.921 0 .337-.047.654-.139.95-.092.299-.225.567-.4.809h2.074c.323-.435.707-.783 1.15-1.043.443-.26.924-.39 1.443-.39z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-neutral-900 hover:bg-black text-white rounded-lg transition-colors flex items-center justify-center sm:justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814c-.25.432-.379.921-.387 1.414v17.545c-.001.708.287 1.385.796 1.875l.013.012c.245.228.526.416.83.554.306.14.636.212.968.214.33-.002.657-.075.96-.214l10.309-5.933.009-.005c.306-.191.567-.444.765-.742v-.003c.229-.334.353-.73.355-1.136-.002-.407-.128-.803-.357-1.138l-.003-.003c-.197-.296-.458-.549-.763-.742l-.01-.005-10.309-5.933c-.304-.139-.629-.212-.959-.214-.332.002-.661.076-.966.215-.304.138-.585.325-.831.553l-.011.01c-.506.488-.793 1.162-.796 1.867.008.493.136.982.387 1.414z" />
                    <path d="M14.034 7.761l2.94 1.691-2.94 1.702v-3.393zM14.034 12.908l2.94 1.691-2.94 1.702v-3.393z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Trust Badges --> */}
          <div className="py-8 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 text-center">
              Trusted By
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z" />
                  <path d="M12 17a1 1 0 100-2 1 1 0 000 2zm0-10v6a1 1 0 002 0V7a1 1 0 00-2 0z" />
                </svg>
                <span className="text-neutral-700 font-medium">
                  Verified Listings
                </span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                <span className="text-neutral-700 font-medium">
                  Secure Payments
                </span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-neutral-700 font-medium">
                  Quality Assured
                </span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <svg
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-neutral-700 font-medium">
                  Top Rated Service
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Payment Methods --> */}
          <div className="py-8 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 text-center">
              Payment Methods
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="h-8 w-12 text-neutral-700"
                  viewBox="0 0 48 32"
                  fill="currentColor"
                >
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path d="M18.5 22h-9l2-10h9l-2 10z" fill="#FF5F00" />
                  <path
                    d="M18.5 12c-1.8-1.3-4-2-6.5-2-6.6 0-12 5.4-12 12s5.4 12 12 12c2.5 0 4.7-.7 6.5-2l0-20z"
                    fill="#EB001B"
                  />
                  <path
                    d="M48 22c0 5.5-4.5 10-10 10-2.5 0-4.7-.7-6.5-2l0-20c1.8-1.3 4-2 6.5-2 5.5 0 10 4.5 10 10"
                    fill="#F79E1B"
                  />
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="h-8 w-12 text-neutral-700"
                  viewBox="0 0 48 32"
                  fill="currentColor"
                >
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path
                    d="M13 19.5h4.5l1-3.5h-4.5l-1 3.5zM22 12.5h-4.5l-1 3.5h4.5l1-3.5z"
                    fill="#3C58BF"
                  />
                  <path
                    d="M34 12.5h-5.5l-4.5 9.5h4.5l.5-1.5h3l.5 1.5h4l-2.5-9.5z"
                    fill="#3C58BF"
                  />
                  <path d="M30 17l1-2.5 1 2.5h-2z" fill="#3C58BF" />
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="h-8 w-12 text-neutral-700"
                  viewBox="0 0 48 32"
                  fill="currentColor"
                >
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path
                    d="M33.9 16c0-3.7-2.8-6.5-6.6-6.5s-6.6 2.8-6.6 6.5 2.8 6.5 6.6 6.5 6.6-2.8 6.6-6.5z"
                    fill="#FF9800"
                  />
                  <path
                    d="M27.3 16c0-3.7-2.8-6.5-6.6-6.5s-6.6 2.8-6.6 6.5 2.8 6.5 6.6 6.5 6.6-2.8 6.6-6.5z"
                    fill="#D50000"
                    opacity=".7"
                  />
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="h-8 w-12 text-neutral-700"
                  viewBox="0 0 48 32"
                  fill="currentColor"
                >
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path d="M20 12h8v8h-8z" fill="#253B80" />
                  <path
                    d="M30.2 12.5h-2.7c-.2 0-.4.2-.4.4l-1.3 7.7c0 .2.1.3.3.3h1.3c.2 0 .3-.1.3-.3l.3-2.1c0-.2.2-.4.4-.4h.9c1.8 0 2.8-1 3.1-2.9.1-.8 0-1.5-.4-2-.5-.5-1.2-.7-2.1-.7h.6z"
                    fill="#253B80"
                  />
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="h-8 w-12 text-neutral-700"
                  viewBox="0 0 48 32"
                  fill="currentColor"
                >
                  <rect width="48" height="32" rx="4" fill="white" />
                  <path
                    d="M15 21.5c0 .3.2.5.5.5h2c.3 0 .6-.2.6-.5l1.5-9.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.6.5l-1.5 9.5z"
                    fill="#00579f"
                  />
                  <path
                    d="M23 14c-.7-.3-1.5-.4-2-.4-2.2 0-3.8 1.2-3.8 3 0 1.3 1.2 2 2 2.4.9.4 1.2.7 1.2 1.1 0 .6-.7.9-1.4.9-.9 0-1.4-.1-2.2-.5l-.3-.1-.3 1.8c.5.3 1.5.5 2.5.5 2.4 0 3.9-1.2 3.9-3.1 0-1-.6-1.8-2-2.4-.8-.4-1.3-.7-1.3-1.1 0-.4.4-.8 1.4-.8.8 0 1.3.2 1.8.4l.2.1.3-1.8z"
                    fill="#00579f"
                  />
                  <path
                    d="M42 12h-1.8c-.5 0-1 .1-1.2.6l-3.5 8.9h2.5s.4-1.1.5-1.4h3c.1.3.2 1.4.2 1.4h2.2l-1.9-9.5zm-2.9 6.5c.2-.5.9-2.4.9-2.4s.2-.5.3-.9l.2.8s.4 2 .5 2.5h-1.9z"
                    fill="#00579f"
                  />
                  <path
                    d="M35 12l-2 5.4-.2-.9c-.4-1.2-1.5-2.6-2.8-3.2l1.8 6.7h2.3l3.2-8h-2.3z"
                    fill="#00579f"
                  />
                  <path
                    d="M28 12h-3.5l-.1.5c2.7.7 4.5 2.3 5.2 4.3l-.8-3.8c-.1-.5-.5-.9-1-.9"
                    fill="#faa61a"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Footer --> */}
          <div className="py-6 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-500 text-sm mb-4 md:mb-0">
                © 2023 Rentivo. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="text-neutral-500 hover:text-red-500 text-sm transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-red-500 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-red-500 text-sm transition-colors"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-neutral-500 hover:text-red-500 text-sm transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Back to Top Button --> */}
        <button
          id="backToTop"
          className="fixed bottom-8 right-8 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all duration-300 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>

      {/* <script>
              // Back to Top Button Functionality
              document.addEventListener("DOMContentLoaded", function () {
                const backToTopButton = document.getElementById("backToTop");

                // Show button when user scrolls down 300px
                window.addEventListener("scroll", function () {
                  if (window.pageYOffset > 300) {
                    backToTopButton.classNameList.remove("opacity-0", "invisible");
                    backToTopButton.classNameList.add("opacity-100", "visible");
                  } else {
                    backToTopButton.classNameList.remove("opacity-100", "visible");
                    backToTopButton.classNameList.add("opacity-0", "invisible");
                  }
                });

                // Scroll to top when button is clicked
                backToTopButton.addEventListener("click", function () {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                });
              });
            </script> */}
    </div>
  );
};

export default Footer;
