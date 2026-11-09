import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="game-shell">
      <iframe
        className="game-frame"
        title="Lumenwell"
        src="/lumenwell.html"
      />
    </main>
  );
}
