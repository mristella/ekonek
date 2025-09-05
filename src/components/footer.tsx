"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logoEkonek.png"
                alt="E-Konektado Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">E-Konektado</span>
            </div>
            <p className="text-sm text-gray-700">
              Connected by Youth. Powered by Knowledge. Driven by Community.  
              Empowering trainers, educators, and leaders with open-access digital resources.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/resources" className="hover:text-orange-500">Resources</Link></li>
              <li><Link href="/impact" className="hover:text-orange-500">Impact</Link></li>
              <li><Link href="/stories" className="hover:text-orange-500">Stories</Link></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/join" className="hover:text-orange-500">Sign Up as Advocate</Link></li>
              <li><Link href="/partners" className="hover:text-orange-500">Partner with Us</Link></li>
              <li><Link href="/library" className="hover:text-orange-500">Explore the Library</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@ekonektado.org" className="hover:text-orange-500">info@ekonektado.org</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-orange-500"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:info@ekonektado.org" className="text-gray-600 hover:text-orange-500"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} E-Konektado. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
