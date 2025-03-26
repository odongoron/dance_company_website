"use client";
import React, { useState, useEffect } from 'react';
import { 
  Minimize2,
  ChevronLeft, 
  ChevronRight, 
} from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  fullImage: string;
  description: string;
}

interface CarouselImage {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const CreativeGallery = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      title: "Elegant Performance",
      subtitle: "Where shadows dance",
      image: "/gallery/elegantperformance.webp"
    },
    {
      id: 2,
      title: "Urban Rhythms",
      subtitle: "Street becomes stage",
      image: "/gallery/urbanrhythm.jpg"
    },
    {
      id: 3,
      title: "Cultural Fusion",
      subtitle: "Movements without borders",
      image: "/gallery/culturalfusion.jpg"
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Elegant Performance",
      category: "stage",
      thumbnail: "/gallery/img1.jpg",
      fullImage: "/gallery/img1.jpg",
      description: "An ethereal dance that blends shadow and light"
    },
    {
      id: 2,
      title: "Urban Rhythms",
      category: "street",
      thumbnail: "/gallery/img2.webp",
      fullImage: "/gallery/img2.webp",
      description: "Breaking boundaries in the heart of the city"
    },
    {
      id: 3,
      title: "Cultural Fusion",
      category: "street",
      thumbnail: "/gallery/img3.webp",
      fullImage: "/gallery/img3.webp",
      description: "Celebrating diversity through movement"
    },
    {
      id: 4,
      title: "Sunset Silhouette",
      category: "stage",
      thumbnail: "/gallery/img4.jpg",
      fullImage: "/gallery/img4.jpg",
      description: "Capturing dance against the golden hour"
    },
    {
      id: 5,
      title: "Contemporary Edge",
      category: "cultural",
      thumbnail: "/gallery/img5.webp",
      fullImage: "/gallery/img5.webp",
      description: "Modern movements challenging perception"
    },
    {
      id: 6,
      title: "Harmonic Motion",
      category: "cultural",
      thumbnail: "/gallery/img6.webp",
      fullImage: "/gallery/img6.webp",
      description: "Fluid transitions between forms"
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'stage', label: 'Stage' },
    { id: 'street', label: 'Street' },
    { id: 'cultural', label: 'Cultural' }
  ];

  const filteredImages = galleryImages.filter(
    img => activeFilter === 'all' || img.category === activeFilter
  );

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [carouselImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % carouselImages.length
    );
  };

  return (
    <div className="bg-[#f8f3e2] min-h-screen">
      {/* Carousel Header */}
      <div className="relative h-[70vh] overflow-hidden">
        {carouselImages.map((slide, index) => (
          <div 
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-1000
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <Image 
              src={slide.image} 
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
              <div>
                <h1 className="text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-2xl text-[#c4a01c]">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <button 
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>
        <button 
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full
                ${currentSlide === index ? 'bg-[#c4a01c]' : 'bg-white/50'}
              `}
            />
          ))}
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-4 py-2 rounded-full transition-colors
                ${activeFilter === filter.id 
                  ? 'bg-[#1a3264] text-white' 
                  : 'bg-white text-[#1a3264] hover:bg-[#c4a01c] hover:text-white'}
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] grid-flow-dense">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className={`
                ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                relative overflow-hidden rounded-xl group cursor-pointer
              `}
              onClick={() => setSelectedImage(img)}
            >
              <Image 
                src={img.thumbnail} 
                alt={img.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg font-bold">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute top-4 right-4 z-10 bg-[#1a3264] text-white p-2 rounded-full hover:bg-[#c4a01c]"
            >
              <Minimize2 />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square">
                <Image 
                  src={selectedImage.fullImage} 
                  alt={selectedImage.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#1a3264] mb-4">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-6">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeGallery;