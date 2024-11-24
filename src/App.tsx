import React from 'react';
import { Header } from './components/Header';
import { FloatingIcons } from './components/FloatingIcons';
import { Poem } from './components/Poem';
import { WordReveal } from './components/WordReveal';

function App() {
  const definingWords = [
    'Radiant',
    'Beloved',
    'Enchanting',
    'Precious',
    'Magical',
    'Inspiring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      <FloatingIcons />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <Header />
        <Poem />
        
        <section className="mb-32 text-center">
          <h2 className="text-3xl font-extralight mb-12 text-neutral-800">
            Words That Define Her
          </h2>
          <div className="text-2xl font-light tracking-wide">
            <WordReveal words={definingWords} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;