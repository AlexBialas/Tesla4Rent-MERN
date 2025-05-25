import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import CTASection from "../components/common/CTASection";
import StatsSection from "../components/common/StatsSection";
import EnergyLine from "../components/common/EnergyLine";
import {
  FaBolt,
  FaLeaf,
  FaMapMarkerAlt,
  FaCar,
  FaClock,
  FaChargingStation,
  FaCheckCircle,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Parallax } from "react-parallax";
import parallax1 from "/src/assets/parallax1.png";
import parallax2 from "/src/assets/parallax2.png";
import parallax3 from "/src/assets/parallax3.png";

const testimonials = [
  {
    name: "Anna",
    text: "Fantastic service and the car was a dream!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marek",
    text: "Tesla for the weekend? Best decision ever.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Sophie",
    text: "Seamless booking and delivery. Loved it!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Liam",
    text: "Super clean, techy and fun. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const fleetData = [
  {
    model: "Model S",
    image: "/images/model-s.jpg",
    specs: ["637 km range", "2.1s 0-100 km/h", "5 seats", "1,020 hp"],
    price: "499 €/day",
  },
  {
    model: "Model 3",
    image: "/images/model-3.jpg",
    specs: ["547 km range", "3.3s 0-100 km/h", "5 seats", "450 hp"],
    price: "349 €/day",
  },
  {
    model: "Model X",
    image: "/images/model-x.jpg",
    specs: ["536 km range", "2.6s 0-100 km/h", "6 seats", "1,020 hp"],
    price: "549 €/day",
  },
  {
    model: "Model Y",
    image: "/images/model-y.jpg",
    specs: ["533 km range", "4.8s 0-100 km/h", "5 seats", "384 hp"],
    price: "379 €/day",
  },
  {
    model: "Cybertruck",
    image: "/images/cybertruck.jpg",
    specs: ["547 km range", "2.9s 0-100 km/h", "6 seats", "845 hp"],
    price: "599 €/day",
  },
  {
    model: "Roadster",
    image: "/images/roadster.jpg",
    specs: ["1,000 km range", "1.9s 0-100 km/h", "4 seats", "1,500 hp"],
    price: "499 €/day",
  },
  {
    model: "Model S Plaid",
    image: "/images/model-s-plaid.jpg",
    specs: ["652 km range", "3.2s 0-100 km/h", "5 seats", "670 hp"],
    price: "399 €/day",
  },
  {
    model: "Model 3 Performance",
    image: "/images/model-3-performance.jpg",
    specs: ["491 km range", "5.6s 0-100 km/h", "5 seats", "283 hp"],
    price: "299 €/day",
  },  {
    model: "Model x Plaid",
    image: "/images/model-x-plaid.jpg",
    specs: ["491 km range", "5.6s 0-100 km/h", "5 seats", "283 hp"],
    price: "399 €/day",
  },  {
    model: "Model Y Long Range",
    image: "/images/model-y-long-range.jpg",
    specs: ["491 km range", "5.6s 0-100 km/h", "5 seats", "283 hp"],
    price: "299 €/day",
  },
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="text-white bg-black scroll-smooth">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-green-400 origin-left z-50"
      />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* Parallax3 - Hauptebene */}
        <div className="absolute inset-0">
          <Parallax
            bgImage={parallax3}
            strength={500}
            className="w-full h-full"
            bgImageStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="absolute inset-0 bg-opacity-60" />
            <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center h-full mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Experience Tesla</h1>
              <p className="text-lg md:text-xl mb-8 text-center">
                Luxury. Performance. Sustainability. Rent a Tesla today and
                drive the future.
              </p>
              <div className="flex justify-center gap-4 flex-wrap mb-8">
                <a href="#fleet">
                  <button className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
                    Explore Fleet
                  </button>
                </a>
                <Link to="contact">
                  <button className="border-2 border-white text-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </Parallax>
        </div>

        {/* Parallax2 - Mittlere Ebene (nur auf Desktop sichtbar) */}
        <div className="hidden lg:block absolute inset-0">
          <Parallax
            bgImage={parallax2}
            strength={300}
            className="w-full h-full"
            bgImageStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Parallax1 - Hintergrundebene */}
        <div className="absolute inset-0">
          <Parallax
            bgImage={parallax1}
            strength={100}
            className="w-full h-full"
            bgImageStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </section>

      {/* Fleet */}
      <section
        id="fleet"
        className="min-h-screen px-6 py-28 bg-white text-black relative"
        data-aos="fade-left"
      >
        <h2 className="text-4xl font-bold text-center mb-14">Our Fleet</h2>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-10"
          >
            {fleetData.map((car, index) => (
              <SwiperSlide key={index}>
                <div className={`relative transition-all duration-300 ${activeIndex === index ? 'scale-110 z-10' : 'scale-90 opacity-90'}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300">
                    <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                      <img
                        src={car.image}
                        alt={car.model}
                        className="max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {car.model}
                      </h3>
                      <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        {car.specs.map((spec, i) => (
                          <li key={i}>• {spec}</li>
                        ))}
                      </ul>
                      <p className="font-semibold text-gray-800">{car.price}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 -ml-4"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <butto
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 -mr-4"
          >
            <FaChevronRight className="text-xl" />
          </butto>
        </div>
      </section>

      {/* Why Tesla4Rent */}
      <section
        id="why"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-28"
        data-aos="fade-right"
      >
        <h2 className="text-4xl font-bold mb-14 text-center">
          Why Tes4Rent?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {[
            {
              icon: <FaBolt className="text-yellow-400" />,
              text: "Fully Electric Fleet",
            },
            {
              icon: <FaChargingStation className="text-green-400" />,
              text: "Free Charging Included",
            },
            {
              icon: <FaClock className="text-blue-400" />,
              text: "5-Minute Online Booking",
            },
            {
              icon: <FaCar className="text-red-400" />,
              text: "Modern, Maintained Teslas",
            },
            {
              icon: <FaCheckCircle className="text-purple-400" />,
              text: "Full Insurance Coverage",
            },
            {
              icon: <FaLeaf className="text-emerald-400" />,
              text: "Zero Emissions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 transition rounded-xl p-6 shadow-lg flex items-start gap-4"
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="pt-28 pb-36 px-6 bg-gray-100 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-black mb-10">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <div className="font-semibold text-black">
                  {testimonial.name}
                </div>
                <div className="text-yellow-500 text-sm mb-2">★★★★★</div>
                <p className="text-sm text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-black mb-10">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
          <div className="bg-gray-100 rounded-xl p-8 shadow-xl text-black space-y-4">
            <p className="text-lg">
              <FaPhoneAlt className="inline-block mr-2 text-black" /> +49 600
              000 000
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline-block mr-2 text-black" />{" "}
              support@tes4rent.pl
            </p>
            <p className="text-gray-600">Mon–Fri: 8:00 – 18:00</p>
            <p className="text-lg">
              <FaMapMarkerAlt className="inline-block mr-2 text-black" /> Berlin
              & Surroundings
            </p>
            <p className="text-gray-600">Delivery available to your location</p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-xl">
            <iframe
              className="w-full h-64 md:h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.9828451004384!2d13.38885931578784!3d52.517036979811735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c79f0b6c03%3A0x42b4a7f97cd8b838!2sBerlin!5e0!3m2!1sen!2sde!4v1686330931496!5m2!1sen!2sde"
              allowFullScreen
              loading="lazy"
              title="Berlin Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final Sections */}
      <StatsSection />
      <EnergyLine />
      <CTASection />
    </div>
  );
};

export default Home;