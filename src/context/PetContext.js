// src/context/PetContext.js
"use client";

import { createContext, useState } from "react";

export const PetContext = createContext({
  hunger: 0,
  energy: 0,
  happiness: 0,
  feed: () => {},
  play: () => {},
  rest: () => {}
});

export function PetProvider({ children }) {
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const feed = () => setHunger((h) => Math.min(100, h + 20));
  const play = () => {
    setHappiness((h) => Math.min(100, h + 15));
    setEnergy((e) => Math.max(0, e - 10));
  };
  const rest = () => setEnergy((e) => Math.min(100, e + 20));

  return (
    <PetContext.Provider value={{ hunger, energy, happiness, feed, play, rest }}>
      {children}
    </PetContext.Provider>
  );
}
