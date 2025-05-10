"use client";

import { useState } from "react";
import SearchBar from "./search-bar";
import DisplaySuggestionTiles from "./suggestion-tiles";

export function ChatSection() {
    const [tiles, setTiles] = useState([
        "Lee is learning!",
        "Should I eat or should I work more?",
        "What is real?",
        "Who is Tom?",
        "What should some chat topics be?",
        "This is nonsense, thanks for reading.",
        "Is this short?",
        "What about this one?"
       ]);

       const handleAddTile = (newTile: string) => {
        if (newTile.trim() !== "") {
            setTiles([newTile, ...tiles]);
        }
    };

    return (
        <section>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Chat
            </h2>
                <SearchBar onSubmit={handleAddTile} />
                <br />
                <DisplaySuggestionTiles tiles={tiles} />
                <br />
        </section>
    );
};