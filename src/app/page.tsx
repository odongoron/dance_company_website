// src/app/page.tsx
import React from 'react';
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Hero />
    </div>
  );
}
