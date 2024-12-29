import React from 'react';

export function Shapes() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Floating circles with hover effects */}
      <div className="group absolute top-20 left-1/4 hover:scale-110 transition-transform duration-500">
        <div className="w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-float-delayed absolute -inset-4" />
      </div>

      <div className="group absolute -bottom-20 right-1/4 hover:scale-110 transition-transform duration-500">
        <div className="w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="w-80 h-80 bg-pink-400/5 rounded-full blur-2xl animate-float-delayed absolute -inset-4" />
      </div>

      {/* Semi-circles and geometric shapes */}
      <div className="absolute top-1/4 -left-20 w-40 h-80 hover:scale-105 transition-transform duration-500">
        <div className="w-full h-full border-r-2 border-purple-500/20 rounded-r-full animate-pulse-slow" />
      </div>

      <div className="absolute bottom-1/4 -right-20 w-40 h-80 hover:scale-105 transition-transform duration-500">
        <div className="w-full h-full border-l-2 border-pink-500/20 rounded-l-full animate-pulse-slow delay-300" />
      </div>

      {/* Animated squares */}
      <div className="group absolute top-1/3 right-1/3 hover:rotate-180 transition-all duration-700">
        <div className="w-24 h-24 border border-purple-500/20 rotate-45 animate-spin-slow" />
        <div className="w-24 h-24 border border-purple-500/10 rotate-90 absolute inset-0 animate-spin-reverse" />
      </div>

      <div className="group absolute bottom-1/3 left-1/3 hover:rotate-180 transition-all duration-700">
        <div className="w-32 h-32 border border-pink-500/20 rounded-3xl rotate-12 animate-spin-slow" />
        <div className="w-32 h-32 border border-pink-500/10 rounded-3xl rotate-45 absolute inset-0 animate-spin-reverse" />
      </div>

      {/* Grid pattern with fade */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}