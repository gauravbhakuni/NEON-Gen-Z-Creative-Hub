import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function HeroText() {
  return (
    <div className="text-center relative z-10">
      <div className="inline-block">
        <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          We just dropped something cool 🔥
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent pb-4">
          Create & Share
        </span>
        <span className="block text-white">Your Digital Vibe</span>
      </h1>
      
      <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
        Join the next-gen creative community where your imagination knows no bounds.
        Build, collaborate, and make it yours.
      </p>
      
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button className="group relative px-6 py-3">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
          <div className="relative flex items-center justify-center bg-black rounded-lg px-6 py-3 text-white">
            <Sparkles className="w-5 h-5 mr-2" />
            Start Creating
          </div>
        </button>
        
        <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-6 py-3">
          See Examples
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}