"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTag, setActiveTag] = useState("All");

  // Sample story data with richer details
  const stories = [
    {
      title: "Youth Tech Workshop",
      excerpt: "A community-driven tech literacy project for students.",
      image: "/assets/sample-story.jpg",
      link: "/stories/tech-workshop",
      author: "Maria Lopez",
      date: "August 12, 2025",
      category: "Technology",
      likes: 12,
    },
    {
      title: "Environmental Action Day",
      excerpt: "Volunteers planted 500 trees in local communities.",
      image: "/assets/sample-story.jpg",
      link: "/stories/environment-day",
      author: "John Carter",
      date: "July 25, 2025",
      category: "Environment",
      likes: 34,
    },
    {
      title: "Health Awareness Drive",
      excerpt: "Educating communities about health & wellness.",
      image: "/assets/sample-story.jpg",
      link: "/stories/health-awareness",
      author: "Aisha Rahman",
      date: "June 15, 2025",
      category: "Health",
      likes: 20,
    },
  ];

  // Sample video highlights with descriptions
  const videos = [
    { title: "Project Clip: Tech Workshop", videoUrl: "/assets/videos/tech.mp4", description: "Highlights from our hands-on coding and robotics workshop." },
    { title: "Community Tree Planting", videoUrl: "/assets/videos/trees.mp4", description: "Our volunteers planting 500 trees for a greener future." },
  ];

  // Tags for filtering
  const tags = ["All", "Technology", "Human Rights", "Environment", "Education", "Health"];

  // GSAP animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".story-card"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  const filteredStories =
    activeTag === "All" ? stories : stories.filter((story) => story.category === activeTag);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/40 to-green-200/40 top-10 left-10 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-green-200/30 to-orange-200/30 bottom-20 right-16 blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Community Stories</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore inspiring stories and project highlights from our youth advocates making an impact worldwide.
        </p>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className={`rounded-full text-sm transition ${
                activeTag === tag ? "bg-orange-500 text-white" : "hover:bg-orange-50"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredStories.map((story) => (
            <div
              key={story.title}
              className="story-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden group"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{story.excerpt}</p>
                <p className="text-xs text-gray-500 mb-4">
                  By {story.author} • {story.date} • <span className="font-medium">{story.category}</span>
                </p>
                <div className="flex justify-between items-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                    <a href={story.link}>Read More</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-gray-600 hover:text-red-500 rounded-full"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{story.likes}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Video Highlights</h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Watch our key initiatives come to life through short impactful videos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              <video
                src={video.videoUrl}
                controls
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-left">
                <h4 className="text-md font-semibold">{video.title}</h4>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
