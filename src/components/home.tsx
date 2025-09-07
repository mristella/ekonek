"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users,
  MapPin,
  BookOpen,
  Share,
  Settings,
  TrendingUp,
  Handshake,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// ---------------- Types ----------------
interface SuccessStory {
  title: string;
  impact: string;
  description: string;
  location: string;
  category: string;
  participants: string;
  communities: string;
}

// ---------------- Data (explicit, readable) ----------------
const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Digital Rights Revolution in Manila",
    impact: "Trained 2,000+ advocates across 15 communities",
    description:
      "Empowering Filipino youth with digital literacy skills and human rights education, creating a ripple effect of positive change across Metro Manila.",
    location: "Philippines",
    category: "Digital Literacy",
    participants: "2,000+",
    communities: "15",
  },
  {
    title: "Climate Action Network Kenya",
    impact: "Planted 10,000 trees, reached 50 schools",
    description:
      "Building environmental consciousness among Kenyan students while creating sustainable green spaces and promoting climate action awareness.",
    location: "Kenya",
    category: "Environmental Action",
    participants: "5,000+",
    communities: "50",
  },
  {
    title: "Human Rights Education Brazil",
    impact: "Educated 5,000 students on fundamental rights",
    description:
      "Strengthening democratic values and human rights understanding among Brazilian youth through innovative educational programs.",
    location: "Brazil",
    category: "Human Rights",
    participants: "5,000+",
    communities: "25",
  },
];

