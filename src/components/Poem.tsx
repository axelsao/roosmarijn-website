import React from 'react';

export function Poem() {
  return (
    <section className="max-w-2xl mx-auto mb-32 text-center">
      <div className="space-y-6 leading-relaxed">
        <div className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm shadow-xl border border-rose-100">
          <p className="italic text-neutral-700">
            "I love you with what in me is left of childhood,
            <br />with the faith I had before doubt,
            <br />with the passion of a first love
            <br />and the gratitude of first bread."
          </p>
          <p className="text-sm text-rose-500 mt-4 font-medium">
            — Jaime Sabines
          </p>
        </div>
      </div>
    </section>
  );
}