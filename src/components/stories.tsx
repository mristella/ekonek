'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function Stories() {
  // Sample story data
  const stories = [
    {
      title: 'Youth Tech Workshop',
      excerpt: 'A community-driven tech literacy project for students.',
      image: '/assets/stories/tech-workshop.jpg',
      link: '/stories/tech-workshop',
    },
    {
      title: 'Environmental Action Day',
      excerpt: 'Volunteers planted 500 trees in local communities.',
      image: '/assets/stories/environment-day.jpg',
      link: '/stories/environment-day',
    },
  ];

  // Sample video highlights
  const videos = [
    { title: 'Project Clip: Tech Workshop', videoUrl: '/assets/videos/tech.mp4' },
    { title: 'Community Tree Planting', videoUrl: '/assets/videos/trees.mp4' },
  ];

  // Tags for filtering (static for now)
  const tags = ['Technology', 'Human Rights', 'Environment', 'Education', 'Health'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Stories</h2>
        <p className="text-gray-600 mb-8">
          Explore inspiring stories and project highlights from our advocates.
        </p>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tags.map((tag) => (
            <Button key={tag} variant="outline" className="hover:bg-orange-50">
              {tag}
            </Button>
          ))}
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                <div className="flex justify-between items-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                    <a href={story.link}>Read More</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
                  >
                    <Heart className="w-4 h-4" />
                    <span>12</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights */}
        <h3 className="text-2xl font-semibold mb-6">Video Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <video src={video.videoUrl} controls className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-md font-semibold">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
