import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Li } from "~/components/link/link";

export default component$(() => {
  return (
    <ul class="ul">
      <Li
        href="/ricette/a-base-di-pesce/stoccafisso-alla-vicentina/"
        name="Stoccafisso all vicentina"
      />
    </ul>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ricette a base di pesce",
  meta: [
    {
      name: "description",
      content: "Welcome to Ricette a base di pesce",
    },
  ],
};