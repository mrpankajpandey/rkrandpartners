import { Button } from "@/components/ui/button";
import { useState } from "react";

const slides = [
  {
    src: "./appointment-bg.jpg",
    alt: "Slide 1",
    title: "Dedicated Tax Lawyers Team For Quick Resolution",
    description: "Our Motive to Talk With Respective Taxpayers on call & Provide Exact Legal Openion to Resolve Tax Related issues as soon as possible– We are awaiting Taxpayers Call",
    buttonText: "Book Appointment",
  },
  {
    src: "./contact-bg.jpg",
    alt: "img",
    title: "Our Legal Team Help To Solve Your Tax Issues",
    buttonText: "Book Appointment",
    description: "Quickly observe your query according your’s thought & resolve with guidence as per act."
  },
  {
    src: "./about-us-1-1-bg.jpg",
    alt: "img",
    title: "We Are Expert In A Lot Of Legal Area",
    buttonText: "Book Appointment",
    description: "Expertise legal team is awailable to resolve regarding Tax Queries / Filing / Amendment / Revocation Etc. & And For Proper Complaince On Several Tax Related Notices / Issues."
  },
  {
    src: "./about-us-1-1.jpg",
    alt: "img",
    title: "Get in touch with us for your Legal Issues",
    buttonText: "Book Appointment",
    description: "Quickly observe your query according your’s thought & resolve with guidence as per act."
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
      <div className="relative h-[24rem] md:h-[30rem] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute block w-full h-full object-cover opacity-25"
            />
            {/* Text and Button Overlay */}
            {index === currentIndex && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 md:px-20 text-center text-white bg-black/40">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                <Button className="px-6 py-2 w-44 md:w-48 bg-blue-700 hover:bg-blue-900 rounded-full text-white text-base md:text-lg">
                  {slide.buttonText}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-300"}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}
