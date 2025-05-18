import React from "react";

const Contact = () => {
  return (
    <div id="root">
      <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-neutral-900 mb-4">Contact Us</h2>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              Have questions about our properties or services? We're here to
              help you find your perfect home.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* <!-- Contact Form --> */}
            <div class="bg-neutral-50 rounded-lg p-8 shadow-sm">
              <h3 class="text-2xl font-semibold text-neutral-900 mb-6">
                Get in Touch
              </h3>
              <form id="contactForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    for="interest"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="renting">Renting a property</option>
                    <option value="listing">Listing my property</option>
                    <option value="investing">Investment opportunities</option>
                    <option value="other">Other inquiries</option>
                  </select>
                </div>
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  ></textarea>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      class="h-4 w-4 text-red-500 border-neutral-300 rounded focus:ring-red-500"
                      required
                    />
                  </div>
                  <div class="ml-3">
                    <label for="privacy" class="text-sm text-neutral-700">
                      I agree to the
                      <a href="#" class="text-red-500 hover:text-red-600">
                        privacy policy
                      </a>
                      and consent to being contacted.
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-neutral-900 mb-6">
                  Our Contact Information
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-500"
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
                    </div>
                    <div>
                      <h4 class="text-lg font-medium text-neutral-900">
                        Visit Us
                      </h4>
                      <p class="text-neutral-600">
                        123 Rental Avenue, Suite 456
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-500"
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
                    </div>
                    <div>
                      <h4 class="text-lg font-medium text-neutral-900">
                        Call Us
                      </h4>
                      <p class="text-neutral-600">(123) 456-7890</p>
                      <p class="text-neutral-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-500"
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
                    </div>
                    <div>
                      <h4 class="text-lg font-medium text-neutral-900">
                        Email Us
                      </h4>
                      <p class="text-neutral-600">info@rentivo.com</p>
                      <p class="text-neutral-600">support@rentivo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Contact Image --> */}
              <div class="rounded-lg overflow-hidden h-64 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCY3VzdG9tZXIlMkJzZXJ2aWNlJTJCcmVwcmVzZW50YXRpdmUlMkJ3aXRoJTJCaGVhZHNldHxlbnwwfHx8fDE3NDU4NTM4MDB8MA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Customer Service Representative"
                  class="w-full h-full object-cover"
                />
              </div>

              {/* <!-- Business Hours --> */}
              <div class="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-neutral-900 mb-4">
                  Business Hours
                </h4>
                <ul class="space-y-2">
                  <li class="flex justify-between">
                    <span class="text-neutral-600">Monday - Friday</span>
                    <span class="font-medium text-neutral-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </li>
                  <li class="flex justify-between">
                    <span class="text-neutral-600">Saturday</span>
                    <span class="font-medium text-neutral-900">
                      10:00 AM - 4:00 PM
                    </span>
                  </li>
                  <li class="flex justify-between">
                    <span class="text-neutral-600">Sunday</span>
                    <span class="font-medium text-neutral-900">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Map Section --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-6 text-center">
              Find Us on the Map
            </h3>
            <div class="bg-neutral-100 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center">
                <img
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTJCY3VzdG9tZXIlMkJzZXJ2aWNlJTJCcmVwcmVzZW50YXRpdmUlMkJ3aXRoJTJCaGVhZHNldHxlbnwwfHx8fDE3NDU4NTM4MDB8MA&ixlib=rb-4.0.3&q=80&w=400"
                  alt="Map Location"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Meet Our Team --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-6 text-center">
              Meet Our Team
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* <!-- Team Member 1 --> */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTJCcHJvcGVydHklMkJtYW5hZ2VyJTJCd2l0aCUyQnNtYXJ0cGhvbmV8ZW58MHx8fHwxNzQ1ODUzODAwfDA&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Sarah Johnson"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h4 class="text-lg font-semibold text-neutral-900">
                  Sarah Johnson
                </h4>
                <p class="text-neutral-600">Property Manager</p>
              </div>

              {/* <!-- Team Member 2 --> */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTJCcHJvcGVydHklMkJtYW5hZ2VyJTJCd2l0aCUyQnNtYXJ0cGhvbmV8ZW58MHx8fHwxNzQ1ODUzODAwfDA&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Michael Rodriguez"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h4 class="text-lg font-semibold text-neutral-900">
                  Michael Rodriguez
                </h4>
                <p class="text-neutral-600">Leasing Consultant</p>
              </div>

              {/* <!-- Team Member 3 --> */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTJCcHJvcGVydHklMkJtYW5hZ2VyJTJCd2l0aCUyQnNtYXJ0cGhvbmV8ZW58MHx8fHwxNzQ1ODUzODAwfDA&ixlib=rb-4.0.3&q=80&w=400"
                    alt="David Chen"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h4 class="text-lg font-semibold text-neutral-900">
                  David Chen
                </h4>
                <p class="text-neutral-600">Real Estate Agent</p>
              </div>

              {/* <!-- Team Member 4 --> */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1554774853-719586f82d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTJCcHJvcGVydHklMkJtYW5hZ2VyJTJCd2l0aCUyQnNtYXJ0cGhvbmV8ZW58MHx8fHwxNzQ1ODUzODAwfDA&ixlib=rb-4.0.3&q=80&w=400"
                    alt="Emily Taylor"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h4 class="text-lg font-semibold text-neutral-900">
                  Emily Taylor
                </h4>
                <p class="text-neutral-600">Customer Relations</p>
              </div>
            </div>
          </div>

          {/* <!-- FAQ Section --> */}
          <div class="mt-16">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- FAQ Item 1 --> */}
              <div class="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-neutral-900 mb-2">
                  How do I schedule a property viewing?
                </h4>
                <p class="text-neutral-600">
                  You can schedule a viewing directly through our website by
                  clicking the "Schedule a Tour" button on any property listing,
                  or contact our team via phone or email.
                </p>
              </div>

              {/* <!-- FAQ Item 2 --> */}
              <div class="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-neutral-900 mb-2">
                  What documents do I need for application?
                </h4>
                <p class="text-neutral-600">
                  You'll need identification, proof of income, employment
                  verification, rental history, and references. Our application
                  process is streamlined to make it easy for you.
                </p>
              </div>

              {/* <!-- FAQ Item 3 --> */}
              <div class="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-neutral-900 mb-2">
                  How long does the application process take?
                </h4>
                <p class="text-neutral-600">
                  Our application review typically takes 24-48 hours once all
                  required documents are submitted. We work quickly to help you
                  secure your new home.
                </p>
              </div>

              {/* <!-- FAQ Item 4 --> */}
              <div class="bg-neutral-50 rounded-lg p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-neutral-900 mb-2">
                  Do you accept pets in your properties?
                </h4>
                <p class="text-neutral-600">
                  Many of our properties are pet-friendly, though policies vary
                  by location. Pet deposits or monthly pet rent may apply. Check
                  individual listings for details.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- CTA Section --> */}
          <div class="mt-16 bg-neutral-50 rounded-lg p-8 md:p-12 text-center">
            <h3 class="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Find Your New Home?
            </h3>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              Our team is standing by to help you find the perfect rental
              property that meets all your needs.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Browse Properties
              </a>
              <a
                href="tel:1234567890"
                class="bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Form Submission Success Modal (Hidden by default) --> */}
      <div
        id="formSuccessModal"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden"
        aria-modal="true"
        aria-hidden="true"
      >
        <div class="bg-white rounded-lg max-w-md w-full p-6 shadow-xl relative">
          <button
            id="closeModal"
            class="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-neutral-900 mb-2">
              Message Sent Successfully!
            </h3>
            <p class="text-neutral-600 mb-6">
              Thank you for contacting us. Our team will get back to you within
              24 hours.
            </p>
            <button
              id="modalCloseBtn"
              class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* <script>
    // Contact Form Submission and Modal Handling
    document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById("contactForm");
      const formSuccessModal =
        document.getElementById("formSuccessModal");
      const closeModal = document.getElementById("closeModal");
      const modalCloseBtn = document.getElementById("modalCloseBtn");
      const body = document.body;
      let lastActiveElement = null;

      // Form submission handler
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          lastActiveElement = document.activeElement;

          // Simulate form submission (would be replaced with actual AJAX call)
          setTimeout(() => {
            openModal();
            contactForm.reset();
          }, 500);
        });
      }

      // Open modal function
      function openModal() {
        formSuccessModal.classList.remove("hidden");
        body.style.overflow = "hidden";
        formSuccessModal.setAttribute("aria-hidden", "false");

        // Focus trap - focus the close button
        setTimeout(() => {
          closeModal.focus();
        }, 100);
      }

      // Close modal function
      function closeModalFunc() {
        formSuccessModal.classList.add("hidden");
        body.style.overflow = "";
        formSuccessModal.setAttribute("aria-hidden", "true");

        // Return focus to the last active element
        if (lastActiveElement) {
          lastActiveElement.focus();
        }
      }

      // Close button click handler
      if (closeModal) {
        closeModal.addEventListener("click", closeModalFunc);
      }

      // Modal close button click handler
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeModalFunc);
      }

      // Close on background click
      formSuccessModal.addEventListener("click", function (e) {
        if (e.target === formSuccessModal) {
          closeModalFunc();
        }
      });

      // Close on ESC key press
      document.addEventListener("keydown", function (e) {
        if (
          e.key === "Escape" &&
          !formSuccessModal.classList.contains("hidden")
        ) {
          closeModalFunc();
        }
      });

      // Focus trap
      formSuccessModal.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
          const focusableElements = formSuccessModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement =
            focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      });
    });
  </script> */}
    </div>
  );
};

export default Contact;
