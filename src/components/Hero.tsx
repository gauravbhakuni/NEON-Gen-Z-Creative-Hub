import React from 'react';
import { Shapes } from './shapes/Shapes';
import { HeroText } from './hero/HeroText';
import { ImageGrid } from './hero/ImageGrid';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black mt-16 py-8">
      <Shapes />
      <div className="relative mx-auto max-w-7xl px-6">
        <HeroText />
        <ImageGrid />
      </div>
    </div>
  );
}