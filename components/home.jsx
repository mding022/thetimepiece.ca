"use client";

import { Button } from "@/components/ui/button";
import {
  Clock,
  ShieldCheck,
  Sparkles,
  Wallet,
  Truck,
  PackageCheck,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function ModernWatchLanding() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only the first time it's in view
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  const [isScrolling, setIsScrolling] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  // Handle scroll event to trigger fade-out
  useEffect(() => {
    const handleScroll = () => setIsScrolling(true);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1500); // 2-second delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <header className="py-4 px-6 bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-center space-x-6">
          <h1 className="text-lg text-center font-serif flex-grow">
            <motion.span
              initial={{ opacity: 0, paddingRight: '3rem' }} // Initial state
              animate={{ opacity: 1, paddingRight: '4.5rem' }} // End state
              transition={{ duration: 0.5, delay: 1.3 }} // Animation duration and delay
              className="text-base font-sans font-semibold text-zinc-400 hover:underline underline-offset-4"
            >
              <a href="#">About Us</a>
            </motion.span>

            <span className="text-lg">the</span>
            <span className="text-2xl">Timepiece</span>
            <span className="text-base text-stone-400">.ca</span>

            <motion.span
              initial={{ opacity: 0, paddingLeft: '3rem' }} // Initial state
              animate={{ opacity: 1, paddingLeft: '4.5rem' }} // End state
              transition={{ duration: 0.5, delay: 1.7 }} // Animation duration and delay
              className="text-base font-sans font-semibold text-zinc-400 hover:underline underline-offset-4"
            >
              <a href="#">About Us</a>
            </motion.span>
          </h1>
        </div>
      </header>
      <main className="relative flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed inset-0 w-full h-full object-cover filter grayscale brightness-50 -z-10 fadeInAnimation"
            aria-hidden="true"
          >
            <source
              src="https://cdn.pixabay.com/video/2024/03/18/204582-925146042_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block"
              >
                Affordable,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block"
              >
                &nbsp;Luxurious.
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl font-semibold mb-8 text-stone-200"
            >
              Discover our collection of premium quality modded watches.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-200 text-lg font-bold"
              >
                <Link href="/shop">BROWSE OUR SHOP</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolling || !showArrow ? 0 : 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute bottom-4">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>

        <section className="py-20 px-4 bg-transparent">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={ref}
          >
            {[
              {
                icon: Clock,
                title: "Premium Movement",
                description:
                  "All our watches come with automatic movements for a smooth and reliable sweep.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Materials",
                description:
                  "We only use stainless steel and sapphire glass for our watches.",
              },
              {
                icon: Sparkles,
                title: "Elegant Designs",
                description:
                  "Styles for every occasion; formal, streetwear - we have it all.",
              },
              {
                icon: Wallet,
                title: "Affordable Luxury",
                description: "Premium quality without the premium price",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border-gray-400 border rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-zinc-50" />
                <h4 className="text-xl font-semibold mb-2 text-zinc-50">
                  {feature.title}
                </h4>
                <p className="text-zinc-100">{feature.description}</p>
              </motion.div>

            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Our Shipping Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Canada-wide Shipping",
                  description:
                    "We offer free, fast shipping across Canada on all watches.",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description:
                    "We partner with reliable courier services so your watch reaches you quickly.",
                },
                {
                  icon: PackageCheck,
                  title: "Placeholder",
                  description:
                    "placeholderplace holderplacehol derplaceholderplaceh olderplaceholder ",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border-gray-400 border rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <step.icon className="w-12 h-12 mb-4 text-white" />
                  <h4 className="text-xl font-semibold mb-2 text-zinc-100">
                    {step.title}
                  </h4>
                  <p className="text-zinc-100">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-transparent text-white text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} The Timepiece. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
