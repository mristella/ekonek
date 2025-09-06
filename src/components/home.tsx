"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const sdgsRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    { title: "Digital Rights Revolution in Manila", impact: "Trained 2,000+ advocates across 15 communities" },
    { title: "Climate Action Network Kenya", impact: "Planted 10,000 trees, reached 50 schools" },
    { title: "Human Rights Education Brazil", impact: "Educated 5,000 students on fundamental rights" },
  ];

  const sdgs = [
    { number: "1", title: "No Poverty" },
    { number: "4", title: "Quality Education" },
    { number: "5", title: "Gender Equality" },
    { number: "10", title: "Reduced Inequalities" },
    { number: "13", title: "Climate Action" },
    { number: "16", title: "Peace & Justice" },
  ];

  const steps = [
    { title: "Share", description: "Upload educational resources and guides to our open library." },
    { title: "Adapt", description: "Customize resources to fit your community needs." },
    { title: "Show Impact", description: "Document outcomes and inspire other communities." },
  ];

  // Animate sections on scroll
  useEffect(() => {
    const sections = [heroRef, aboutRef, sdgsRef, storiesRef, howItWorksRef];
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.from(ref.current.children, {
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });
  }, []);

  // Auto-rotate stories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-slate-800 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 opacity-30 -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
          <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
            Connected by Youth.
          </span>
          <span className="block bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent mt-2">
            Powered by Knowledge.
          </span>
          <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mt-2">
            Driven by Community.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl">
          E-Konektado is a youth-led, open-access platform empowering communities to create sustainable impact worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold transition transform hover:scale-105">
            Join Now <ArrowRight />
          </button>
          <button className="bg-white border border-orange-500 hover:bg-orange-50 text-orange-600 px-8 py-3 rounded-full flex items-center gap-2 font-semibold transition transform hover:scale-105">
            <Play className="w-4 h-4" /> Explore
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About E-Konektado</h2>
        <p className="text-slate-600 text-lg md:text-xl">
          A youth-led, open-access, community-driven platform helping educators, advocates, and young changemakers create meaningful impact.
        </p>
      </section>

      {/* SDGs Section */}
      <section ref={sdgsRef} className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Aligned with SDGs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-xl font-bold text-orange-500 mb-2">{sdg.number}</div>
              <div className="font-semibold text-slate-700">{sdg.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section ref={storiesRef} className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative bg-white rounded-xl shadow-lg p-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">{successStories[currentStory].title}</h3>
          <p className="text-slate-600">{successStories[currentStory].impact}</p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)}
              className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setCurrentStory((prev) => (prev + 1) % successStories.length)}
              className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-4 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
        <button className="bg-white text-orange-500 px-10 py-4 rounded-full font-semibold hover:scale-105 transition transform">
          Sign Up Now
        </button>
      </section>
    </main>
  );
}
