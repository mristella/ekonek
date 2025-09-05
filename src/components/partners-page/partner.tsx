'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Partner {
  name: string;
  logo: string;
  description: string;
  link: string;
}

const partners: Partner[] = [
  {
    name: 'Green Youth Org',
    logo: '/assets/partners/green-youth.png',
    description: 'Advocating for environmental sustainability in youth-led communities.',
    link: 'https://greenyouth.org',
  },
  {
    name: 'Tech4Change',
    logo: '/assets/partners/tech4change.png',
    description: 'Empowering schools with digital literacy and free tech resources.',
    link: 'https://tech4change.org',
  },
  {
    name: 'Human Rights Hub',
    logo: '/assets/partners/human-rights.png',
    description: 'Promoting social and human rights advocacy across regions.',
    link: 'https://humanrightshub.org',
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Profiles of organizations, schools, and supporters who help us amplify our mission.
        </p>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-4">{partner.description}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline text-sm font-medium"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
          Become a Partner
        </Button>
      </div>
    </section>
  );
}
