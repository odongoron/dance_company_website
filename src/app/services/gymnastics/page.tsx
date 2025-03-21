"use client";
import React from 'react';
import { 
  Star, 
  Zap, 
  Sparkles, 
  Move, 
  Target 
} from 'lucide-react';

const GymnasticsServicesPage = () => {
  const gymnasticsStyles = [
    {
      name: 'Artistic Gymnastics',
      description: 'Gravity-defying elegance and strength',
      icon: <Star className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Floor exercises',
        'Apparatus work',
        'Precision movements'
      ]
    },
    {
      name: 'Acrobatic Gymnastics',
      description: 'Human sculptures in breathtaking motion',
      icon: <Zap className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Partner balancing',
        'Dynamic lifts',
        'Complex formations'
      ]
    },
    {
      name: 'Rhythmic Gymnastics',
      description: 'Poetry in motion with apparatus',
      icon: <Sparkles className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Ribbon choreography',
        'Hoop and ball techniques',
        'Graceful movements'
      ]
    },
    {
      name: 'Trampoline Gymnastics',
      description: 'Aerial freedom and precise control',
      icon: <Move className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Aerial skills',
        'Height and rotation',
        'Technical precision'
      ]
    },
    {
      name: 'Power Tumbling',
      description: 'Dynamic power and explosive movements',
      icon: <Target className="w-16 h-16 text-[#c4a01c]" />,
      details: [
        'Tumbling passes',
        'Aerial skills',
        'Strength training'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f3e2] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1a3264] mb-4">
            Gymnastics Services
          </h1>
          <p className="text-xl text-[#c4a01c] max-w-2xl mx-auto">
            Where strength, flexibility, and artistry converge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gymnasticsStyles.map((style) => (
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

export default GymnasticsServicesPage;