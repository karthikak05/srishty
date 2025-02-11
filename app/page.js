"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutUs from "@/components/home/About";
import Amenities from "@/components/home/Amenities";
import CelebrationsPage from "@/components/home/Celebrations";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Rooms from "@/components/home/Rooms";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 }, // Start from below
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // When the section reaches 85% of the viewport
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      {[
        <Hero/>,
        <AboutUs />,
        <Rooms />,
        <CelebrationsPage />,
        <Amenities />,
        <ContactUs />,
      ].map((Component, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="mb-[10%] opacity-0"
        >
          {Component}
        </section>
      ))}
      <Footer />
    </div>
  );
}
