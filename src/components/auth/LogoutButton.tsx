import React from 'react';
import { LogOut } from 'lucide-react';

export function LogoutButton() {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-200"
    >
      <LogOut className="w-4 h-4" />
      <span>peace out ✌️</span>
    </button>
  );
}