import { useContext } from "react";
import { SuggestionTilesContext } from "../context/suggestion-tiles-context";

export default function DisplaySuggestionTiles() {
    const context = useContext(SuggestionTilesContext);
    if (!context) throw new Error('Component must be wrapped in <SuggestionTilesProvider>');
    const { suggestionTiles, setSuggestionTiles } = context;

    return (
        <div className="flex flex-wrap gap-3">
            {suggestionTiles.map((tile: string, index: number) => (
                <div
                    key={index}
                    className="bg-slate-200 dark:bg-slate-700 text-black dark:text-white px-4 py-2 rounded-xl text-sm shadow hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition"
                >
                    {tile}
                </div>
            ))}
        </div>
    );
}