"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
              <span className="text-xl font-bold">E-Konek</span>
            </div>
            <p className="text-sm text-gray-700">
              An open-access peer-to-peer digital platform that centralizes
              resources, success stories, and collaboration opportunities for
              changemakers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-orange-500">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-orange-500">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-orange-500">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-700 mb-2">
              Get updates on new resources, partnerships, and impact stories.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="flex-1" />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@ekonektado.org"
                  className="hover:text-orange-500"
                >
                  info@e-konek.org
                </a>
              </li>
              <li>Address: Youth-led and powered remotely</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@ekonektado.org"
                className="text-gray-600 hover:text-orange-500"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600 flex flex-col sm:flex-row justify-center items-center gap-4">
          <span>
            © {new Date().getFullYear()} E-Konek. All Rights Reserved.
          </span>
          <span>
            <Link href="/privacy" className="hover:text-orange-500">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-orange-500 ml-1">
              Terms of Use
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
