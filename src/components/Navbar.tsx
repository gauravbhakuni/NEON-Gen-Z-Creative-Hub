import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthButtons } from './nav/AuthButtons';
import type { AuthPage } from '../types/auth';

interface NavbarProps {
  onAuthClick: (page: AuthPage) => void;
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <div 
            onClick={() => onAuthClick(null)}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
          >
            NEON
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <AuthButtons onAuthClick={onAuthClick} />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {['Features', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <AuthButtons onAuthClick={(page) => {
                onAuthClick(page);
                setIsOpen(false);
              }} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}