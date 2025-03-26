"use client";
import React from 'react';
import { Zap, Star, Sparkles, Umbrella } from 'lucide-react';

const FitnessServicesPage = () => {
  const fitnessStyles = [
    {
      name: 'Yoga',
      description: 'Harmony of body, mind, and spirit',
      icon: <Umbrella className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Inner peace exploration',
        'Breath as profound medicine',
        'Stillness in constant motion'
      ]
    },
    {
      name: 'Pilates',
      description: 'Precision engineering of the human body',
      icon: <Star className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Core as your power center',
        'Muscle intelligence',
        'Balanced body architecture'
      ]
    },
    {
      name: 'Dance Fitness',
      description: 'Where workout becomes celebration',
      icon: <Zap className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Rhythm as your metabolism',
        'Joy-powered transformation',
        'Dancing away limitations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f3e2] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1a3264] mb-4">
            Fitness Services
          </h1>
          <p className="text-xl text-[#c4a01c] max-w-2xl mx-auto">
            Where personal limits are just an illusion waiting to be shattered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fitnessStyles.map((style) => (
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

export default FitnessServicesPage;