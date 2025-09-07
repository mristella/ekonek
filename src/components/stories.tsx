"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Play, Clock, User, ArrowRight, Eye } from "lucide-react";
import { useState } from "react";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  author: string;
  date: string;
  category: string;
  likes: number;
  readTime: string;
  views: number;
}

interface VideoHighlight {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  duration: string;
  views: number;
}

export default function Stories() {
  const [activeTag, setActiveTag] = useState("All");
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());

  // Enhanced sample stories data
  const stories: Story[] = [
    {
      id: "1",
      title: "Youth Tech Workshop Empowers 200 Students",
      excerpt:
        "A transformative hands-on coding and robotics workshop brought cutting-edge tech literacy to underprivileged youth across the city.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      link: "/stories/tech-workshop",
      author: "Maria Lopez",
      date: "Dec 15, 2024",
      category: "Technology",
      likes: 128,
      readTime: "4 min read",
      views: 2340,
    },
    {
      id: "2",
      title: "500 Trees Planted for a Greener Tomorrow",
      excerpt:
        "Community volunteers united to fight climate change with a massive reforestation drive that transformed our local environment.",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
      link: "/stories/environment-day",
      author: "John Carter",
      date: "Nov 28, 2024",
      category: "Environment",
      likes: 95,
      readTime: "3 min read",
      views: 1890,
    },
    {
      id: "3",
      title: "Health Awareness Drive Reaches 1,000 Residents",
      excerpt:
        "Comprehensive workshops on wellness, nutrition, and first aid empowered local communities with life-saving knowledge.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      link: "/stories/health-awareness",
      author: "Dr. Aisha Rahman",
      date: "Nov 10, 2024",
      category: "Health",
      likes: 76,
      readTime: "5 min read",
      views: 1456,
    },
    {
      id: "4",
      title: "Digital Literacy Program Transforms Rural Education",
      excerpt:
        "Bringing modern technology to remote schools, connecting students with global learning opportunities.",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg",
      link: "/stories/digital-literacy",
      author: "Sarah Kim",
      date: "Oct 22, 2024",
      category: "Education",
      likes: 112,
      readTime: "6 min read",
      views: 2100,
    },
    {
      id: "5",
      title: "Community Food Bank Feeds 500 Families Weekly",
      excerpt:
        "Volunteers organize weekly food distribution, ensuring no family goes hungry in our community.",
      image: "https://images.pexels.com/photos/6995254/pexels-photo-6995254.jpeg",
      link: "/stories/food-bank",
      author: "Michael Torres",
      date: "Oct 8, 2024",
      category: "Human Rights",
      likes: 89,
      readTime: "4 min read",
      views: 1678,
    },
    {
      id: "6",
      title: "Mental Health Support Network Launched",
      excerpt:
        "Peer counseling and mental health awareness programs provide crucial support for youth facing challenges.",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
      link: "/stories/mental-health",
      author: "Dr. Emily Chen",
      date: "Sep 30, 2024",
      category: "Health",
      likes: 134,
      readTime: "7 min read",
      views: 2567,
    }
  ];

  // Video highlights data
  const videos: VideoHighlight[] = [
    {
      id: "1",
      title: "Tech Workshop Impact Story",
      thumbnail: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      description: "Watch how our coding bootcamp transformed young lives with hands-on learning experiences.",
      duration: "2:15",
      views: 5420,
    },
    {
      id: "2",
      title: "Community Tree Planting Day",
      thumbnail: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg",
      description: "See our volunteers in action as they plant trees and create lasting environmental impact.",
      duration: "1:45",
      views: 3890,
    },
    {
      id: "3",
      title: "Health Awareness Campaign",
      thumbnail: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      description: "Highlights from our community health workshops and wellness initiatives.",
      duration: "3:20",
      views: 4250,
    }
  ];

  // Story tags
  const tags = [
    "All",
    "Technology",
    "Environment",
    "Health",
    "Education",
    "Human Rights",
  ];

  const filteredStories =
    activeTag === "All"
      ? stories
      : stories.filter((story) => story.category === activeTag);

  const handleLike = (storyId: string) => {
    setLikedStories(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(storyId)) {
        newLiked.delete(storyId);
      } else {
        newLiked.add(storyId);
      }
      return newLiked;
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Enhanced Background Decorations */}
      <div className="absolute w-96 h-96 bg-gradient-to-br from-orange-200/30 via-pink-200/20 to-purple-200/30 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-gradient-to-tr from-blue-200/30 via-teal-200/20 to-green-200/30 rounded-full blur-3xl bottom-32 -right-20 animate-pulse delay-1000"></div>
      <div className="absolute w-64 h-64 bg-gradient-to-bl from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl top-1/2 left-1/3 animate-pulse delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            ✨ Featured Stories
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Community Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover real stories of change and impact from youth advocates and community leaders 
            who are making a difference worldwide, one initiative at a time.
          </p>
        </div>

        {/* Enhanced Tag Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTag === tag 
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25" 
                  : "hover:bg-orange-50 hover:border-orange-300 hover:shadow-md"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
              {activeTag === tag && (
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {tag === "All" ? stories.length : stories.filter(s => s.category === tag).length}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Enhanced Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredStories.map((story, index) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {story.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{story.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{story.readTime}</span>
                  </div>
                  <span>{story.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-orange-500/25 transition-all duration-300 group/btn">
                    Read Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
                      likedStories.has(story.id) 
                        ? "text-red-500 border-red-200 bg-red-50" 
                        : "text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                    }`}
                    onClick={() => handleLike(story.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-all duration-300 ${
                        likedStories.has(story.id) ? "fill-red-500" : ""
                      }`} 
                    />
                    <span className="font-medium">
                      {likedStories.has(story.id) ? story.likes + 1 : story.likes}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Video Highlights */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🎥 Video Stories
          </div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Video Highlights
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch powerful visual stories that capture the essence of our community impact initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <Play className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{video.duration}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{video.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group/play"
                >
                  <Play className="w-4 h-4 mr-2 group-hover/play:text-blue-500" />
                  Watch Video
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}