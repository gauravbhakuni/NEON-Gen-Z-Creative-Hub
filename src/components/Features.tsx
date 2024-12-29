import React from 'react';
import { FeatureGrid } from './features/FeatureGrid';
import { FeatureHeader } from './features/FeatureHeader';

export function Features() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FeatureHeader />
        <FeatureGrid />
      </div>
    </div>
  );
}