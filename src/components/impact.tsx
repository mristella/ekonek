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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Impact Statistics */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">120+</h3>
            <p className="text-gray-700">Resources Shared</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">50+</h3>
            <p className="text-gray-700">Organizations & Schools</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">10K+</h3>
            <p className="text-gray-700">Community Reach</p>
          </div>
        </div>

        {/* Partners Logos */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Partners & Supporters</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl"
            asChild
          >
            <a href="/stories">Read our Stories</a>
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl"
            asChild
          >
            <a href="/signup">Sign Up</a>
          </Button>
          <Button
            className="bg-white border border-gray-300 text-black px-6 py-4 rounded-xl hover:bg-gray-50"
            asChild
          >
            <a href="/resources">Explore the Library</a>
          </Button>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl"
            asChild
          >
            <a href="/partners">Partner with Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
