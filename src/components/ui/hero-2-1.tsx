"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Hero3DScene } from "./hero-3d-scene";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <span className="font-bold">⚡</span>
            </div>
            <span className="ml-2 text-xl font-bold text-white">ARPK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <NavItem label="Features" />
              <NavItem label="Pricing" />
              <NavItem label="About" />
              <NavItem label="Contact" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu with animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <span className="font-bold">⚡</span>
                  </div>
                  <span className="ml-2 text-xl font-bold text-white">
                    ARPK
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="mt-8 flex flex-col space-y-6">
                <MobileNavItem label="Features" />
                <MobileNavItem label="Pricing" />
                <MobileNavItem label="About" />
                <MobileNavItem label="Contact" />
                <div className="pt-4">
                  <button className="w-full justify-start border border-gray-700 text-white">
                    Sign In
                  </button>
                </div>
                <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                  Get Started Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            AI-powered website building revolution!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Build Websites with AI Magic
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Create stunning, professional websites in minutes with ARPK's AI-powered builder. 
            No coding required, just describe your vision and watch it come to life.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
              Start Building Free
            </button>
            <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          {/* 3D Scene replacing the image */}
          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div className="absolute inset-0 rounded-2xl shadow-2xl bg-gradient-to-b from-purple-900/20 to-blue-900/20 blur-3xl opacity-60" />
            <Hero3DScene className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="flex items-center text-sm text-gray-300 hover:text-white">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  );
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  );
}

export { Hero2 };
