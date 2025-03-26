import React from 'react';
import Image from 'next/image';
import { Calendar, Users, School, Star } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Founded by Three Artists",
      icon: Calendar
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Provided free training to 100+ young dancers",
      icon: Users
    },
    {
      year: "2024",
      title: "Official Registration",
      description: "Formal establishment of Dance company",
      icon: Star
    },
    {
      year: "2025+",
      title: "Partnership",
      description: "Reaching Out For Expansion",
      icon: School
    }
  ];

  return (
    <div className="mt-[80px]">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full -mt-[80px]">
        <Image
          src="/covers/ourstory.webp"
          alt="Dance Performance"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3264]/80 to-[#1a3264]/60">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                  Our Story
                </h1>
                <p className="text-xl text-[#c4a01c] font-medium">
                  Transforming Lives Through Art 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-[#d5d8dd] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-[#1a3264] leading-relaxed">
              We began as more than just a dance company and emerged as a beacon of hope
              and transformation in the heart of Nairobi&apos;s communities.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-[#f8f3e2] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#c4a01c]" />
                  </div>
                  <h3 className="text-[#1a3264] font-bold mb-2">{milestone.year}</h3>
                  <h4 className="text-[#c4a01c] font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="py-16 bg-[#d5d8dd]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold text-[#1a3264] mb-4">The Foundation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What began as a passion for Art evolved into a powerful force for change. Over 100 children from Nairobi
                  found their artistic voice through free training in dance, acrobatics, gymnastics, music, and drama.
                </p>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/gallery/training2.jpg"
                  alt="Dance Training"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative h-[300px]">
                <Image
                  src="/gallery/perfomance.jpeg"
                  alt="Performance"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-[#1a3264] mb-4">Beyond Dance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our commitment extendeds beyond artistic training. By investing highly on
                  students&apos; education, we ensured that talent would not be limited by financial
                  constraints. This dedication led to the emergence of exceptional performers who would
                  go on to captivate audiences both locally and internationally.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#1a3264] mb-4">Today&apos;s Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Today, Dance Company stands as a testament to the power of artistic education and
                community investment. Our comprehensive performing arts certifications, public studio
                access, and school programs continue to nurture talent and transform lives across Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-[#1a3264] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#d5d8dd] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1a3264] mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the premier performing arts institution in East Africa, breaking barriers and
                  creating opportunities for talented youth to achieve their artistic dreams.
                </p>
              </div>
              <div className="bg-[#d5d8dd] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1a3264] mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To nurture artistic excellence while fostering community development through
                  accessible, high-quality performing arts education and professional training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
