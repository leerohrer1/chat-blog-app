'use client';
import React, { createContext, useEffect, useState } from 'react';

type SuggestionTilesContextType = {
    suggestionTiles: string[];
    setSuggestionTiles: React.Dispatch<React.SetStateAction<string[]>>;
  };

const defaultSuggestionTiles: string[] =  [
    "Lee is learning!",
    "Should I eat or should I work more?",
    "What is real?",
    "Who is Tom?",
    "What should some chat topics be?",
    "This is nonsense, thanks for reading.",
    "Is this short?",
    "What about this one?"
   ]
  
  export const SuggestionTilesContext = createContext<SuggestionTilesContextType | undefined>(undefined);

  export function SuggestionTilesProvider({children}: { children: React.ReactNode }) {
    const [suggestionTiles, setSuggestionTiles] = useState(defaultSuggestionTiles)

    useEffect(() => {
        try {
        const storedSuggestionTiles = localStorage.getItem('suggestionTiles');
        if (storedSuggestionTiles) {
            setSuggestionTiles(JSON.parse(storedSuggestionTiles));
        }
        } catch (error) {
        console.error('Error loading suggestion tiles from localStorage', error);
        }
    }, []);

    useEffect(() => {
        try {
          localStorage.setItem('suggestionTiles', JSON.stringify(suggestionTiles));
        } catch (error) {
          console.error('Error saving suggestion tiles to localStorage', error);
        }
      }, [suggestionTiles]);
      
      return (
        <SuggestionTilesContext.Provider value={{ suggestionTiles, setSuggestionTiles }}>
          {children}
        </SuggestionTilesContext.Provider>
      );
  }



