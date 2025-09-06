'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Partner {
  name: string;
  logo: string;
  link: string;
}

const partners: Partner[] = [
  { name: 'Green Youth Org', logo: '/assets/partners/green-youth.png', link: '#' },
  { name: 'Tech4Change', logo: '/assets/partners/tech4change.png', link: '#' },
  { name: 'Human Rights Hub', logo: '/assets/partners/human-rights.png', link: '#' },
];

export default function Impact() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering communities by sharing resources, building partnerships, and creating lasting change.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {[
            { value: '120+', label: 'Resources Shared' },
            { value: '50+', label: 'Organizations & Schools' },
            { value: '10K+', label: 'Community Reach' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partners & Supporters */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Partners & Supporters</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Collaboration fuels impact. These organizations support our mission to create meaningful change.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl transition-transform duration-300 hover:scale-105"
            asChild
          >
            <a href="/stories">Read our Stories</a>
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition-transform duration-300 hover:scale-105"
            asChild
          >
            <a href="/signup">Sign Up</a>
          </Button>
          <Button
            className="bg-white border border-gray-300 text-black px-6 py-4 rounded-xl hover:bg-gray-50 transition-transform duration-300 hover:scale-105"
            asChild
          >
            <a href="/resources">Explore the Library</a>
          </Button>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl transition-transform duration-300 hover:scale-105"
            asChild
          >
            <a href="/partners">Partner with Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
