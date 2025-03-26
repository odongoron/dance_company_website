"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, Calendar, Clock, MapPin } from 'lucide-react';
import { parse } from 'date-fns';

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
  eventDate: Date;
}

const dreamDances: Omit<MagicalEvent, 'eventDate'>[] = [
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
  {
    id: 2,
    title: "FUTURE DANCE WORKSHOP",
    emoji: "🚀",
    heartWhisper: "Exploring Tomorrow's Movements",
    childDream: "A workshop for innovative dance techniques.",
    colorSplash: "bg-gradient-to-r from-blue-300 via-green-300 to-yellow-400",
    sparkleIntensity: 40,
    childEmotion: 'adventure',
    imageUrl: "/events/enlightment.webp",
    date: "Saturday, 20 April 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Community Arts Center"
  }
];

const parseEventDate = (dateStr: string): Date => {
  try {
    return parse(dateStr, 'EEEE, d MMMM yyyy', new Date());
  } catch (error) {
    console.error('Failed to parse date:', dateStr, error);
    return new Date();
  }
};

export default function DreamscapeDanceEvents() {
  const [events, setEvents] = useState({
    upcomingEvents: [] as MagicalEvent[],
    pastEvents: [] as MagicalEvent[]
  });
  const [currentEvent, setCurrentEvent] = useState<MagicalEvent | null>(null);
  const [sparkles, setSparkles] = useState<{ x: number, y: number }[]>([]);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    const now = new Date();
    const processed = {
      upcomingEvents: [] as MagicalEvent[],
      pastEvents: [] as MagicalEvent[]
    };

    dreamDances.forEach(event => {
      if (!event.date) {
        console.error('Event missing date:', event);
        return;
      }

      const eventDate = parseEventDate(event.date);
      const processedEvent = {
        ...event,
        eventDate
      };

      if (eventDate >= now) {
        processed.upcomingEvents.push(processedEvent);
      } else {
        processed.pastEvents.push(processedEvent);
      }
    });

    processed.upcomingEvents.sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime());
    processed.pastEvents.sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime());

    setEvents(processed);
    
    // Type-safe event selection with null fallback
    const firstUpcoming = processed.upcomingEvents[0] ?? null;
    const firstPast = processed.pastEvents[0] ?? null;
    
    if (firstUpcoming) {
      setCurrentEvent(firstUpcoming);
      setActiveTab('upcoming');
    } else if (firstPast) {
      setCurrentEvent(firstPast);
      setActiveTab('past');
    }
  }, []);

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

  const activeEvents = activeTab === 'upcoming' ? events.upcomingEvents : events.pastEvents;

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-[#f0e6ff] flex items-center justify-center">
        <div className="text-2xl text-[#1a3264]">
          {activeEvents.length === 0 
            ? "No events to display" 
            : "Loading events..."}
        </div>
      </div>
    );
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
            Events and Festivals
          </h1>
          <p className="text-2xl text-purple-700 italic">
            Imaginations Dancing Wilder Than Words
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => {
              setActiveTab('upcoming');
              const firstEvent = events.upcomingEvents[0] ?? null;
              if (firstEvent) setCurrentEvent(firstEvent);
            }}
            className={`px-6 py-3 rounded-l-full text-xl font-bold ${
              activeTab === 'upcoming'
                ? 'bg-[#1a3264] text-white'
                : 'bg-gray-200 text-[#1a3264]'
            }`}
          >
            Upcoming Events ({events.upcomingEvents.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('past');
              const firstEvent = events.pastEvents[0] ?? null;
              if (firstEvent) setCurrentEvent(firstEvent);
            }}
            className={`px-6 py-3 rounded-r-full text-xl font-bold ${
              activeTab === 'past'
                ? 'bg-[#1a3264] text-white'
                : 'bg-gray-200 text-[#1a3264]'
            }`}
          >
            Past Events ({events.pastEvents.length})
          </button>
        </div>

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
                <Link 
                  href="/contact" 
                  className="bg-[#c4a01c] text-white px-8 py-4 rounded-full hover:bg-[#1a3264] transition-all flex items-center space-x-2 group"
                >
                  <Heart className="group-hover:scale-125 transition-transform" />
                  <span>Get Your Tickets</span>
                  <Star className="group-hover:rotate-45 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full h-[500px] rounded-3xl overflow-hidden relative flex items-center justify-center"
            >
              {currentEvent.imageUrl ? (
                <Image
                  src={currentEvent.imageUrl}
                  alt={currentEvent.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-300 flex items-center justify-center">
                  <Calendar className="text-white w-64 h-64 opacity-30" />
                </div>
              )}
            </motion.div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            {activeEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setCurrentEvent(event)}
                className={`w-4 h-4 rounded-full ${
                  currentEvent.id === event.id ? 'bg-[#1a3264]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}