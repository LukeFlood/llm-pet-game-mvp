// src/app/game/page.js
"use client";

import { useState, useEffect } from "react";

export default function GamePage() {
  const rows = 5, cols = 5;

  function createGrid() {
    return Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => ({
        row: r, col: c,
        value: Math.floor(Math.random() * 3) + 1,
        sunk: false,
      }))
    );
  }

  const [grid, setGrid] = useState(null);
  const [pos, setPos] = useState({ row: Math.floor(rows/2), col: 0 });
  const [won, setWon] = useState(false);

  useEffect(() => setGrid(createGrid()), []);

  if (!grid) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Lily Pad Jumper</h1>
        <p className="text-sm text-subtext">Loading game…</p>
      </div>
    );
  }

  const isNeighbor = (r,c) => {
    const dr = r-pos.row, dc = c-pos.col;
    const deltas = r%2 === 0
      ? [[-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1]]
      : [[-1,-1],[-1,0],[0,-1],[0,1],[1,-1],[1,0]];
    return deltas.some(([drr,dcc])=>drr===dr&&dcc===dc);
  };

  const handleClick = (r,c) => {
    if(won) return;
    const cell=grid[r][c];
    if(cell.sunk) return;
    if(!(r===pos.row&&c===pos.col)&&!isNeighbor(r,c)) return;

    setPos({ row:r, col:c });
    const N = cell.value;
    const neighborCoords = (r%2===0
      ? [[-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1]]
      : [[-1,-1],[-1,0],[0,-1],[0,1],[1,-1],[1,0]]
    )
    .map(([dr,dc])=>[r+dr,c+dc])
    .filter(([nr,nc])=>nr>=0&&nr<rows&&nc>=0&&nc<cols&&!grid[nr][nc].sunk)
    .sort(()=>0.5-Math.random())
    .slice(0,N);

    setGrid(prev=>{
      const copy=prev.map(row=>row.map(cell=>({...cell})));
      neighborCoords.forEach(([nr,nc])=>copy[nr][nc].sunk=true);
      return copy;
    });

    if(c===cols-1) setWon(true);
  };

  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-2xl font-bold">Lily Pad Jumper</h1>
        <p className="text-sm text-subtext">Select adjacent pads to cross.</p>
      </div>

      {won && (
        <div className="p-2 bg-secondary text-card rounded-lg text-sm">
          🎉 You made it across! 🎉
        </div>
      )}

      <div className="flex flex-col space-y-1">
        {grid.map((rowArr,r) => (
          <div key={r} className={`${r%2? "pl-6":""} flex space-x-1`}>
            {rowArr.map(cell => {
              const {row,col,value,sunk}=cell;
              const isHere = pos.row===row&&pos.col===col;
              const neighbor = isNeighbor(row,col);
              const base = isHere
                ? "bg-primary text-bg"
                : sunk
                ? "bg-gray-600 text-subtext"
                : neighbor
                ? "bg-card text-text hover:bg-primary/20"
                : "bg-card text-subtext";
              return (
                <button
                  key={`${row}-${col}`}
                  onClick={()=>handleClick(row,col)}
                  disabled={sunk||(!isHere&&!neighbor)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded ${base}`}
                  style={{clipPath:"polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)"}}
                >
                  {value}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
