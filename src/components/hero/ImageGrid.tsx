import React from 'react';

export function ImageGrid() {
  const images = [
    'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&h=300&q=80',
    'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?auto=format&fit=crop&w=300&h=300&q=80',
  ];

  return (
    <div className="relative grid grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto pt-8">
      {images.map((src, index) => (
        <div
          key={index}
          className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-900 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={src}
            alt={`Grid image ${index + 1}`}
            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}
    </div>
  );
}