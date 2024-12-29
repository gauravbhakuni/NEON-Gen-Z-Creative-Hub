import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function FeatureCard({ name, description, icon: Icon, gradient }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:bg-gradient-to-r from-purple-400 to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {name}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover effect background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
    </div>
  );
}