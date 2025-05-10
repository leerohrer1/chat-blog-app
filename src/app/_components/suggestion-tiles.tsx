type DisplaySuggestionTilesProps = {
    tiles: string[];
};

export default function DisplaySuggestionTiles({ tiles }: DisplaySuggestionTilesProps) {
    return (
        <div className="flex flex-wrap gap-3">
            {tiles.map((tile: string, index: number) => (
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