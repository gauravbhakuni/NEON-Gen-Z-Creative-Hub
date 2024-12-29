import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Sparkles, Users, Palette, Zap, Music, Trophy } from 'lucide-react';

const features = [
  {
    name: 'Custom Aesthetics',
    description: 'Create your unique style with AI-powered design tools',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Squad Goals',
    description: 'Connect with your crew and collaborate on projects',
    icon: Users,
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    name: 'Trending Content',
    description: 'Stay updated with what\'s hot in the community',
    icon: Sparkles,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Quick Drops',
    description: 'Share your content instantly with one-click posting',
    icon: Zap,
    gradient: 'from-green-500 to-blue-500',
  },
  {
    name: 'Vibe Check',
    description: 'Curate your feed with personalized content',
    icon: Music,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Challenges',
    description: 'Join daily challenges and win exclusive rewards',
    icon: Trophy,
    gradient: 'from-red-500 to-pink-500',
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.name} {...feature} />
      ))}
    </div>
  );
}