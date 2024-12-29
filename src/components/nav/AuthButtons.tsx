import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  onAuthClick: (page: 'login' | 'register') => void;
}

export function AuthButtons({ onAuthClick }: AuthButtonsProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onAuthClick('login')}
        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span>Login</span>
      </button>
      <button
        onClick={() => onAuthClick('register')}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
      >
        <UserPlus className="w-4 h-4" />
        <span>Register</span>
      </button>
    </div>
  );
}