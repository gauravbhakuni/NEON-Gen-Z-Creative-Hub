import React from 'react';
import { DraggableGrid } from './DraggableGrid';

export function CommunityGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
            ⚡️ Community Vibes
          </span>
          <h2 className="mt-2 text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Trending Creations
          </h2>
          <p className="mt-4 text-gray-400">
            Drag to explore more amazing creations from our community
          </p>
        </div>

        <DraggableGrid />
      </div>
    </section>
  );
}