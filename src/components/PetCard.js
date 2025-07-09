// src/components/PetCard.js
"use client";

import { useContext } from "react";
import { PetContext } from "../context/PetContext";

export function PetCard() {
  const { hunger, energy, happiness, feed, play, rest } =
    useContext(PetContext);

  function StatusBar({ label, value, color }) {
    return (
      <div className="mb-2">
        <div className="flex justify-between text-xs text-subtext">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
        <div className="w-full h-1 bg-gray-600 rounded">
          <div
            className={`h-1 rounded ${color}`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xs p-4 bg-card rounded-lg shadow-card space-y-3">
      <img
        src="/assets/pet.png"
        alt="Your pet"
        className="h-20 w-20 rounded-full mx-auto object-cover"
      />
      <h2 className="text-2xl font-semibold text-center">{/* Pet Name */}Buddy</h2>

      <StatusBar label="Hunger"    value={hunger}    color="bg-primary"   />
      <StatusBar label="Energy"    value={energy}    color="bg-secondary" />
      <StatusBar label="Happiness" value={happiness} color="bg-primary"   />

      <div className="flex justify-between text-xs">
        <button
          onClick={feed}
          className="px-3 py-1 bg-primary hover:bg-primary/80 text-bg rounded"
        >
          Feed
        </button>
        <button
          onClick={play}
          className="px-3 py-1 bg-secondary hover:bg-secondary/80 text-bg rounded"
        >
          Play
        </button>
        <button
          onClick={rest}
          className="px-3 py-1 bg-primary hover:bg-primary/80 text-bg rounded"
        >
          Rest
        </button>
      </div>
    </div>
  );
}
