import { use, useState } from "react";

type SearchBarProps = {
    onSubmit: (text: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(input);
        setInput("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Ask a question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-4 py-2 rounded"
                />
            </div>
        </form>
    );
}
