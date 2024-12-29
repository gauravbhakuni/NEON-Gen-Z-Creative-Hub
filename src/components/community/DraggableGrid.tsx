import React, { useRef, useState } from 'react';
import { Heart } from 'lucide-react';

interface Post {
  image: string;
  author: string;
  likes: number;
}

const posts: Post[] = [
  {
    image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?auto=format&fit=crop&w=400&h=400&q=80",
    author: "pixel_queen",
    likes: 2.4
  },
  {
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=400&h=400&q=80",
    author: "cyber_punk",
    likes: 1.8
  },
  {
    image: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&w=400&h=400&q=80",
    author: "neon_dreamer",
    likes: 3.2
  },
  {
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&h=400&q=80",
    author: "digital_artist",
    likes: 2.9
  },
  {
    image: "https://images.unsplash.com/photo-1633354931141-692a4a463230?auto=format&fit=crop&w=400&h=400&q=80",
    author: "future_wave",
    likes: 4.1
  },
  {
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&w=400&h=400&q=80",
    author: "crypto_artist",
    likes: 3.7
  },
  {
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&w=400&h=400&q=80",
    author: "meta_creator",
    likes: 2.6
  },
  {
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=400&h=400&q=80",
    author: "vibe_master",
    likes: 3.4
  }
];

export function DraggableGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    } else {
      setStartX(e.pageX - scrollRef.current!.offsetLeft);
    }
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = 'touches' in e 
      ? e.touches[0].pageX - scrollRef.current!.offsetLeft
      : e.pageX - scrollRef.current!.offsetLeft;
      
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onMouseMove={onDrag}
      onTouchStart={startDragging}
      onTouchEnd={stopDragging}
      onTouchMove={onDrag}
    >
      <div className="grid grid-flow-col auto-cols-max gap-4 pb-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="w-72 aspect-square rounded-2xl overflow-hidden group relative"
          >
            <img 
              src={post.image} 
              alt={`Art by ${post.author}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium">@{post.author}</p>
                <div className="flex items-center gap-1 text-pink-400">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-sm">{post.likes}k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}