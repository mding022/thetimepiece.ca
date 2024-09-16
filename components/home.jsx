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

export default function ModernWatchLanding() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only the first time it's in view
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <header className="py-4 px-6 bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-semibold text-center">
          The Timepiece, Ottawa
        </h1>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            className="absolute w-full h-full object-cover filter grayscale opacity-40 brightness-50"
            aria-hidden="true"
          >
            <source
              src="https://cdn.pixabay.com/video/2020/04/23/37006-413208203_large.mp4"
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
              Affordable, Luxurious.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl mb-8"
            >
              Discover our collection of premium quality modded watches.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-200"
              >
                <Link href="/shop">Browse Our Shop</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
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
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-gray-900" />
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Shipping Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: PackageCheck,
                  title: "Careful Packaging",
                  description:
                    "Each watch is meticulously packaged to ensure it arrives in perfect condition.",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description:
                    "We partner with reliable courier services for quick and secure delivery.",
                },
                {
                  icon: Globe,
                  title: "Global Shipping",
                  description:
                    "We ship worldwide, bringing our watches to you, wherever you are.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <step.icon className="w-12 h-12 mb-4 text-gray-900" />
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-900 text-white text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Timeless Elegance. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
