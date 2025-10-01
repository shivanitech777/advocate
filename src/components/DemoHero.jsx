"use client"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    title: "Your Legal Partner for Every Step",
    subtitle: "Advocate • Legal Counsel",
    description:
      "Offering reliable representation and guidance for individuals and businesses. Together, we build strategies that protect your future.",
    btn1: "Book Consultation",
    btn2: "Explore Services",
    image: "/hii.jpg",
  },
  {
    title: "Justice Made Accessible",
    subtitle: "Trusted Advocate",
    description:
      "Clear communication, honest advice, and effective legal solutions — simplifying complex cases for your peace of mind.",
    btn1: "Schedule a Call",
    btn2: "View Practice Areas",
    image: "/hall.jpg",
  },
  {
    title: "Guiding You With Integrity",
    subtitle: "Your Legal Guide",
    description:
      "Combining years of experience with a client-first approach, ensuring personalized solutions for every legal challenge.",
    btn1: "Get Started",
    btn2: "Learn More",
    image: "/hn.jpg",
  },
]

const DemoHero = () => {
  return (
    <div className="w-full relative">
      <Carousel
        plugins={[
          Autoplay({ delay: 3000 }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
                  
                
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                  >
                    <p className="text-gray-400 font-medium mb-3">{slide.subtitle}</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 font-serif">
                      {slide.title}
                    </h1>
                    <p className="text-gray-300 mb-8 max-w-xl font-serif mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white rounded-md shadow hover:bg-green-800 transform transition duration-200"
                      >
                        {slide.btn1}
                      </a>
                      <a
                        href="/services"
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-white rounded-md hover:bg-[#B69D75] hover:text-black transition"
                      >
                        {slide.btn2}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative w-80 h-80 sm:w-96 sm:h-[450px] lg:w-[450px]   rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  )
}

export default DemoHero
