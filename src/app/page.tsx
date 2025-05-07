import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { ChatSection } from "@/app/_components/chat";
export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <ChatSection />
        <MoreStories posts={allPosts} />
      </Container>
    </main>
  );
}
