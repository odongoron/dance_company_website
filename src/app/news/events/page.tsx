"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart, Calendar, Clock, MapPin } from 'lucide-react';

interface MagicalEvent {
  id: number;
  title: string;
  emoji: string;
  heartWhisper: string;
  childDream: string;
  colorSplash: string;
  sparkleIntensity: number;
  childEmotion: 'wonder' | 'joy' | 'mystery' | 'adventure';
  imageUrl?: string;
  date: string;
  time: string;
  location: string;
}

const dreamDances: MagicalEvent[] = [
  {
    id: 1,
    title: "HADITHI DANCE FESTIVAL",
    emoji: "🦋",
    heartWhisper: "Embracing Our Diversity",
    childDream: "In partnership with Blingers Empire and Oshwal Academy.",
    colorSplash: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    sparkleIntensity: 50,
    childEmotion: 'wonder',
    imageUrl: "/events/hadithi_fest.jpg",
    date: "Saturday, 15 March 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Oshwal Academy, Nursery Campus"
  },
  // Other events...
];

export default function DreamscapeDanceEvents() {
  const [currentEvent, setCurrentEvent] = useState<MagicalEvent | undefined>(dreamDances[0]);
  const [sparkles, setSparkles] = useState<{ x: number, y: number }[]>([]);

  const generateSparkles = useCallback(() => {
    if (currentEvent) {
      const sparkleCount = Math.max(5, Math.floor(currentEvent.sparkleIntensity / 2));
      const newSparkles = Array.from({ length: sparkleCount }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100
      }));
      setSparkles(newSparkles);
    }
  }, [currentEvent]);

  useEffect(() => {
    generateSparkles();
  }, [currentEvent, generateSparkles]);

  if (!currentEvent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f0e6ff] relative overflow-hidden font-['Comic_Sans_MS']">
      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className="absolute text-yellow-300 text-xs animate-ping"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`
          }}
        >
          ✨
        </span>
      ))}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold text-[#1a3264] mb-4 drop-shadow-lg">
            Dream Dancers
          </h1>
          <p className="text-2xl text-purple-700 italic">
            Where Imagination Dances Wilder Than Words
          </p>
        </motion.div>

        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              key={currentEvent.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className={`p-4 rounded-2xl ${currentEvent.colorSplash} text-center`}>
                <h2 className="text-4xl font-bold text-white">
                  {currentEvent.title} {currentEvent.emoji}
                </h2>
              </div>

              <blockquote className="italic text-2xl text-[#1a3264] border-l-4 border-[#c4a01c] pl-4">
                &quot;{currentEvent.heartWhisper}&quot;
              </blockquote>

              <p className="text-xl text-purple-800">
                {currentEvent.childDream}
              </p>

              <div className="bg-[#ccaefd] text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-2">
                  <Calendar className="w-10 h-10 text-yellow-300" />
                  <h3 className="text-3xl font-bold uppercase tracking-wider">
                    {currentEvent.date}
                  </h3>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <Clock className="w-10 h-10 text-yellow-300" />
                  <p className="text-2xl font-semibold tracking-wide">
                    {currentEvent.time}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-10 h-10 text-yellow-300" />
                  <p className="text-xl font-medium tracking-wide">
                    {currentEvent.location}
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 items-center">
                <button className="bg-[#c4a01c] text-white px-8 py-4 rounded-full hover:bg-[#1a3264] transition-all flex items-center space-x-2 group">
                  <Heart className="group-hover:scale-125 transition-transform" />
                  <span>Get Your Tickets</span>
                  <Star className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full h-[500px] rounded-3xl overflow-hidden relative flex items-center justify-center"
            >
              {currentEvent.imageUrl ? (
                <div className="w-full h-full relative flex items-center justify-center">
                  <Image
                    src={currentEvent.imageUrl}
                    alt={currentEvent.title}
                    width={500}
                    height={500}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calendar className="mx-auto text-white w-64 h-64 opacity-30" />
                    <p className="text-2xl italic">Event Details Loading...</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            {dreamDances.map((dance) => (
              <button
                key={dance.id}
                onClick={() => setCurrentEvent(dance)}
                className={`w-4 h-4 rounded-full ${
                  currentEvent.id === dance.id ? 'bg-[#1a3264]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
