import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Li } from "~/components/link/link";

export default component$(() => {
  return (
    <ul class="ul">
      <Li
        href="/ricette/a-base-di-carne/involucri-di-prosciutto-cotto-e-philadelphia/"
        name="Involucri di Prosciutto cotto e Philadelphia"
      />
    </ul>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ricette a base di carne",
  meta: [
    {
      name: "description",
      content: "Welcome to Ricette a base di carne",
    },
  ],
};