// ---------------- Subcomponents ----------------
function SuccessStoriesCarousel() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SUCCESS_STORIES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const showPrev = () => {
    setCurrent((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };
  const showNext = () => {
    setCurrent((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const story = SUCCESS_STORIES[current];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden p-8 md:p-12">
        {/* Decorative gradients kept subtle so text stays readable */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-tr from-orange-200 to-pink-200 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-green-200 to-teal-200 opacity-30 blur-3xl" />

        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
              {story.location}
            </div>
            <div className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
              {story.category}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            {story.title}
          </h3>

          {/* Impact line */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full mb-4">
            <Handshake className="w-4 h-4" />
            <span>{story.impact}</span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            {story.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="text-center p-4 rounded-xl bg-orange-50 border border-orange-100">
              <div className="text-2xl font-extrabold text-orange-600">{story.participants}</div>
              <div className="text-xs uppercase tracking-wide text-orange-700/80">Participants</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-green-50 border border-green-100">
              <div className="text-2xl font-extrabold text-green-600">{story.communities}</div>
              <div className="text-xs uppercase tracking-wide text-green-700/80">Communities</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-10 flex justify-center gap-4">
          <Button onClick={showPrev} variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button onClick={showNext} variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots (explicit, not generated) */}
        <div className="relative z-10 flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrent(0)}
            aria-label="Show story 1"
            className={`w-3 h-3 rounded-full transition-all ${current === 0 ? "bg-orange-500 scale-125" : "bg-gray-300"}`}
          />
          <button
            onClick={() => setCurrent(1)}
            aria-label="Show story 2"
            className={`w-3 h-3 rounded-full transition-all ${current === 1 ? "bg-orange-500 scale-125" : "bg-gray-300"}`}
          />
          <button
            onClick={() => setCurrent(2)}
            aria-label="Show story 3"
            className={`w-3 h-3 rounded-full transition-all ${current === 2 ? "bg-orange-500 scale-125" : "bg-gray-300"}`}
          />
        </div>
      </div>
    </div>
  );
}

// ---------------- Page ----------------
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const sdgRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered animations (explicit per-section for clarity)
  useEffect(() => {
    const sections = [heroRef, aboutRef, impactRef, sdgRef, howRef, storiesRef, ctaRef];
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.from(ref.current.children, {
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
        });
      }
    });
  }, []);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-800 overflow-x-hidden">
      {/* ---------------- Hero Section (explicit image background, safe overlay) ---------------- */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.2)), url('/assets/heroPic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative floating circles (standard Tailwind only) */}
        <div className="pointer-events-none absolute w-80 h-80 top-16 left-10 rounded-full bg-orange-400/30 blur-3xl" />
        <div className="pointer-events-none absolute w-72 h-72 bottom-10 right-10 rounded-full bg-purple-400/30 blur-3xl" />
        <div className="pointer-events-none absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight text-white drop-shadow-xl">
            <span className="block">Connected by Youth.</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-green-500 bg-clip-text text-transparent">
              Powered by Knowledge.
            </span>
            <span className="block">Driven by Community.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            E-Konektado is a youth-led, open-access platform empowering communities to create sustainable impact worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-xl px-8 py-6 text-base rounded-2xl"
              size="lg"
            >
              Join Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 shadow-lg px-8 py-6 text-base rounded-2xl"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" /> Explore
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- About Section (explicit boxes, strong contrast) ---------------- */}
      <section ref={aboutRef} className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">About E‑Konektado</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-14">
            We are a <span className="font-semibold">youth‑led, open‑access digital platform</span> that empowers grassroots changemakers worldwide. We bridge communities with essential knowledge, practical tools, and collaborative networks to create lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Youth‑Led</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Driven by passionate young leaders creating change from within their communities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-left">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Open‑Access</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Free resources and tools available to all changemakers, breaking down barriers to knowledge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Community‑Driven</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Built by communities, for communities, ensuring locally relevant and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Global Impact (explicit, no maps) ---------------- */}
      <section ref={impactRef} className="relative py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">Global Impact</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From local communities to global networks, see how E‑Konektado is creating meaningful change across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Countries</div>
              <div className="text-sm text-gray-600">Across 5 continents</div>
            </div>

            {/* Metric 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-rose-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">50,000+</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Youth Reached</div>
              <div className="text-sm text-gray-600">Active changemakers</div>
            </div>

            {/* Metric 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">200+</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Communities</div>
              <div className="text-sm text-gray-600">Grassroots impact</div>
            </div>

            {/* Metric 4 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-violet-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Resources Shared</div>
              <div className="text-sm text-gray-600">Open‑access materials</div>
            </div>
          </div>

          {/* CTA Pill */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold shadow-xl">
              <Globe className="w-5 h-5" /> Join Our Global Network
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SDGs (explicit cards) ---------------- */}
      <section ref={sdgRef} className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">Aligned with SDGs</h2>
          <p className="text-xl text-gray-700 mb-14 max-w-3xl mx-auto">
            Our mission directly contributes to achieving the United Nations Sustainable Development Goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* SDG 4 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-orange-600" />
              </div>
              <div className="text-4xl font-black text-orange-600 mb-2">SDG 4</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Quality Education</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.
              </p>
            </div>

            {/* SDG 9 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <Cpu className="w-12 h-12 text-sky-600" />
              </div>
              <div className="text-4xl font-black text-sky-600 mb-2">SDG 9</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Industry, Innovation & Infrastructure</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Building resilient infrastructure, promoting inclusive and sustainable industrialization and fostering innovation.
              </p>
            </div>

            {/* SDG 10 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-fuchsia-600" />
              </div>
              <div className="text-4xl font-black text-fuchsia-600 mb-2">SDG 10</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Reduced Inequalities</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Reducing inequality within and among countries through inclusive policies and practices.
              </p>
            </div>

            {/* SDG 17 */}
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 text-center">
              <div className="flex justify-center mb-4">
                <Handshake className="w-12 h-12 text-emerald-600" />
              </div>
              <div className="text-4xl font-black text-emerald-600 mb-2">SDG 17</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Partnerships for the Goals</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Strengthening the means of implementation and revitalizing global partnerships for sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- How It Works (explicit steps, connector lines on md+) ---------------- */}
      <section ref={howRef} className="relative py-24 px-4 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Three simple steps to join our global community of changemakers and start making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            {/* Connector lines (desktop only) */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-emerald-500 opacity-30" />

            {/* Step 1 */}
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-200 text-center">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-lg flex items-center justify-center shadow-lg">
                01
              </div>
              <div className="flex justify-center mb-6">
                <Share className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Share</h3>
              <p className="text-gray-700 leading-relaxed">
                Upload educational resources and guides to our open library for communities worldwide to access and benefit from.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-200 text-center">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-lg flex items-center justify-center shadow-lg">
                02
              </div>
              <div className="flex justify-center mb-6">
                <Settings className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Adapt</h3>
              <p className="text-gray-700 leading-relaxed">
                Customize resources to fit your community's unique needs, culture, and local challenges for maximum impact.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-200 text-center">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-lg flex items-center justify-center shadow-lg">
                03
              </div>
              <div className="flex justify-center mb-6">
                <TrendingUp className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Show Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Document outcomes and success stories to inspire other communities and create a network of positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Success Stories (carousel subcomponent) ---------------- */}
      <section ref={storiesRef} className="py-24 px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-12 text-gray-900">Success Stories</h2>
        <SuccessStoriesCarousel />
      </section>

      {/* ---------------- CTA Footer ---------------- */}
      <section
        ref={ctaRef}
        className="relative py-24 text-center px-4 bg-gradient-to-r from-orange-100 via-white to-green-100"
      >
        {/* Animated background accents kept subtle */}
        <div className="pointer-events-none absolute w-96 h-96 -top-10 left-10 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute w-80 h-80 -bottom-10 right-10 rounded-full bg-white/40 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex justify-center gap-8 mb-8 text-gray-800">
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7" />
              <span className="text-2xl font-bold">2,000+</span>
              <span className="text-lg">Active Members</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-7 h-7" />
              <span className="text-2xl font-bold">50+</span>
              <span className="text-lg">Countries</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of young changemakers creating positive impact in their communities. Your journey starts today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl shadow-xl">
              Sign Up Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-2 border-gray-300 hover:bg-gray-50 px-8 py-6 rounded-2xl">
              Learn More
            </Button>
          </div>

          <div className="mt-12 text-gray-600 text-sm">Free to join • Open source • Community driven</div>
        </div>
      </section>
    </main>
  );
}
