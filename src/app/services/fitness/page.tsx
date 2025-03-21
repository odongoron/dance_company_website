"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Star, PlayCircle, Sparkles, Umbrella } from 'lucide-react';

const FitnessServicesPage = () => {
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  const fitnessStyles = [
    {
      name: 'Yoga',
      description: 'Harmony of body, mind, and spirit',
      icon: <Umbrella className="w-16 h-16 text-[#c4a01c]" />,
      color: 'from-[#2ecc71] to-[#3498db]',
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
      color: 'from-[#e74c3c] to-[#9b59b6]',
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
      color: 'from-[#f1c40f] to-[#e67e22]',
      details: [
        'Rhythm as your metabolism',
        'Joy-powered transformation',
        'Dancing away limitations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#fff5e6] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#1a3264] to-[#c4a01c] mb-6">
            Fitness Metamorphosis
          </h1>
          <p className="text-2xl text-[#1a3264] max-w-3xl mx-auto">
            Where personal limits are just an illusion waiting to be shattered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fitnessStyles.map((style) => (
            <div 
              key={style.name}
              onMouseEnter={() => setActiveStyle(style.name)}
              onMouseLeave={() => setActiveStyle(null)}
              className={`
                relative overflow-hidden rounded-3xl shadow-2xl 
                transform transition-all duration-500 ease-in-out
                ${activeStyle === style.name 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-100 shadow-lg'}
              `}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/api/placeholder/600/400"
                  alt={style.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-30"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`
                absolute inset-0 z-10 
                bg-gradient-to-br ${style.color} 
                opacity-80
              `}></div>

              <div className="relative z-20 p-8 text-white">
                <div className="flex justify-center mb-6">
                  {style.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">
                  {style.name}
                </h3>
                <p className="text-xl text-center mb-6 italic">
                  {style.description}
                </p>
                
                <ul className="space-y-3 text-center">
                  {style.details.map((detail) => (
                    <li 
                      key={detail} 
                      className="flex items-center justify-center 
                                 text-white opacity-80 hover:opacity-100 
                                 transition-all duration-300"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center mt-8">
                  <button className="
                    flex items-center px-6 py-3 
                    bg-white text-[#1a3264] 
                    rounded-full font-bold 
                    hover:bg-[#c4a01c] hover:text-white 
                    transition-all duration-300
                  ">
                    <PlayCircle className="mr-2" />
                    Explore Realm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessServicesPage;
