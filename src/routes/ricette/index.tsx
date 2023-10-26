import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <ul class="ul">
        <li class="li">
          <button>
            <h1>
              <Link href="/ricette/vegetariane/">Vegetariane</Link>
            </h1>
          </button>
        </li>
        <li class="li">
          <button>
            <h1>
              <Link href="/ricette/a-base-di-carne/">A base di carne</Link>
            </h1>
          </button>
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