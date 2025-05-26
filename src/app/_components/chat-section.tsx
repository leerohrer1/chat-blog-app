"use client";

import { useContext, useState } from "react";
import SearchBar from "./search-bar";
import DisplaySuggestionTiles from "./suggestion-tiles";
import { SuggestionTilesContext } from "../context/suggestion-tiles-context";
import Chat from "../chat/page";
import Modal from "./modal";

export function ChatSection() {
      const [modalStatus, setModalStatus] = useState(false);

  const context = useContext(SuggestionTilesContext);
  if (!context)
    throw new Error("Component must be wrapped in <SuggestionTilesProvider>");
  
  const { suggestionTiles, setSuggestionTiles } = context;
  
  const handleSubmit = (newTile: string) => {
    if (newTile.trim() !== "") {
      setSuggestionTiles([newTile, ...suggestionTiles]);
      setModalStatus(true)
    }
  };

  const handleClose = () => setModalStatus(false);

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Chat
      </h2>
      <SearchBar onSubmit={handleSubmit} />
      <Modal isOpen={modalStatus} closeModal={handleClose}>
        <Chat />
      </Modal>
      <br />
      <DisplaySuggestionTiles />
      <br />
    </section>
  );
}
