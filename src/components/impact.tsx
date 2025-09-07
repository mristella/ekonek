'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Globe, Heart } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  link: string;
  description: string;
}

const partners: Partner[] = [
  { 
    name: 'Green Youth Org', 
    logo: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    link: '#',
    description: 'Environmental advocacy and youth empowerment'
  },
  { 
    name: 'Tech4Change', 
    logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    link: '#',
    description: 'Technology solutions for social impact'
  },
  { 
    name: 'Human Rights Hub', 
    logo: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    link: '#',
    description: 'Advancing human rights globally'
  },
  { 
    name: 'Education First', 
    logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    link: '#',
    description: 'Quality education for all communities'
  },
];

const impactStats = [
  { 
    value: '120+', 
    label: 'Resources Shared',
    description: 'Educational modules and activities',
    icon: BookOpen,
    color: 'text-blue-600'
  },
  { 
    value: '50+', 
    label: 'Organizations',
    description: 'Schools and advocacy groups',
    icon: Users,
    color: 'text-green-600'
  },
  { 
    value: '10K+', 
    label: 'Community Reach',
    description: 'People impacted across regions',
    icon: Globe,
    color: 'text-purple-600'
  },
];

const ctaButtons = [
  {
    label: 'Read Stories',
    href: '/stories',
    variant: 'default',
    description: 'Discover inspiring stories from our community'
  },
  {
    label: 'Sign Up',
    href: '/signup',
    variant: 'secondary',
    description: 'Join our platform and make a difference'
  },
  {
    label: 'Explore Library',
    href: '/resources',
    variant: 'outline',
    description: 'Browse our comprehensive resource library'
  },
  {
    label: 'Partner with Us',
    href: '/partners',
    variant: 'default',
    description: 'Collaborate to amplify your impact'
  },
];

export default function Impact() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Creating Meaningful Change
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering communities through shared resources, strategic partnerships, and collaborative action.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 mb-4`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="font-semibold text-gray-800 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partners & Supporters */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Partners & Supporters
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Working together with organizations that share our vision for positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <Card key={partner.name} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-4 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {/* <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      /> */}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h4>
                  <p className="text-xs text-gray-500">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Make an Impact?</h3>
            <p className="text-gray-600">Choose how you'd like to get involved with our community.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ctaButtons.map((cta, i) => (
              <div key={i} className="text-center">
                <Button
                  className={`w-full mb-2 h-11 font-medium transition-all duration-300 ${
                    cta.variant === 'default' 
                      ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                      : cta.variant === 'secondary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
                  }`}
                  asChild
                >
                  <a href={cta.href}>{cta.label}</a>
                </Button>
                <p className="text-xs text-gray-500 px-2">{cta.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}