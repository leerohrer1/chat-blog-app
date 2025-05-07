export function SearchBar() {
    return (
      <form>
        <div>
          <input
            type="text"
            placeholder="Ask a question..."
            />
        </div>
      </form>
    );
  }  

function SuggestionTiles() {
    return (
        <div className="flex flex-wrap gap-3">
        {TILES.map((tile, index) => (
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

export function ChatSection() {
    return (
        <section>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Chat
            </h2>
                <SearchBar />
                <br />
                <SuggestionTiles />
                <br />
        </section>
    );
}



const TILES = [
   "Lee is learning!",
   "Should I eat or should I work more?",
   "What is real?",
   "Who is mother?",
   "What should some chat topics be?",
   "This is nonsense, thanks for reading.",
   "Is this short?",
   "What about this one?"
  ];
  