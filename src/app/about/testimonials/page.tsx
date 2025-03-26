"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'parents', label: 'Parents' },
    { id: 'students', label: 'Students' },
    { id: 'schools', label: 'Partner Schools' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      category: "parents",
      image: "/gallery/testimony.webp",
      quote: "Dance Company has transformed my daughter's life. The confidence she has gained through dance is incredible.",
      rating: 5,
      relationship: "Parent of Emma, 12",
      impact: "Improved confidence and discipline",
      featured: true
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Dancer",
      category: "students",
      image: "/gallery/testimony2.jpeg",
      quote: "I have made great improvement on my dance career and i would recommend Dance Company all the time.",
      rating: 5,
      relationship: "Student",
      impact: "Improved professionalism",
      featured: true
    },
    // Add more testimonials...
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const handlePrevious = () => {
    setFeaturedIndex(prev => (prev === 0 ? featuredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIndex(prev => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#d5d8dd]">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/covers/testimonials.jpg"
          alt="Dance Performance"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-[#1a3264]/70">
          <div className="container mx-auto h-full px-4 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                Success Stories
              </h1>
              <p className="text-xl text-[#c4a01c]">
                Hear from our community of dancers, parents, and partners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="relative">
            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-[#f8f3e2] transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a3264]" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                {featuredTestimonials[featuredIndex] && (
                  <Image
                    src={featuredTestimonials[featuredIndex].image}
                    alt={featuredTestimonials[featuredIndex].name}
                    className="object-cover"
                    fill
                  />
                )}
              </div>
              <div>
                <Quote className="w-12 h-12 text-[#c4a01c] mb-4" />
                <p className="text-xl text-gray-700 italic mb-6">
                  {featuredTestimonials[featuredIndex]?.quote}
                </p>
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: featuredTestimonials[featuredIndex]?.rating ?? 0 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c4a01c] text-[#c4a01c]" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#1a3264]">
                  {featuredTestimonials[featuredIndex]?.name}
                </h3>
                <p className="text-[#c4a01c]">{featuredTestimonials[featuredIndex]?.relationship}</p>
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-[#f8f3e2] transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-[#1a3264]" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#1a3264] text-white'
                  : 'bg-white text-[#1a3264] hover:bg-[#c4a01c] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .filter(testimonial => activeCategory === 'all' || testimonial.category === activeCategory)
            .map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a3264]">{testimonial.name}</h3>
                    <p className="text-sm text-[#c4a01c]">{testimonial.relationship}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating ?? 0 }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c4a01c] text-[#c4a01c]" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</blockquote>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Impact:</span> {testimonial.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1a3264] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-[#c4a01c] mb-8 max-w-2xl mx-auto">
            Start your journey with us and be part of our success stories.
            Transform your passion for dance into excellence.
          </p>
          <button 
            className="bg-[#c4a01c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d4b02c] transition-colors duration-200"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
