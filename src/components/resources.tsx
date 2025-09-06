'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Resource {
  title: string;
  description: string;
  category: string;
  fileType: string;
  author: string;
  link: string;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedFileType, setSelectedFileType] = useState<string | undefined>();

  const categories = ['Digital Literacy', 'Social & Human Rights', 'Education & Community Development'];
  const fileTypes = ['PDF', 'Word', 'PowerPoint', 'Video', 'Infographic', 'Blog'];

  const resources: Resource[] = [
    {
      title: 'Digital Literacy Module',
      description: 'Learn coding basics and online safety for students.',
      category: 'Digital Literacy',
      fileType: 'PDF',
      author: 'Tech4Youth',
      link: '#',
    },
    {
      title: 'Human Rights Activity Pack',
      description: 'Interactive exercises for advocacy workshops.',
      category: 'Social & Human Rights',
      fileType: 'Word',
      author: 'Rights Org',
      link: '#',
    },
    {
      title: 'Community Development Guide',
      description: 'Step-by-step guide for local education initiatives.',
      category: 'Education & Community Development',
      fileType: 'Blog',
      author: 'EduAction',
      link: '#',
    },
  ];

  // Filtered resources
  const filteredResources = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || r.category === selectedCategory) &&
      (!selectedFileType || r.fileType === selectedFileType)
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Resources</h1>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
        <Input
          placeholder="Search activities, guides, or toolkits…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />

        <div className="min-w-[200px]">
          <Select onValueChange={(val) => setSelectedCategory(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-[200px]">
          <Select onValueChange={(val) => setSelectedFileType(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select File Type" />
          </SelectTrigger>
          <SelectContent>
            {fileTypes.map((ft) => (
              <SelectItem key={ft} value={ft}>
                {ft}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        </div>
      </div>

      {/* Upload Resource */}
      <div className="text-center mb-12">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
          Share Your Resource
        </Button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <Card key={res.title} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{res.title}</CardTitle>
              <CardDescription>{res.category} | {res.fileType}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{res.description}</p>
              <p className="text-sm text-gray-500 mb-2">Author: {res.author}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                <a href={res.link}>View Resource</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
