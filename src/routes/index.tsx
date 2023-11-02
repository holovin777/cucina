import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Le mie preferite <Link href="/ricette/">ricette</Link> <Link href="/ricette/vegetariane">vegetariane</Link> e di <Link href="/ricette/a-base-di-carne">carne</Link></h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ricette",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
