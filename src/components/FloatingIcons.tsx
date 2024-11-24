import React from 'react';
import { Star, Heart, Sparkles, Coffee, Music, Book, Palette } from 'lucide-react';

interface FloatingIconProps {
  children: React.ReactNode;
  className: string;
}

function FloatingIcon({ children, className }: FloatingIconProps) {
  return (
    <div className={`absolute text-rose-200/20 animate-float ${className}`}>
      {children}
    </div>
  );
}

export function FloatingIcons() {
  return (
    <>
      <FloatingIcon className="top-1/4 left-1/4"><Star size={24} /></FloatingIcon>
      <FloatingIcon className="top-1/3 right-1/4"><Heart size={24} /></FloatingIcon>
      <FloatingIcon className="bottom-1/4 left-1/3"><Sparkles size={24} /></FloatingIcon>
      <FloatingIcon className="top-1/2 right-1/3"><Coffee size={24} /></FloatingIcon>
      <FloatingIcon className="bottom-1/3 right-1/2"><Music size={24} /></FloatingIcon>
      <FloatingIcon className="top-3/4 left-1/2"><Book size={24} /></FloatingIcon>
      <FloatingIcon className="bottom-1/2 left-1/4"><Palette size={24} /></FloatingIcon>
    </>
  );
}