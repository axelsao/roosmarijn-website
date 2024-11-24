import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-32 animate-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 via-pink-100/20 to-rose-100/20 blur-3xl -z-10" />
      <h1 className="text-8xl font-extralight mb-8 bg-gradient-to-r from-rose-500 to-pink-500 text-transparent bg-clip-text tracking-wider">
        Roosmarijn Top
      </h1>
      <div className="flex items-center justify-center gap-3 text-xl text-neutral-600 font-light">
        <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
        <p className="tracking-wide">A truly remarkable soul</p>
        <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
      </div>
    </div>
  );
}