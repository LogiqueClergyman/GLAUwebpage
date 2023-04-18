import React from "react";
import image5 from "./zyro-image56.png";
import logo from "./img1.jpg";
import img1 from "./img2.jpg";
import img2 from "./img3.png";

export default function About_us() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={image5}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="center"
                    src=""
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    {" "}
                    Shri Ganeshi Lal Agrawal
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    This is what led to the foundation of a milestone at the
                    karmabhoomi of the versatile and sagacious Lord Krishna.
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  It was the year 1991 Shri Narayan Das Agrawal decided to
                  fulfil the dream of his father, Late Shri Ganeshi Lal Agrawal,
                  of establishing an institute for quality education to the
                  people and the region & beyond. and initiated Sri Jagannath
                  Prasad Ganeshi Lal Bazaz Charitable Trust Samiti in an attempt
                  to make the holy city Mathura a recognized destination for
                  knowledge seekers from different spheres of life. This is what
                  led to the foundation of a milestone at the karmabhoomi of the
                  versatile and sagacious Lord Krishna.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-24 h-full bg-indigo-500"></div>
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Space The Final Frontier
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters
                  selfies quinoa yuccie synth meditation iPhone intelligentsia
                  prism tofu. Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={logo}
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Institute of National Importance
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  The functioning of NITK is governed by NIT Act, 2007 and by
                  the rules laid down by the Government of India from time to
                  time. NITK is governed by the Board of Governors which
                  consists of representatives of the Government of India,
                  Government of Karnataka, Alumni, Industry and other bodies.
                  The Chairman of the Board of Governors is nominated by the
                  Government of India.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={img2}
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Lush Green Campus
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  The campus with 163 acres sets in sylvan surroundings along
                  the coastline of Karnataka. It is a residential and
                  self-sufficient campus equipped with all the resources.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={img1}
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Highly Qualified Faculty
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Faculty members with rich academic and research experience
                  gained from renowned indian and abroad institutes/labs strive
                  towards imparting knowledge and honing the technical and
                  management skills of about 10000 students.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
