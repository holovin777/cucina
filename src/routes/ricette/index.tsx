import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <ul class="ul">
        <li class="li">
          <h2>
            <Link href="/ricette/a-base-di-carne/">A base di carne</Link>
          </h2>
        </li>
        <li class="li">
          <h2>
            <Link href="/ricette/vegetariane/">Vegetariane</Link>
          </h2>
        </li>
      </ul>
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
