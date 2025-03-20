"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, Twitter, ChevronDown, Award, Music, Users, Star } from "lucide-react";

// Define the structure of a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: string;
  gridImage: string;
  modalImage: string;
  achievements: string[];
  bio: string;
  specialties: string[];
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

const TeamPage = () => {
  // Explicitly type selectedMember as TeamMember | null
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const teamCategories = [
    { id: "all", label: "All Team" },
    { id: "leader", label: "Leadership" },
    { id: "instructor", label: "Instructors" },
    { id: "performer", label: "Performers" },
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Misheal Victor Okumu",
      role: "Founder & Creative Director",
      category: "leader",
      gridImage: "/team/team_id_1.jpg",
      modalImage: "/team/team_id_1_full.jpg",
      achievements: ["15+ Years Experience", "International Performer", "Certified Trainer"],
      bio: "Visionary leader who transformed a community initiative into a thriving arts empire. ",
      specialties: ["Contemporary Dance", "Gymnastics","Choreography", "Youth Development"],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Rachel Okumu",
      role: "Operatins & Finance Manager",
      category: "leader",
      gridImage: "/team/team_id_2.jpg",
      modalImage: "/team/team_id_2_full.jpg",
      achievements: [" ", " ", " "],
      bio: " ",
      specialties: [" ", " "," ", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Dennis Nzaro",
      role: "Digital marketing",
      category: "leader",
      gridImage: "/team/team_id_3.jpg",
      modalImage: "/team/team_id_3_full.jpg",
      achievements: ["7+ Years Experience", " ", " "],
      bio: "A seasoned digital marketing professional with over seven years of experience, having advanced from a junior graphic designer to an expert in creating and executing marketing strategies for diverse industries in Nairobi. ",
      specialties: ["Graphic Design", " "," ", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Joy Oseko",
      role: "Costume Manager",
      category: "leader",
      gridImage: "/team/team_id_4.jpg",
      modalImage: "/team/team_id_4_full.jpg",
      achievements: [" ", " ", " "],
      bio: "A talented dancer and professional ballet teacher, Joy Oseko has evolved from a high school passion for dance into a dedicated artist and educator. She has performed on prominent stages and is committed to sharing her expertise with aspiring dancers. ",
      specialties: [" ", " "," ", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 5,
      name: "Daniel Omondi",
      role: "Studio Manager",
      category: "leader",
      gridImage: "/team/team_id_5.jpg",
      modalImage: "/team/team_id_5_full.jpg",
      achievements: ["Professional Performer", " ", " "],
      bio: "Daniel Omondi is a passionate dancer, choreographer, and the Acting Studio Manager at Blingers Empire, based in Mumias, Kenya. With a deep love for self-expression through dance, his journey began after high school and has evolved over the past 7 years, exploring various dance styles and choreography. As the Acting Studio Manager, he excels in his work while remaining dedicated to learning, creating, and sharing his dance knowledge with others.",
      specialties: ["Ballet and Gymnastics", "Contemporary Dance", "Urban Dance"],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Demot Ademba",
      role: "Gymnastics/Ballet Instructor",
      category: "instructor",
      gridImage: "/team/team_id_6.jpg",
      modalImage: "/team/team_id_6_full.jpg",
      achievements: [" ", " ", " "],
      bio: "A versatile talent nurtured by Blingers Empire, Demot Ademba transitioned from martial arts to dance and gymnastics, blending discipline and physical control with creative expression. He continues to evolve as a performer, showcasing dedication and growth in both fields. ",
      specialties: ["Contemporary Dance", "Gymnastics","Hip Hop", "Afro Urban & Ballroom"],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 7,
      name: "Mercy Anne Kageshi",
      role: "Dance Instructor",
      category: "instructor",
      gridImage: "/team/team_id_7.jpg",
      modalImage: "/team/team_id_7_full.jpg",
      achievements: [" ", " ", " "],
      bio: "Mercy Anne Kageshi is a talented dancer, choreographer, and former Operations Manager at Blingers Empire. With a passion for dance and a strong background in performance, she balanced her artistic pursuits with managing operations, contributing significantly to the growth and success of the company.",
      specialties: [" ", "Choreography", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 8,
      name: "Joseph Ndolo Masila",
      role: "Costume Manager",
      category: "instructor",
      gridImage: "/team/team_id_8.jpg",
      modalImage: "/team/team_id_8_full.jpg",
      achievements: [" ", " ", " "],
      bio: "A distinguished Kenyan dance artist, Joseph Ndolo Masila has built a remarkable career blending multiple dance styles, including Salsa, Kizomba, Bachata, Afro, Dancehall, and Improvisation. He has collaborated with prominent dance ensembles across East Africa and continues to refine his craft with Blingers Empire.",
      specialties: [" ", " "," ", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 9,
      name: "Denyse Ombithi",
      role: "Gymnastics Instructor",
      category: "instructor",
      gridImage: "/team/team_id_9.jpg",
      modalImage: "/team/team_id_9_full.jpg",
      achievements: [" ", " ", " "],
      bio: "Denyse Ombithi is a passionate dancer and gymnast from Nairobi, Kenya, with a strong dedication to excellence. She started dancing in 2016 and has since honed her skills in both dance and gymnastics, becoming a level three gymnast. She teaches gymnastics and is committed to continuously improving her craft.",
      specialties: [" ", " "," ", " "],
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Students Trained" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Music, value: "50+", label: "Performances" },
    { icon: Star, value: "100%", label: "Parent Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#d5d8dd]">
      {/* Hero Section */}
      <div className="relative h-[500px] -mb-32">
        <Image
          src="/covers/team/team_cover.jpg"
          alt="Team Hero Banner"
          className="object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3264]/70">
          <div className="container mx-auto h-full px-4 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Meet Our Team</h1>
              <p className="text-xl text-[#c4a01c]">
                The passionate individuals behind Blingers Empire
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 relative">
        <div className="bg-white rounded-xl shadow-lg py-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-[#c4a01c] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#1a3264]">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Filter */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#1a3264] text-white"
                  : "bg-white text-[#1a3264] hover:bg-[#c4a01c] hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers
            .filter((member) => activeCategory === "all" || member.category === activeCategory)
            .map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMember(member)} // No type error now
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.gridImage}
                    alt={member.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3264] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-[#c4a01c] mb-4">{member.role}</p>
                        <div className="flex space-x-4">
                          {Object.entries(member.socialMedia).map(([platform, link]) => {
                            const Icon = {
                              instagram: Instagram,
                              facebook: Facebook,
                              twitter: Twitter,
                            }[platform] as React.ComponentType<React.SVGProps<SVGSVGElement>>; // Updated to avoid 'any'
                            return (
                              <a
                                key={platform}
                                href={link}
                                className="text-white hover:text-[#c4a01c] transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon className="w-5 h-5" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#1a3264] mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-[#c4a01c] text-xl">{selectedMember.role}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-[#1a3264] transition-colors"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={selectedMember.modalImage}
                      alt={selectedMember.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#1a3264] mb-2">Bio</h3>
                    <p className="text-gray-700">{selectedMember.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3264] mb-2">Specialties</h3>
                    <ul className="list-disc pl-6">
                      {selectedMember.specialties.map((specialty, index) => (
                        <li key={index} className="text-gray-700">
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#1a3264] mb-2">Achievements</h3>
                <ul className="list-disc pl-6">
                  {selectedMember.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;

