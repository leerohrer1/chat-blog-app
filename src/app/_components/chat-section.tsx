"use client";

import { useContext } from "react";
import SearchBar from "./search-bar";
import DisplaySuggestionTiles from "./suggestion-tiles";
import { SuggestionTilesContext } from "../context/suggestion-tiles-context";

export function ChatSection() {
    const context = useContext(SuggestionTilesContext);
    if (!context) throw new Error('Component must be wrapped in <SuggestionTilesProvider>');
    const { suggestionTiles, setSuggestionTiles } = context;

    const handleAddTile = (newTile: string) => {
        if (newTile.trim() !== "") {
            setSuggestionTiles([newTile, ...suggestionTiles]);
        }
    };

    return (
        <section>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Chat
            </h2>
                <SearchBar onSubmit={handleAddTile} />
                <br />
                <DisplaySuggestionTiles />
                <br />
        </section>
    );
};