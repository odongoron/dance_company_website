"use client";
import React from 'react';
import { 
  Music, 
  Footprints, 
  Star, 
  Sparkles, 
  Heart, 
  Zap 
} from 'lucide-react';

const DanceServicesPage = () => {
  const danceStyles = [
    {
      name: 'Hip Hop',
      description: 'Urban energy meets street passion',
      icon: <Footprints className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Freestyle movements',
        'Street dance techniques',
        'Modern choreography'
      ]
    },
    {
      name: 'Ballet',
      description: 'Timeless grace and precision',
      icon: <Star className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Classical technique',
        'Pointe work',
        'Elegant storytelling'
      ]
    },
    {
      name: 'Contemporary',
      description: 'Emotional expression through movement',
      icon: <Sparkles className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Fluid movements',
        'Emotional storytelling',
        'Innovative choreography'
      ]
    },
    {
      name: 'African Dance',
      description: 'Rhythmic cultural celebration',
      icon: <Heart className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Traditional rhythms',
        'Cultural storytelling',
        'Energetic performances'
      ]
    },
    {
      name: 'Jazz',
      description: 'Syncopated rhythms and style',
      icon: <Zap className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Syncopated movements',
        'Dynamic techniques',
        'Expressive performance'
      ]
    },
    {
      name: 'Salsa',
      description: 'Passionate partner dance',
      icon: <Music className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Latin rhythms',
        'Partner connection',
        'High-energy movements'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f3e2] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1a3264] mb-4">
            Dance Services
          </h1>
          <p className="text-xl text-[#c4a01c] max-w-2xl mx-auto">
            Unleash your inner rhythm, express your soul through movement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {danceStyles.map((style) => (
            <div 
              key={style.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-4 
                         p-8 text-center group"
            >
              <div className="flex justify-center mb-6">
                {style.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1a3264] mb-4 
                             group-hover:text-[#c4a01c] transition-colors">
                {style.name}
              </h3>
              <p className="text-gray-600 mb-6">{style.description}</p>
              <ul className="space-y-2 text-[#1a3264]">
                {style.details.map((detail) => (
                  <li 
                    key={detail} 
                    className="flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-[#c4a01c]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanceServicesPage;