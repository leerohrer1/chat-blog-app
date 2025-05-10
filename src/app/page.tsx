import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { ChatSection } from "@/app/_components/chat-section";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      {/* ask matt if this works */}
      <React.StrictMode> 
      <Container>
        <Intro />
        <ChatSection />
        <MoreStories posts={allPosts} />
      </Container>
      </React.StrictMode>
    </main>
  );
}