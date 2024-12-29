import React from 'react';
import { VideoPlayer } from './VideoPlayer';

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&h=450&q=80",
    title: "Digital Art Creation",
    src: "https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1633354931133-27c285ef4a22?auto=format&fit=crop&w=800&h=450&q=80",
    title: "NFT Collection",
    src: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&h=450&q=80",
    title: "3D Modeling",
    src: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_1_preview.mp4"
  }
];

export function VideoShowcase() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
            🎬 Watch & Learn
          </span>
          <h2 className="mt-4 text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            See the Magic Happen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoPlayer key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}