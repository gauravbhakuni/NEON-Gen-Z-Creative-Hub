import React from 'react';

export function FeatureHeader() {
  return (
    <div className="text-center mb-16">
      <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
        ✨ Why Choose Us
      </span>
      <h2 className="mt-4 text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Your Vibe, Your Tribe
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Join a community that gets you. Express yourself, connect with others, and create something amazing.
      </p>
    </div>
  );
}