import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <ul>
      <li>
        <button>
          <h1>
            <Link href="/ricette/a-base-di-carne/involucri-di-prosciutto-cotto-e-philadelphia/">Involucri di Prosciutto cotto e Philadelphia</Link>
          </h1>
        </button>
      </li>
    </ul>
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

