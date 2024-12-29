import React from 'react';
import { Shapes } from '../shapes/Shapes';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4">
      <Shapes />
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/10 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}