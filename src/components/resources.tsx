'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Download, 
  FileText, 
  Video, 
  Image, 
  File, 
  Presentation,
  BookOpen,
  Upload,
  Users,
  Star,
  Eye
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  author: string;
  link: string;
  downloads: number;
  rating: number;
  featured?: boolean;
  previewImage?: string;
}

const getFileIcon = (fileType: string) => {
  const icons = {
    PDF: <FileText className="h-4 w-4" />,
    Word: <File className="h-4 w-4" />,
    PowerPoint: <Presentation className="h-4 w-4" />,
    Video: <Video className="h-4 w-4" />,
    Infographic: <Image className="h-4 w-4" />,
    Blog: <BookOpen className="h-4 w-4" />
  };
  return icons[fileType as keyof typeof icons] || <File className="h-4 w-4" />;
};

const getCategoryColor = (category: string) => {
  const colors = {
    'Digital Literacy': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'Social & Human Rights': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'Education & Community Development': 'bg-green-100 text-green-800 hover:bg-green-200'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
};

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedFileType, setSelectedFileType] = useState<string | undefined>();

  const categories = ['Digital Literacy', 'Social & Human Rights', 'Education & Community Development'];
  const fileTypes = ['PDF', 'Word', 'PowerPoint', 'Video', 'Infographic', 'Blog'];

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Digital Literacy Module',
      description: 'Comprehensive guide covering coding basics, online safety, and digital citizenship for students aged 12-18.',
      category: 'Digital Literacy',
      fileType: 'PDF',
      author: 'Tech4Youth',
      link: '#',
      downloads: 1250,
      rating: 4.8,
      featured: true,
      previewImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Human Rights Activity Pack',
      description: 'Interactive exercises and discussion prompts for advocacy workshops and community engagement sessions.',
      category: 'Social & Human Rights',
      fileType: 'Word',
      author: 'Rights Org',
      link: '#',
      downloads: 890,
      rating: 4.6,
      previewImage: 'https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Community Development Guide',
      description: 'Step-by-step framework for launching and sustaining local education initiatives in underserved communities.',
      category: 'Education & Community Development',
      fileType: 'Blog',
      author: 'EduAction',
      link: '#',
      downloads: 673,
      rating: 4.9,
      featured: true,
      previewImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: 'Youth Leadership Workshop Kit',
      description: 'Complete workshop materials for developing leadership skills in young people, including facilitator guides.',
      category: 'Education & Community Development',
      fileType: 'PowerPoint',
      author: 'Youth Leaders Collective',
      link: '#',
      downloads: 445,
      rating: 4.7,
      previewImage: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'Digital Safety Infographic Series',
      description: 'Visual guides on cybersecurity, privacy protection, and responsible social media use.',
      category: 'Digital Literacy',
      fileType: 'Infographic',
      author: 'SafeWeb Initiative',
      link: '#',
      downloads: 1120,
      rating: 4.5,
      previewImage: 'https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: 'Advocacy Training Video Series',
      description: 'Professional video course on effective advocacy strategies, campaign planning, and community mobilization.',
      category: 'Social & Human Rights',
      fileType: 'Video',
      author: 'Advocacy Hub',
      link: '#',
      downloads: 2100,
      rating: 4.9,
      featured: true,
      previewImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Filtered resources
  const filteredResources = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || r.category === selectedCategory) &&
      (!selectedFileType || r.fileType === selectedFileType)
  );

  const featuredResources = filteredResources.filter(r => r.featured);
  const regularResources = filteredResources.filter(r => !r.featured);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(undefined);
    setSelectedFileType(undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Knowledge Hub
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-purple-800 bg-clip-text text-transparent">
              Resource Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover curated educational materials, activity guides, and toolkits designed to empower communities and drive positive change.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        {/* Search and Filters Card */}
        <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search activities, guides, or toolkits…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 text-base border-0 bg-gray-50 focus:bg-white transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-1 lg:justify-center">
                <div className="relative min-w-[220px]">
                  <Select value={selectedCategory} onValueChange={(val) => setSelectedCategory(val === 'all' ? undefined : val)}>
                    <SelectTrigger className="py-6 border-0 bg-gray-50 hover:bg-white transition-colors">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-500" />
                        <SelectValue placeholder="All Categories" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="min-w-[180px]">
                  <Select value={selectedFileType} onValueChange={(val) => setSelectedFileType(val === 'all' ? undefined : val)}>
                    <SelectTrigger className="py-6 border-0 bg-gray-50 hover:bg-white transition-colors">
                      <SelectValue placeholder="All File Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All File Types</SelectItem>
                      {fileTypes.map((ft) => (
                        <SelectItem key={ft} value={ft}>
                          <div className="flex items-center gap-2">
                            {getFileIcon(ft)}
                            {ft}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory || selectedFileType) && (
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="py-6 px-6 border-gray-200 hover:bg-gray-50"
                >
                  Clear All
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Share Resource CTA */}
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-1">Have a resource to share?</h3>
              <p className="text-orange-100 text-sm">Help the community by uploading your materials</p>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-6">
              <Upload className="h-4 w-4 mr-2" />
              Share Resource
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredResources.length === resources.length ? 'All Resources' : 'Search Results'}
            </h2>
            <span className="text-gray-500">({filteredResources.length} resources)</span>
          </div>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-900">Featured Resources</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  {/* Resource Preview Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {resource.previewImage && (
                      <img 
                        src={resource.previewImage} 
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {getFileIcon(resource.fileType)}
                        <span className="ml-1">{resource.fileType}</span>
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={`${getCategoryColor(resource.category)} w-fit text-xs font-medium`}>
                      {resource.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        by {resource.author}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {resource.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {resource.rating}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-medium">
                      <Eye className="h-4 w-4 mr-2" />
                      View Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Resources */}
        {regularResources.length > 0 && (
          <div>
            {featuredResources.length > 0 && (
              <h3 className="text-xl font-semibold text-gray-900 mb-6">All Resources</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularResources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Resource Preview Image */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {resource.previewImage && (
                      <img 
                        src={resource.previewImage} 
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {getFileIcon(resource.fileType)}
                        <span className="ml-1">{resource.fileType}</span>
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {resource.title}
                    </CardTitle>
                    <Badge className={`${getCategoryColor(resource.category)} w-fit text-xs`}>
                      {resource.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {resource.author}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {resource.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {resource.rating}
                        </span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all">
                      <Eye className="h-4 w-4 mr-2" />
                      View Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We couldn't find any resources matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <Button onClick={clearFilters} className="bg-orange-500 hover:bg-orange-600 text-white">
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
}