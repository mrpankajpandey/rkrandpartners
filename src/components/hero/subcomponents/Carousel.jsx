import { Button } from "@/components/ui/button";
import { useState } from "react";

const slides = [
  {
    src: "./Carousel/appointment-bg.jpg",
    alt: "Slide 1",
    title: "Dedicated Tax Lawyers Team For Quick Resolution",
    description:"Our Motive to Talk With Respective Taxpayers on call & Provide Exact Legal Openion to Resolve Tax Related issues as soon as possible– We are awaiting Taxpayers Call",
    buttonText: "Book Appointment",
  },
  {
    src: "./Carousel/contact-bg.jpg",
    alt: "img",
    title: "Our Legal Team Help To Solve Your Tax Issues",
    buttonText: "Book Apointment",
    description:"Quickly observe your query according your’s thought & resolve with guidence as per act."
  },
  {
    src: "./Carousel/about-us-1-1-bg.jpg",
    alt: "img",
    title: "We Are Expert In A Lot Of Legal Area",
    buttonText: "Book Apointment",
    description:"Expertise legal team is awailable to resolve regarding Tax Queries / Filing / Amendment / Revocation Etc. & And For Proper Complaince On Several Tax Related Notices / Issues."
  },
  
  {
    src: "./Carousel/about-us-1-1.jpg",
    alt: "img",
    title: "Get in touch with us for your Legal Issues",
    buttonText: "Book Apointment",
    description:"Quickly observe your query according your’s thought & resolve with guidence as per act."
  },
  
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full pt-12" id="default-carousel">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden  md:h-[30rem]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out   ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute block w-full h-full object-cover opacity-25"
            />
            {/* Text and Button Overlay */}
            {index === currentIndex && (
              <div className="absolute inset-0 flex flex-col gap-4  items-center pt-32 pb-20 text-white bg-black/30 ">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 w-3xl">{slide.title}</h2>
                <p className= "w-3xl text-white text-sm lg:text-lg font-medium leading-relaxed mb-4">{slide.description}</p>
                <Button className="px-6 py-2 w-48 bg-blue-700 hover:bg-blue-900 rounded-full text-white text-lg">
                  {slide.buttonText}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white  rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
