// src/app/explore/page.js
"use client";

import { useContext } from "react";
import { PetContext } from "../../context/PetContext";

export default function ExplorePage() {
  const { hunger, energy, happiness } = useContext(PetContext);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Explore</h1>
        <p className="text-sm text-subtext">Navigate the world with your pet.</p>
      </div>

      <div className="bg-card p-4 rounded-lg shadow-card max-w-xs text-xs">
        <h2 className="font-semibold mb-2">Current Pet Stats</h2>
        <ul className="space-y-1">
          <li>Hunger: <span className="text-primary">{hunger}%</span></li>
          <li>Energy: <span className="text-secondary">{energy}%</span></li>
          <li>Happiness: <span className="text-primary">{happiness}%</span></li>
        </ul>
      </div>

      {/* Your 5×5 grid can stay the same but shrink button sizes if needed */}
    </div>
  );
}
