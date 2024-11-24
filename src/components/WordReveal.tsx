import React from 'react';

interface WordRevealProps {
  words: string[];
}

export function WordReveal({ words }: WordRevealProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="h-8 overflow-hidden">
      <div className="animate-fade-in bg-gradient-to-r from-rose-500 to-pink-500 text-transparent bg-clip-text">
        {words[currentIndex]}
      </div>
    </div>
  );
}